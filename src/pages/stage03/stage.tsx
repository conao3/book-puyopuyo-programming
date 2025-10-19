import Config from './config';

export default function Stage() {
  return (
    <div
      className="relative mx-auto overflow-hidden"
      style={{
        width: `${Config.puyoImageWidth * Config.stageCols}px`,
        height: `${Config.puyoImageHeight * Config.stageRows}px`,
        backgroundColor: Config.stageBackgroundColor,
        backgroundImage: 'url(/img_sega/puyo_4bg.png)',
      }}
    ></div>
  );
}
