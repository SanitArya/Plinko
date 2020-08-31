const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var particles = [];
var pinko = [];
var division = [];

var divisionHeight = 150;

var engine, world;

var particle;
var turn = 5;
var score = 0;

var gameState = "start";

function setup() {
  var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

   for(var k = 0;k<=width;k = k+80){

    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
   }


   //Creating Pinko
   for(var i = 4;i<=width;i = i+50){

    pinko.push(new Pinko(i,75));
   }

   for(var i = -25;i<=width;i = i+50){

    pinko.push(new Pinko(i,175));
   }
 
   for(var i = 4;i<=width;i = i+50){

    pinko.push(new Pinko(i,275));
   }

   for(var i = -25;i<=width;i = i+50){

    pinko.push(new Pinko(i,375));
   }

  grnd = new Ground(400,590,800,20);

  side1 = new Ground(-10,300,10,600);
  side2 = new Ground(810,300,10,600);
   
}

function draw() {
  background(0);  

  Engine.update(engine);

  console.log(score);

  textSize(20)
  fill("white")
  text("500",25,480);
  text("400",105,480);
  text("300",185,480);
  text("200",265,480);
  text("100",345,480);
  text("100",425,480);
  text("200",505,480);
  text("300",585,480);
  text("400",665,480);
  text("500",745,480);

  textSize(20);
  text("Score: "+score,670,40);

  for(var k = 0;k<division.length;k = k+1){

   division[k].display();
  }

  for(var i = 0;i<pinko.length;i = i+1){

    pinko[i].display();
   }

   

   if(particle!=null){

    particle.display();

   if(particle.body.position.y>550){

      if(particle.body.position.x<80 || particle.body.position.x>720){

       score = score+500;
       particle = null;
       if(turn<=0) gameState = "end";
      }

      else if((particle.body.position.x>80 && particle.body.position.x<160)||(particle.body.position.x<720 && particle.body.position.x>640)){

        score = score+400;
       particle = null;
       if(turn<=0) gameState = "end";
      }

      else if((particle.body.position.x>160 && particle.body.position.x<240)||(particle.body.position.x<640 && particle.body.position.x>560)){

        score = score+300;
       particle = null;
       if(turn<=0) gameState = "end";
      }

      else if((particle.body.position.x>240 && particle.body.position.x<320)||(particle.body.position.x<560 && particle.body.position.x>480)){

        score = score+200;
       particle = null;
       if(turn<=0) gameState = "end";
      }

      else if(particle.body.position.x>320 && particle.body.position.x<480){

        score = score+100;
       particle = null;
       if(turn<=0) gameState = "end";
      }
      
    }
   }

   if(gameState=="end"){

    textSize(40)
    text("Game Over",300,300);

    turn = 0;
   }
  
   grnd.display();
   side1.display();
   side2.display();
  
}

function mouseReleased(){

  if(gameState!="end"){
  turn--;

  particle = new Particles(mouseX,10,10);

  }
}