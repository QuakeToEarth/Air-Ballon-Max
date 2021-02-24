var airB
var baK
var airBS
var database
var vp

function preload(){

baK = loadImage ("Hot Air Ballon-01.png")
airB = loadAnimation ("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
}




function setup() {
  createCanvas(1600,800);
  database = firebase.database()
  airBS = createSprite (800,700,50,50);
  airBS.addAnimation ("ack", airB)
  airBS.scale  = (0.5)
  var airBP = database.ref("position")
  airBP.on("value",read,dinoNuggets )
}

function draw() {
  background(baK);  
  if (keyIsDown(LEFT_ARROW))
  {
up(-5,0)
  }
  if (keyDown(RIGHT_ARROW))
  {
    up(5,0)
  }
  if (keyDown(UP_ARROW))
  {
    up(0,-5)
  }
  if (keyDown(DOWN_ARROW))
  {
    up(0,5)
  }
  drawSprites();
}
function up(x,y)
{
database.ref("position").update({
  "hoze" : vp.hoze + x,
  "voze" : vp.voze + y
})
}
function read(data)
{
vp = data.val()
//console.log(vp.hoze)
airBS.x = vp.hoze
airBS.y = vp.voze
}
function dinoNuggets()
{
  console.log("read operation was not good")
}
