class Bob {
  constructor(x,y,diameter) {
    var options = {
      'isStatic': false,
      'restitution':0.8,
      'friction':1,
      'density':1.2   
    }
    this.body = Bodies.circle(x, y,diameter/2,options);
    this.diameter = diameter;
    World.add(world, this.body);
  }

  display(){
    push();
    var pos = this.body.position;
    translate(pos.x,pos.y);
    stroke("black");
    strokeWeight(1.25);
    fill("aqua");
    rectMode(CENTER);
    ellipse(0,0,this.diameter,this.diameter);
    pop();
     
  }
}