class Drop {
  constructor() {
    var options = {
        'restitution':0.9,
        'friction':0.3,
        'density':1.0
    }
    this.radius = random(2, 8);
    this.body = Bodies.circle(random(1, displayWidth), 0, this.radius,  options);
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    ellipseMode(RADIUS);
    fill(random(0,255), random(0,255), random(0,255));
    push();
    translate(pos.x,pos.y)
    rotate(angle);
    ellipse(0,0,random(2,10),random(2,10));
    pop();
  }
};
