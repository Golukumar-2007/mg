var op1,op2,op3,plane,m,blast,bg;
var op1Image,op2Image,op3Image,plane1Image,mImage,blastImage,bgImage;
var op1group,mgroup,op2group,op3group;
var score = 0;
var life = 100;
var gameState = 1

function preload() {
  op1Image = loadImage("op1.png")
  op2Image = loadImage("op2.png")
  op3Image = loadImage("op3.png")
  planeImage = loadImage("plane.png")
  mImage = loadImage("m.png")
  blastImage = loadImage("blast.png")
  bgImage = loadImage("bg.png")
}
 

function setup() {
  createCanvas(1400,600)
  score = 0

  

plane = createSprite(100,random(20,400),40,40)
plane.addImage("plane",planeImage)
plane.scale=0.5

obsGroup = new Group ()
mgroup = new Group ()

}

function draw() {
background("green")

// score 
fill ("red")
 stroke("yellow")
 textSize(40)

text("Score = " + score,1100,200)



if (keyWentUp("space")){
  missile()
}


//score = createSprite(1100,200,20,20)

  
plane.y=mouseY

//destroying the obstacles 
if(obsGroup.isTouching(mgroup)){
 

  for(var i=0;i<obsGroup.length;i++){     
    

   
   if(obsGroup[i].isTouching(mgroup)){
   
   
      score = score + 1
    
    
    blast = createSprite (obsGroup[i].x,obsGroup[i].y,50,50)
    blast.addImage(blastImage)
    blast.scale = 0.2
    blast.lifetime = 30
    obsGroup[i].destroy()
   
    //mgroup[j].destroyEach()
    m.remove()
   // obsGroup[i].changeImage("blastImage")
        } 
  }
 }
 


enemy()

drawSprites();
}

function missile(){
  m = createSprite(150,100,40,40)
  m.addImage("m",mImage)
  m.y = plane.y+75
  m.scale=0.1
  m.velocityX= 10
  mgroup.add(m)
}

// function blastscn(){
//  blast = createSprite (m.x,m.y,40,40)
//   blast.addImage("blast",blastImage)
//   blast.scale= 0.2
//   blast.life = 20
//   mgroup.destroyEach();
  
// }




//obstacle creations 
function enemy(){
  if(frameCount%100===0){

    //giving random x and y positions for zombie to appear
    obstacle = createSprite(random(1300,1300),random(100,500),40,40)
    obstacle.scale = 0.40
    obstacle.velocityX = -3
    obstacle.debug= true
    obstacle.setCollider("rectangle",0,0,400,400)

    var randomObs=Math.round(random(1,3))

    switch(randomObs)
    {
case 1: obstacle.addImage(op1Image); break;
case 2: obstacle.addImage(op2Image); break;
case 3: obstacle.addImage(op3Image); break;
default:break;
    }
    obstacle.lifetime = 400
     obsGroup.add(obstacle)
  }
}

/*function handleBlast(){
if (obsGroup[i].isTouching(mgroup)){
  score = score + 1
}

blast = createSprite (obstacle.x,obstacle.y,50,50)
blast.addImage(blastImage)
blast.scale = 0.2
blast.lifetime = 30

m.remove()


}*/











































