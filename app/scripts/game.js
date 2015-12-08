import TileMapState from './states/tileMap';

class InitialState extends Phaser.State {
  preload() {
    this.game.load.image('mushroom', 'images/mushroom2.png');
  }
  create() {

    this.game.stage.backgroundColor = '#2d2d2d';

    //  Make our game world 2000x2000 pixels in size (the default is to match the game size)
    this.game.world.setBounds(0, 0, 2000, 2000);

    for (var i = 0; i < 150; i++) {
      this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'mushroom');
    }
  }
  update() {
    const cursors = this.game.input.keyboard.createCursorKeys();
    if (cursors.up.isDown) {
      this.game.camera.y -= 4;
    }
    else if (cursors.down.isDown) {
      this.game.camera.y += 4;
    }

    if (cursors.left.isDown) {
      this.game.camera.x -= 4;
    }
    else if (cursors.right.isDown) {
      this.game.camera.x += 4;
    }

  }
}

export default class Game extends Phaser.Game {
  constructor() {
    super(800, 600, Phaser.CANVAS, 'phaser-example', new TileMapState());
  }
  render() {
    this.debug.cameraInfo(game.camera, 32, 32);
  }
}
