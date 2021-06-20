class Paper {
    constructor(x,y,r){
        var options = {
            'restitution':0.2,
            'density' : 1.2,
            'friction' : 0.3
        }
         this.x=x;
         this.y=y;
         this.r=r
         this.body=Bodies.circle(this.x, this.y, this.r, options)
         this.image = loadImage("paper.png")
         World.add(world, this.body);
        
    }
    display(){
   var paperpos=this.body.position;		
   var angle = this.body.angle
			push()
			translate(paperpos.x, paperpos.y);
            rotate(angle)
            strokeWeight(0)
            
            ellipse(0,0,this.r) 
            imageMode(CENTER);
            image(this.image, 0, 0,50,50);
            
			pop()     
    }
}