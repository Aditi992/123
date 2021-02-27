class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,400,400);
    this.image = loadImage("chef.png");
    scale=0.9;
  }
  display(){
   // this.body.position.x = mouseX;
   // this.body.position.y = mouseY;
    super.display();
  }
}