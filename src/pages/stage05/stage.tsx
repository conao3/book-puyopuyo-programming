import { useEffect, useEffectEvent, useRef, useState } from 'react';
import Config from './config';

type PuyoInfo = {
  color: number;
  x: number;
  y: number;
};

type FallingPuyoInfo = {
  x: number;
  color: number;
  position: number;
  destination: number;
  falling: boolean;
};

type GameState = 'start' | 'checkFallingPuyo' | 'fallingPuyo' | 'idle';

const createInitialBoard = (): (PuyoInfo | null)[][] =>
  Array.from({ length: Config.stageRows }, (_, y) =>
    Array.from({ length: Config.stageCols }, (_, x) => {
      const color = Config.initialBoard[y][x];
      if (color >= 1 && color <= Config.puyoColorMax) {
        return { color, x, y };
      }
      return null;
    }),
  );

const checkFallingPuyo = (board: (PuyoInfo | null)[][]) => {
  const newBoard = board.map((row) => [...row]);
  const fallingList: FallingPuyoInfo[] = [];
  for (let y = Config.stageRows - 2; y >= 0; y--) {
    for (let x = 0; x < Config.stageCols; x++) {
      const currentPuyo = newBoard[y][x];
      if (!currentPuyo || newBoard[y + 1][x]) continue;
      newBoard[y][x] = null;
      let destination = y;
      while (
        destination + 1 < Config.stageRows &&
        !newBoard[destination + 1][x]
      ) {
        destination++;
      }
      newBoard[destination][x] = { ...currentPuyo, y: destination };
      fallingList.push({
        x,
        color: currentPuyo.color,
        position: y * Config.puyoImageHeight,
        destination: destination * Config.puyoImageHeight,
        falling: true,
      });
    }
  }
  return { board: newBoard, fallingList };
};

const stepFallingPuyos = (list: FallingPuyoInfo[]) =>
  list.map((puyo) => {
    if (!puyo.falling) return puyo;
    const newPosition = puyo.position + Config.fallingSpeed;
    if (newPosition >= puyo.destination) {
      return { ...puyo, position: puyo.destination, falling: false };
    }
    return { ...puyo, position: newPosition };
  });

export default function Stage() {
  const [puyoBoard, setPuyoBoard] = useState(createInitialBoard);
  const [gameState, setGameState] = useState<GameState>('start');
  const [frame, setFrame] = useState(0);
  const [fallingPuyos, setFallingPuyos] = useState<FallingPuyoInfo[]>([]);
  const [deltaTime, setDeltaTime] = useState(0);
  const [fps, setFps] = useState(0);
  const lastTimestampRef = useRef(0);
  const animationIdRef = useRef<number | null>(null);

  const gameLoop = useEffectEvent((timestamp: number) => {
    const delta = timestamp - lastTimestampRef.current;
    setDeltaTime(delta);
    lastTimestampRef.current = timestamp;
    if (delta > 0) {
      setFps(Math.round(1000 / delta));
    }

    if (gameState === 'start') {
      setGameState('checkFallingPuyo');
    } else if (gameState === 'checkFallingPuyo') {
      const { board, fallingList } = checkFallingPuyo(puyoBoard);
      setPuyoBoard(board);
      setFallingPuyos(fallingList);
      setGameState(fallingList.length > 0 ? 'fallingPuyo' : 'idle');
    } else if (gameState === 'fallingPuyo') {
      const nextFallingPuyos = stepFallingPuyos(fallingPuyos);
      setFallingPuyos(nextFallingPuyos);
      if (!nextFallingPuyos.some((puyo) => puyo.falling)) {
        setGameState('idle');
      }
    }
    setFrame((f) => f + 1);
    animationIdRef.current = requestAnimationFrame(gameLoop);
  });

  useEffect(() => {
    animationIdRef.current = requestAnimationFrame(gameLoop);
    return () => {
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  const puyos = puyoBoard.flatMap((row, y) =>
    row
      .map((puyo, x) => {
        if (!puyo) return null;
        const fallingPuyo = fallingPuyos.find(
          (fp) =>
            fp.x === x &&
            fp.destination === y * Config.puyoImageHeight &&
            fp.falling,
        );
        const top = fallingPuyo
          ? fallingPuyo.position
          : y * Config.puyoImageHeight;
        return (
          <img
            key={`${puyo.y}-${puyo.x}`}
            src={`/img_sega/puyo_${puyo.color}.png`}
            alt=""
            className="absolute"
            style={{
              left: `${x * Config.puyoImageWidth}px`,
              top: `${top}px`,
              width: `${Config.puyoImageWidth}px`,
              height: `${Config.puyoImageHeight}px`,
            }}
          />
        );
      })
      .filter((p) => p !== null),
  );

  const puyoCount = puyoBoard.flat().filter((p) => p !== null).length;

  return (
    <div className="flex flex-row gap-4 justify-center">
      <div
        className="relative overflow-hidden"
        style={{
          width: `${Config.puyoImageWidth * Config.stageCols}px`,
          height: `${Config.puyoImageHeight * Config.stageRows}px`,
          backgroundColor: Config.stageBackgroundColor,
          backgroundImage: 'url(/img_sega/puyo_4bg.png)',
        }}
      >
        {puyos}
      </div>
      <div className="bg-gray-800 text-white p-4 rounded">
        <div className="space-y-1 text-sm font-mono">
          <div>Frame: {frame}</div>
          <div>Delta Time: {deltaTime.toFixed(2)}ms</div>
          <div>FPS: {fps}</div>
          <div>Game State: {gameState}</div>
          <div>Puyo Count: {puyoCount}</div>
          <div>Falling Puyos: {fallingPuyos.length}</div>
        </div>
      </div>
    </div>
  );
}
