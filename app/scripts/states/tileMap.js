export default class TileMapState extends Phaser.State {
  preload () {
    this.game.load.tilemap('map', 'assets/tilemaps/ninja-tilemap.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('ball', 'assets/sprites/shinyball.png');
    this.game.load.image('sky', 'assets/sprites/sky2.png');
    this.game.load.image('kenney', 'assets/tilemaps/kenney.png');
  }

  create () {
    var sky = this.game.add.image(0, 0, 'sky');
    sky.fixedToCamera = true;

    //  Activate the Ninja physics system
    this.game.physics.startSystem(Phaser.Physics.NINJA);

    const map = this.game.add.tilemap('map');

    map.addTilesetImage('kenney');

    const layer = map.createLayer('Tile Layer 1');

    layer.resizeWorld();

    var slopeMap = { '32': 1, '77': 1, '95': 2, '36': 3, '137': 3, '140': 2, '116':1, '34': 1};

    this.tiles = this.game.physics.ninja.convertTilemap(map, layer, slopeMap);

    this.sprite1 = this.game.add.sprite(50, 50, 'ball');

    this.game.physics.ninja.enableCircle(this.sprite1, this.sprite1.width / 2);

    //  A little more bounce
    this.sprite1.body.bounce = 0.5;

    this.game.camera.follow(this.sprite1);

    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  update () {
    for (var i = 0; i < this.tiles.length; i++)
    {
      this.sprite1.body.circle.collideCircleVsTile(this.tiles[i].tile);
    }

    if (this.cursors.left.isDown)
    {
      this.sprite1.body.moveLeft(20);
    }
    else if (this.cursors.right.isDown)
    {
      this.sprite1.body.moveRight(20);
    }

    if (this.cursors.up.isDown)
    {
      this.sprite1.body.moveUp(20);
    }
    else if (this.cursors.down.isDown)
    {
      this.sprite1.body.moveUp(20);
    }
  }
}
