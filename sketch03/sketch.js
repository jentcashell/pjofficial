//audio reactive program
//idea: sliders, pads, musical instrument, perlin noise controller.

let img01, img02, img03, img04, img05,img06, img07, img08;
let sound01, sound02, sound03, sound04, sound05, sound06;
let soundList = [];

let imgArray;
let imgs = [];

let soundArray;
let sounds = [];

let mic;

let xPos = 100;
let yPos = 100;
let xPos2 = 500;
let yPos2 = 700;
let speedX = 10;
let speedY = 7;

let h;

let spacingX, spacingY;
let rep = 5;

function preload() {
  img01 = loadImage("sketch03/alienpiece03.png");
  img02 = loadImage("sketch03/alienpiece01.png");
  img03 = loadImage("sketch03/Painting Collage 230221 oval.png");
  img04 = loadImage("sketch03/pixel fruit demon blur.png");
  img05 = loadImage("sketch03/mj_head_04.png");
  img06 = loadImage("sketch03/3dbad_tulinh.png");
  img07 = loadImage("images/pj_character01_02.png");
  img08 = loadImage("images/character02b.png");
  // sound01 = loadSound("sound01.wav");
  // sound02 = loadSound("sound02.wav");
  // sound03 = loadSound("sound03.wav");
  // sound04 = loadSound("sound05.mp3");
  // sound05 = loadSound("sound06.mp3");
  // sound06 = loadSound("sound07.wav");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  //textAlign(CENTER);
  colorMode(HSB,100);
  angleMode(DEGREES);
  frameRate(20);
  imgs = [img01, img02, img03, img04, img05, img06, img07, img08];
  imgArray = floor(random(0, 5));

  sounds = [sound01, sound02, sound03, sound04, sound05, sound06];
  soundArray = floor(random(0, 5));

  mic = new p5.AudioIn();
  mic.start();
  
  spacingX = width / rep;
  spacingY = height / rep;

  const button = createButton("Clear");
  button.position(380, height - 85);
  button.style("background-color", "blue"); // Set the background color to blue
  button.style("font-size", "16px");
  button.style("color", "white");
  button.style("border-radius", "50%");
  button.style("padding", "10px 20px");
  button.style("box-shadow", "0 0 30px 20px rgba(0, 0, 255)");
  button.style("border", "none");

  button.mousePressed(clearCanvas);
}

function draw() {
  //background(255,95);
  //clear();

  h = random(0, 100);

  // textSize(30);
  // fill(h, 100, 100);
  // text("Click! (To hear sounds)", width / 3, height * 0.9, 400);
  // text("Make some noise/ Play some music", width / 10 - 100, height * 0.9, 400);

  //SET UP
  let level = mic.getLevel() * 10;
  let s = map(level, 0, 1, 100, windowHeight / 2);
  let r = map(level, 0, 1, -30, 60);
  let soundSpeed = map(level, 0, 1, 0.5, 8);
  let d = dist(xPos, yPos, mouseX, mouseY);

  //BOUNCE
  let sizeRandomW = random(0.1, 3);
  let sizeRandomH = random(0.1, 3);
  let imgsRandom = random(imgs);

  
  
  if(mouseIsPressed){
    translate(xPos, yPos)
    rotate(r)
    image(imgsRandom,0,0 , s * sizeRandomW/2, s * sizeRandomH/2);
    xPos = mouseX;
    yPos = mouseY;
  }

  if (keyIsDown(DOWN_ARROW)) {
    clear();
  }

  
//   push();
//   translate(xPos2, yPos2);
//   image(imgsRandom, 0, 0, s * sizeRandomW/5, s * sizeRandomH/5);
  
//   xPos2 += speedX * soundSpeed;
//   yPos2 += speedY * soundSpeed;
  
//   if (xPos2 >= width - s / 2 || xPos2 <= s / 2) {
//     speedX = -speedX;
//   }
//   if (yPos2 >= height - s / 2 || yPos2 <= s / 2) {
//     speedY = -speedY;
//   }
//   pop();
  

  //CLICK + SOUND
//   let soundsRandom = random(sounds);

//   if (mouseIsPressed) {
//     soundsRandom.play();
//     tint(0, 100, 100);
//   } else {
//     soundsRandom.stop();
//     noTint();
//   }
}

function clearCanvas(){
  clear();
  
}
