class Config {
    static puyoImageWidth = 40; // ぷよ画像の幅
    static puyoImageHeight = 40; // ぷよ画像の高さ

    static stageCols = 6; // ステージの横の個数
    static stageRows = 12; // ステージの縦の個数
    static stageBackgroundColor = '#11213b'; // ステージの背景色

    // 初期状態のステージ
    static initialBoard = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];

    static puyoColorMax = 5; // 何色のぷよを使うか
    static fallingSpeed = 6; // 自由落下のスピード
    static erasePuyoCount = 4; // 何個以上揃ったら消えるか
    static eraseAnimationFrames = 30; // 何フレームでぷよを消すか
    static zenkeshiDuration = 150; // 全消し時のアニメーションミリセカンド

    static playerFallingSpeed = 0.9; // プレイ中の自然落下のスピード
    static playerLockDelayFrames = 20; // 何フレーム接地したらぷよを固定するか
    static playerDownSpeed = 10; // プレイ中の下キー押下時の落下スピード
    static playerMoveFrames = 10; // 左右移動に消費するフレーム数
}
