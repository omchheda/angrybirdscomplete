class Bird extends Baseclass {
    //adding properties for box
    constructor(x,y){
     super(x,y,50,50)
     this.image=loadImage("images/bird.png")
     this.smoke=loadImage("images/smoke.png")
     this.path=[]}
    display(){
        // this.body.position.x=mouseX
        // this.body.position.y=mouseY
        super.display()
        if(this.body.velocity.x>10&&this.body.position.x>215){
            var pos=[this.body.position.x,this.body.position.y]
            this.path.push(pos)
           
        }
       for(var i=0;i<this.path.length;i++){
           image(this.smoke,this.path[i][0],this.path[i][1])
       }
    }
     
    }

