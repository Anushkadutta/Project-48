var doraemon ;
var INTRO1 = 1
var INTRO2 = 2
var INTRO3 = 3
var END = 6
var PLAY = 5
var score = 0  
var SERVE = 4
var gameState = INTRO1

function setup() {
  createCanvas(800,400);
  doraemon = createSprite(400, 200, 50, 50);
  doraemon.addImage(ufoIMG)
  doraemon.scale = 0.2
    ground1 = createSprite(200, 400, 4000, 10);
  ground2 = createSprite(200, 000, 4000, 10);
  ground3 = createSprite(000, 400, 10, 4000);
  ground4 = createSprite(800, 000, 10, 4000);
  beamGroup = new Group();
  plusGroup = new Group();
  pintGroup = new Group();
}

function preload (){
  poIMG = loadAnimation("sprite_1.png","sprite_2.png","sprite_4.png","sprite_5.png","sprite_6.png")
  beam1IMG = loadImage("beam4.png")
  beam2IMG = loadImage("beam2.png")
  beam3IMG = loadImage("beam3.png")
  beam4IMG = loadImage("beam1.png")
  intro1p = loadImage("Intro1.png")
  intro2p = loadImage("Intro2.png")
  intro3p = loadImage("Intro3.png")
  AliIMG = loadImage("alien.png")
  ufoIMG = loadImage("UFO.png")
  uniIMG = loadImage("uni.jpg")
  bgIMG = loadImage("bg1.webp")
  outro1p = loadImage("outro.png")
}

function draw() {
     
  doraemon.velocityY = 3
  doraemon.velocityX = 0

  if(gameState === INTRO1){

    background(intro1p)
    doraemon.visible = false 

  if (keyWentDown("space")) {gameState = INTRO2 }

  } else if (gameState === INTRO2) {

    background(intro2p)
    doraemon.visible = false 

    if (keyWentDown("space")) {gameState = INTRO3 }

  } else if (gameState === INTRO3) {

    background(intro3p)
    doraemon.visible = false 

  if (keyWentDown("space")) {gameState = PLAY }

  } else if (gameState === PLAY){

    background(uniIMG);  

 
  fill("black")
  textSize(34)
  textFont("Courier New");
  stroke("white")
  strokeWeight(3)
  text("You Have Scored : "+ score,200,50)

  if( pintGroup.isTouching(doraemon)){
    score += 0.5
    pintGroup.destroyEach();
  }
    

    
    if(beamGroup.isTouching(plusGroup)){
     plusGroup.destroyEach()
    }

    beam()
    plus1()
    plus2()
    plus3()
    plus4()
    point1()
    point2()
    point4()
    point3()

    doraemon.visible = true

    if (keyDown(UP_ARROW)){
      doraemon.velocityY += -14
    }
    if (keyDown(RIGHT_ARROW)){
      doraemon.velocityX += 12
    }
    if (keyDown(LEFT_ARROW)){
      doraemon.velocityX += -12
    }

    

    
    if(doraemon.isTouching(plusGroup)){ gameState = END}

  } else if (gameState === END){
    background(outro1p)

    beamGroup.destroyEach(0);
    plusGroup.destroyEach(0);
    pintGroup.destroyEach(0);
    doraemon.visible = false
    if (keyDown("space"))
    {start();}
  }
 
  doraemon.collide(ground1)
  doraemon.collide(ground2)
  doraemon.collide(ground3)
  doraemon.collide(ground4)
  console.log(gameState)
  drawSprites();

  
}

function plus1(){
  if (frameCount % 200 === 0){
      pl= createSprite(random(0,800),900,50,10)
      pl.shapeColor = "green"
      pl.addImage( AliIMG )
      pl.scale = 0.4
      pl.velocityY = -6
      plusGroup.add(pl)
  }}

function plus2(){
   if (frameCount % 200 === 0){
      pl= createSprite(900,random(0,800),50,10)
      pl.shapeColor = "green"
      pl.addImage( AliIMG )
      pl.scale = 0.4
      pl.velocityX = -6
      plusGroup.add(pl)
  }}

function plus3(){
   if (frameCount % 300 === 0){
      pl= createSprite(random(0,800),00,50,10)
      pl.shapeColor = "green"
      pl.addImage( AliIMG )
      pl.scale = 0.4
      pl.velocityY = 6
      plusGroup.add(pl)
  }}
  
function plus4(){
   if (frameCount % 200 === 0){
      pl= createSprite(00,random(0,800),50,10)
      pl.shapeColor = "green"
      pl.addImage( AliIMG )
      pl.scale = 0.4
      pl.velocityX = 6
      plusGroup.add(pl)
  }}

function beam(){
   if (keyWentDown("a")){
     bb = createSprite(doraemon.x,doraemon.y,10,10)
     bb.velocityX = -10
     doraemon.depth = bb.depth
     doraemon.depth = doraemon.depth+1
     bb.addImage(beam1IMG)
     bb.scale = 0.1
     beamGroup.add(bb)
  }
   if (keyWentDown("d")){
     bb = createSprite(doraemon.x,doraemon.y,10,10)
     bb.velocityX = 10
     doraemon.depth = bb.depth
     doraemon.depth = doraemon.depth+1
     bb.addImage(beam4IMG)
     bb.scale = 0.1
     beamGroup.add(bb)
  }
   if (keyWentDown("w")){
     bb = createSprite(doraemon.x,doraemon.y,10,10)
     bb.velocityY = -10
     doraemon.depth = bb.depth
     doraemon.depth = doraemon.depth+1
     bb.addImage(beam2IMG)
     bb.scale = 0.1
     beamGroup.add(bb)
  } 
   if (keyWentDown("s")){
     bb = createSprite(doraemon.x,doraemon.y,10,10)
     bb.velocityY = 10
     doraemon.depth = bb.depth
     doraemon.depth = doraemon.depth+1
     bb.addImage(beam3IMG)
     bb.scale = 0.1
     beamGroup.add(bb)
  }}
  
function point1(){
      if (frameCount % 70 === 0){
          po= createSprite(random(0,800),900,50,10)
          po.shapeColor = "blue"
          po.velocityY = -6
          po.addAnimation("po",poIMG)
          po.scale =0.5
          pintGroup.add(po)
  }}
    
function point2(){
       if (frameCount % 70 === 0){
          po= createSprite(900,random(0,800),50,10)
          po.shapeColor = "blue"
          po.addAnimation("po",poIMG)
          po.scale =0.5
          po.velocityX = -6
          pintGroup.add(po)
  }}
    
function point3(){
       if (frameCount % 70 === 0){
          po= createSprite(random(0,800),00,50,10)
          po.shapeColor = "blue"
          po.addAnimation("po",poIMG)
          po.scale =0.5
          po.velocityY = 6
          pintGroup.add(po)
  }}
      
function point4(){
       if (frameCount % 70 === 0){
          po= createSprite(00,random(0,800),50,10)
          po.shapeColor = "blue"
          po.addAnimation("po",poIMG)
          po.scale =0.5
          po.velocityX = 6
          pintGroup.add(po)
  }}

  function start()
  {
     gameState=PLAY;
     score = 0
     beamGroup.destroyEach();
     pintGroup.destroyEach();
     plusGroup.destroyEach();
  }
    
      