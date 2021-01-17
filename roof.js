class roof
{
    constructor(x,y,width,height)
    {

        var options=
        {
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }

    display()
    {
        rectMode(CENTER);
        fill(rgb(random(1,255),random(1,255),random(1,255)));
        stroke(rgb(random(1,255),random(1,255),random(1,255)))
        strokeWeight(5);

        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}