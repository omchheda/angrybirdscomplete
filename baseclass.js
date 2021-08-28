/* 
inheritence is an important concept in object oriented programming, 
methods from base class gets copied into derived class (childclass or sub class)
we add "extends" keyword to make the class a child class
*/

class Baseclass {
    //adding properties for box
    constructor(x,y,w,h){
        var options={
            isStatic:false,
            restitution:0.8   
        }
      
        this.body=B.rectangle(x,y,w,h,options);
        this.image=loadImage("images/base.png")
        W.add(world,this.body);
        this.width=w
        this.height=h
    }
    
    display(  ){
        var pos=this.body.position;
       
        push()
        angleMode(RADIANS)
        
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        fill ("lightblue")
      imageMode(CENTER)
      image(this.image,0,0,this.width,this.height);
     
        pop()
    }


}

