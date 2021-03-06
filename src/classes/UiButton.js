import * as Phaser from 'phaser';

export default class UiButton extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key, hoverKey, text, targetCallBack) {
    super(scene, x, y);
    this.scene = scene; // the scene the container will be added
    this.x = x; // the x position of the conatainer
    this.y = y; // the y position of the container
    this.key = key; // the background image to our button
    this.hoverKey = hoverKey; // the image display when the button is hover
    this.text = text; // the text in the button
    this.targetCallBack = targetCallBack; // the callback function when the button is pressed

    this.createButton(); // Create UiButton
    this.scene.add.existing(this); // add the Container to our Phaser scene
  }

  createButton() {
    // Create the Button
    // Button takes relative position inside the container
    this.button = this.scene.add.image(0, 0, this.key);
    // Hago el boton interactivo
    this.button.setInteractive();
    // Scale button
    this.button.setScale(1);

    // Create the button Texr
    this.buttonText = this.scene.add.text(0, 0, this.text, { fontSize: '20px', fill: '#fff' }); // setText()
    // Center button text insdide the button
    Phaser.Display.Align.In.Center(this.buttonText, this.button);

    // add button and button Text to Container
    this.add(this.button);
    this.add(this.buttonText);

    // Listen for Events
    this.button.on('pointerdown', () => {
      this.targetCallBack();
    });

    this.button.on('pointerover', () => {
      this.button.setTexture(this.hoverKey);
    });

    this.button.on('pointerout', () => {
      this.button.setTexture(this.key);
    });
  }
}
