class Particles {
    constructor(x,y,r) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.r = r;
      this.body = Bodies.circle(x,y,this.r,options);
      this.color = color(random(1,225),random(1,225),random(1,225));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x,pos.y);
      rotate(angle);
      noStroke();
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };