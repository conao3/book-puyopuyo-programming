class GameImage {
  static puyoImageList = null;

  static initialize() {
    // ぷよ画像を準備する
    GameImage.puyoImageList = [];
    for (let i = 0; i < Config.puyoColorMax; i++) {
      const image = document.getElementById('puyo_' + (i + 1));
      image.removeAttribute('id');
      image.width = Config.puyoImageWidth;
      image.height = Config.puyoImageHeight;
      image.style.position = 'absolute';
      GameImage.puyoImageList[i] = image;
    }
  }

  // ぷよ画像を複製して返す
  static getPuyoImage(color) {
    const image = GameImage.puyoImageList[color - 1].cloneNode(true);
    return image;
  }
}
