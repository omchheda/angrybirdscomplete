class Log extends Baseclass { 
    //adding properties for log
    constructor(x,y,w,h,a){
       
    super(x,y,20,h,a)
      
        Matter.Body.setAngle(this.body,a)
        this.image=loadImage("images/WOOD2.png")

        
    }



}

