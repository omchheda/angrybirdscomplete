//library=matter.js , also known as physics engine
//popular physics engines: p2.js,box2d.js,matter.js
//To use matter.js, we need to add it in html file

//Engine: It is used to create physics engine
//World: It is used to create physical world & add objects in it 
//Bodies:Used to create bodies in the world

//namespacing:method to make our code easy to write and read by 
//providing shorter names

//variable means a container which can hold any value
//const means a constant variable ,value aqssigned cant be changed

var gamestate = "onsling"



const W = Matter.World;
const E = Matter.Engine;
const B = Matter.Bodies;
var bg,img
var go
var score=0
var c1
var pig
var bird
var log1
var log2
var log3,log4
var pig1
var pig2
var engine, world;
var ball,box1;
var ground
var box2,box3 ;
function preload(){
  go=loadImage("images/gameover.png")
  getTime()
}
function setup() {
  createCanvas(1200,500);
  //initializing engine
  engine=E.create()
  world=engine.world;
 //new helps us in allocation of memory for object box1 created using class Box
// 1 PI = 180degrees 
  log1= new Log(900,395,20,300,PI/2)
  log2= new Log(900,305,20,300,PI/2)

  log3= new Log(850,255,20,140,PI/5)
  log4= new Log(950,255,20,140,PI/-5)
  //log2= new Log()
  //log3= new Log()
  //log4= new Log()
  box1= new Box(800,440,70,70);
  box2= new Box(1000,440,70,70);
  box3= new Box(800,350,70,70);
  box4= new Box(1000,350,70,70);
  box5= new Box(900,255,70,70);
  pig1= new Pig(900,450)
  pig2= new Pig(900,355)
  bird= new Bird(170,100)
  pig= new Pig(1100,450)
  c1= new Slingshot(bird.body,{
    x:190,y:120
  })
  //json:javascript object notation
  var groundOptions={
       isStatic:true
  }
  //150, 305, 300, 170
  platform= B.rectangle(150, 390, 300, 170,groundOptions)
  W.add(world,platform)
  ground=B.rectangle(600,490,1200,30,groundOptions);
  W.add(world,ground)
  
 
}

function draw() {
  if(img){
background(img)
  }
  //updating engine with every frame
  E.update(engine); 
  //calling or using display function of Box class to display box1 and box2
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  pig.display();
  c1.display();
  bird.display();

  textSize(25)
  fill("brown")
text("score:"+score,1000,50)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1200,30);
  rect(platform.position.x,platform.position.y,300,170);
  if(score===300){
    gamestate="over"
  }
if(gamestate==="over"){
  imageMode(CENTER)
  image(go,600,200)
}
}

function mouseDragged(){
  if(gamestate==="onsling"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
  }

}

function mouseReleased(){
  c1.fly()
  gamestate="offsling"
}
function keyPressed(){
  if(keyCode===32&&gamestate!=="over"){
    Matter.Body.setPosition(bird.body,{x:170,y:100})
    c1.attach(bird.body)
     bird.path=[]
     gamestate="onsling"
  }
if(keyCode===65&&gamestate==="over"){
  score=0
  bird.path=[]
  Matter.Body.setPosition(bird.body,{x:170,y:100})
  c1.attach(bird.body)
  gamestate="onsling"
  setup()
}
}
 
async function getTime(){
  var response =  await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var r = await response.json()
  var dt = r.datetime
  var h = dt.slice(11,13)
  console.log(h)
  if(h>=06&&h<=19){
    bg="images/bg.png"
  }
  else{
    bg="images/BAGROUND.PNG"
  }
  img=loadImage(bg)
}


