class Bob {

constructor (x,y,radius)
{
    var options={
        isStatic:false,
        restitution:1.3,
         friction:1.8,
         density:1.2,

    }

    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    World.add(world,this.body);

}
    display(){

        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill(rgb(3, 252, 211))
        
        ellipse(0,0,this.radius);
        pop()
    }
}