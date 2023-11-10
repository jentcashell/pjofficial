//Steps:
//1. Photoshop/preview crop body parts
// should it be humanoid???
//2. upload here create 5 arrays for each 5 body parts head limbL limbR body legL legR
//3. for looop for array
// random
//3. make a border like lab. cute, glossy
let head1, head2, head3, head4, head5, head6;
let headArray;
let heads = [];

let limb1, limb2, limb3, limb4, limb5;
let limbArray;
let limbs = [];

let body1, body2;
let bodyArray;
let bodies = [];

let limbL1, limbL2, limbL3, limbL4, limbL5;
let limbLArray;
let limbLs = [];

let leg1, leg2, leg3, leg4, leg5;
let legArray;
let legs = [];

let pjlogo;

let saveButton;

function preload() {
  head1 = loadImage("images/pjlab_head01.png");
  head2 = loadImage("images/pjlab_head02.png");
  head3 = loadImage("images/pjlab_head01b.png");
  head4 = loadImage("images/pjlab_mj_head_01.png");
  head5 = loadImage("images/pjlab_mj_head_02.png");
  // head6 = loadImage("sketch01/Painting Collage 230221 oval.png");

  limb1 = loadImage("images/pjlab_arm01.png");
  limb2 = loadImage("images/pjlab_arm02.png");
  limb3 = loadImage("images/alienpiece01.png");

  body1 = loadImage("images/pjlab_body03.png");
  body2 = loadImage("images/pjlab_body02.png");

  limbL1 = loadImage("images/pjlab_arml01.png");
  limbL2 = loadImage("images/pjlab_arml02.png");
  limbL3 = loadImage("images/alienpiece01b.png");

  leg1 = loadImage("images/pjlab_leg01.png");
  leg2 = loadImage("images/pjlab_leg02.png");
  leg3 = loadImage("images/pjlab_leg03.png");

  pjlogo = loadImage("images/pj_logo01.png");
  pjlabframe = loadImage("images/pjlab_border.png");
}
function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  imageMode(CENTER);
  rectMode(CENTER);
  frameRate(0.5);

  heads = [head1, head2, head3, head4, head5];
  headArray = floor(random(0, 5));

  limbs = [limb1, limb2, limb3];
  limbArray = floor(random(0, 1));

  bodys = [body1, body2];
  bodyArray = floor(random(0, 1));

  limbLs = [limbL1, limbL2, limbL3];
  limbLArray = floor(random(0, 1));

  legs = [leg1, leg2, leg3];
  legArray = floor(random(0, 1));
  
  image(pjlabframe, width/2,height/2, 800,800);
  // fill(230, 230, 0);
  // noStroke();
  // rect (width/2, height/2, 600,600);
  //image(pjlogo, width - 200, height - 170, 150, 75);
  image(pjlabframe, width/2,height/2, 800,800);
  image(pjlogo, width - 200, height - 170, 150, 75);

  // Create a restart button
  let restartButton = createButton("Generate");
  restartButton.position(220, height - 120);
  restartButton.style("background-color", "blue"); // Set the background color to blue
  restartButton.style("font-size", "24px");
  restartButton.style("color", "white");
  restartButton.style("border-radius", "50%");
  restartButton.style("padding", "10px 20px");
  restartButton.style("box-shadow", "0 0 30px 20px rgba(0, 0, 255)");
  restartButton.style("border", "none");
  restartButton.mousePressed(resetSketch);
  

  // Create a download button
  saveButton = createButton("Download");
  saveButton.mousePressed(saveCanvasAsImage);
  saveButton.position(450, height - 110);
  saveButton.style("background-color", "rgb(255,0,239)"); // Set the background color to blue
  saveButton.style("font-size", "14px");
  saveButton.style("color", "white");
  saveButton.style("border-radius", "50%");
  saveButton.style("padding", "10px 20px");
  saveButton.style("box-shadow", "0 0 20px 10px rgba(255,0,255)");
  saveButton.style("border", "none");

}

function resetSketch() {
  clear();
  image(pjlabframe, width/2,height/2, 800,800);
  // fill(230, 230, 0);
  // noStroke();
  // rect (width/2, height/2, 600,600);


  push();
  translate(width / 2, height / 2 - 150);
  push();
  translate(0, 100);
  let imgsRandom = random(heads);
  image(imgsRandom, 0, 0, 600 * random(1, 1.1), 600 * random(1, 1.1));
  pop();

  translate(-150, 150);
  push();
  rotate(random(-60, 60));
  let limbLsRandom = random(limbLs);
  image(limbLsRandom, 0, 0, 300, 300);
  pop();

  translate(150, 10);
  let bodysRandom = random(bodys);
  image(bodysRandom, 0, 0, 250, 250);

  translate(150, -10);
  push();
  rotate(random(30, -30));
  let limbsRandom = random(limbs);
  image(limbsRandom, 0, 0, 300, 300);
  pop();

  translate(-150, 150);
  push();
  rotate(random(-30, 30));
  let legsRandom = random(legs);
  image(legsRandom, 0, 0, 300, 300);
  pop();

  pop();

  
  
  image(pjlogo, width - 200, height - 170, 150, 75);
}

function saveCanvasAsImage() {
  // Save the canvas as an image when the download button is clicked
  saveCanvas("jentian_lab", "png");
}
