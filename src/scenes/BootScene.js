import * as Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.titleText = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Loading ...', { fontSize: '48px', fill: '#fff' });
    this.titleText.setOrigin(0.5);
    // load images.
    this.loadImages();
    // load spritesheets
    this.loadSpitesheets();
    // load audio.
    this.loadAudio();
    // load videos.
    this.loadVideos();
  }

  loadImages() {
    this.load.image('button1', 'assets/images/ui/blue_button01.png');
    this.load.image('button2', 'assets/images/ui/blue_button02.png');
    this.load.image('background0', 'assets/fondos/fondo3.png');
    this.load.image('background1', 'assets/fondos/fondo2.png');
    this.load.image('background2', 'assets/fondos/areaJugable.png');
  }

  loadSpitesheets() {
    this.load.spritesheet('vieja', 'assets/images/viejaSheet.png', { frameWidth: 50, frameHeight: 65 });
    this.load.spritesheet('moncho', 'assets/images/monchoSheet.png', { frameWidth: 30, frameHeight: 65 });
    this.load.spritesheet('skater', 'assets/images/skaterSheet.png', { frameWidth: 40, frameHeight: 56 });
    this.load.spritesheet('carrito', 'assets/images/carretaSheet.png', { frameWidth: 72, frameHeight: 64 });
    this.load.spritesheet('final', 'assets/images/carretaSheet.png', { frameWidth: 72, frameHeight: 64 });
    this.load.spritesheet('motoPaco', 'assets/images/motoPacoSheet.png', { frameWidth: 80, frameHeight: 65 });
    this.load.spritesheet('sedan', 'assets/images/sedanSheet.png', { frameWidth: 155, frameHeight: 65 });
    this.load.spritesheet('vago', 'assets/images/vago.png', { frameWidth: 74, frameHeight: 24 });
    this.load.spritesheet('retenMovil', 'assets/images/RetenmovilSheet.png', { frameWidth: 160, frameHeight: 85 });
    this.load.spritesheet('bus', 'assets/images/busSheet.png', { frameWidth: 180, frameHeight: 85 });
    this.load.spritesheet('people', 'assets/images/protestaSheet.png', { frameWidth: 119, frameHeight: 94 });
    this.load.spritesheet('moto', 'assets/images/motoSheet.png', { frameWidth: 80, frameHeight: 65 });
    this.load.spritesheet('items', 'assets/images/items.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('powerUp', 'assets/images/power-up.png', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('bike', 'assets/images/mc_3.png', { frameWidth: 64, frameHeight: 72 });
  }

  loadAudio() {
    this.load.audio('battle', ['assets/audio/sci-fi_platformer12.mp3', 'assets/audio/sci-fi_platformer12.ogg']);
  }

  loadVideos() {
    this.load.video('intro', './assets/videos/paperboy.mp4');
  }

  create() {
    console.log('starting game ...');
    this.scene.start('Title'); // Voy hacia TitleScene.
  }
}
