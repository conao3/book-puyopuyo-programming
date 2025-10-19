import Config from './config';

export default function Stage() {
  const puyos = Array.from({ length: Config.stageRows }, (_, y) => y)
    .flatMap((y) =>
      Array.from({ length: Config.stageCols }, (_, x) => ({
        x,
        y,
        color: Config.initialBoard[y][x],
      })),
    )
    .filter(({ color }) => color >= 1 && color <= Config.puyoColorMax)
    .map(({ x, y, color }) => (
      <img
        key={`${y}-${x}`}
        src={`/img_sega/puyo_${color}.png`}
        alt=""
        className="absolute"
        style={{
          left: `${x * Config.puyoImageWidth}px`,
          top: `${y * Config.puyoImageHeight}px`,
          width: `${Config.puyoImageWidth}px`,
          height: `${Config.puyoImageHeight}px`,
        }}
      />
    ));

  return (
    <div
      className="relative mx-auto overflow-hidden"
      style={{
        width: `${Config.puyoImageWidth * Config.stageCols}px`,
        height: `${Config.puyoImageHeight * Config.stageRows}px`,
        backgroundColor: Config.stageBackgroundColor,
        backgroundImage: 'url(/img_sega/puyo_4bg.png)',
      }}
    >
      {puyos}
    </div>
  );
}
