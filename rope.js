class Rope{
	constructor(body1,body2,pointA,pointB)
	{
this.pointA=pointA
this.pointB=pointB

    options={
	bodyA:body1,
	bodyB:body2,
	pointB:{x:this.pointA,y:this.pointB},
	//length:100,
	//stiffness:0.1,

}
	//create rope constraint here
	this.con = Matter.Constraint.create(options)
		World.add(world,this.con);
	}


    //create display() here 
	display()
	{
		var pointA=this.con.bodyA.position;
		var pointB=this.con.bodyB.position;

		 push();
		 strokeWeight(2);
		 stroke(255);
		 line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB);
		 pop();
		 

	}

}
