/* 
CLASS : blueprint of any object
It consists of functions & properties.
eg : display()  ->function
for properties, we have a special function called constructor
For naming class, try to use capital letter and meaningful name(identifiers)
Use of class concept: Reusuabilty of the code 
*/

class Box extends Baseclass{
   constructor(x,y,w,h) {
       super(x,y,w,h)  //super function calls the constructor of base class that We are inheriting
       this.image=loadImage("images/wood1.png")
   }
}