class Slingshot{
 constructor(a,b) {
     var options={
         bodyA:a,pointB:b,stiffness:0.05,length:10 
     }
     this.sling= Matter.Constraint.create(options)
     W.add(world,this.sling) 
     this.sling1=loadImage("images/sling1.png")
     this.sling2=loadImage("images/sling2.png")
     this.sling3=loadImage("images/sling3.png")
 }  
 fly(){
     this.sling.bodyA=null
 }
attach(B){
    this.sling.bodyA=B
}
 

 display(){
     image(this.sling1,180,115)
     image(this.sling2,150,115)
     
    if(this.sling.bodyA!==null){
    var pointA=this.sling.bodyA.position
     var pointB=this.sling.pointB
     
    strokeWeight(8)
    stroke(48,22,8)
    line(pointA.x-20,pointA.y,pointB.x-20,pointB.y+25)
    line(pointA.x-20,pointA.y,pointB.x+20,pointB.y+25)
    image(this.sling3,pointA.x-30,pointA.y-13,15,40)
 }
}
}