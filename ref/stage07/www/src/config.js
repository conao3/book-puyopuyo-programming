class Config {
    static puyoImageWidth = 40; // ぷよ画像の幅
    static puyoImageHeight = 40; // ぷよ画像の高さ

    static stageCols = 6; // ステージの横の個数
    static stageRows = 12; // ステージの縦の個数
    static stageBackgroundColor = '#11213b'; // ステージの背景色

    // 初期状態のステージ
    static initialBoard = [
        [0, 0, 0, 0, 4, 5] ,
        [0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0] ,
        [0, 1, 2, 3, 0, 0] ,
        [1, 2, 3, 4, 5, 0] ,
        [1, 2, 3, 4, 5, 0] ,
        [1, 2, 3, 4, 5, 0] ,
    ];

    static puyoColorMax = 5; // 何色のぷよを使うか
    static fallingSpeed = 6; // 自由落下のスピード
    static erasePuyoCount = 4; // 何個以上揃ったら消えるか
    static eraseAnimationFrames = 30; // 何フレームでぷよを消すか
    static zenkeshiDuration = 150; // 全消し時のアニメーションミリセカンド
}
