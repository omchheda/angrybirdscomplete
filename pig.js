class Pig  extends Baseclass { 
  

    constructor(x,y){
        super(x,y,50,50)
        this.image=loadImage("images/enemy.png")
        this.visibility=255
    }
    display(){


//console.log(this.body.speed)
if(this.body.speed<2.7){
    super.display()
    
}
else{
    W.remove(world,this.body)
    push()
    this.visibility=this.visibility-5
    tint(255,this.visibility)
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop()
    if(this.visibility<0&&this.visibility>-505){
        score+= 1

    }
}
}  


}

