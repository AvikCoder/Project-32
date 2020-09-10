class blueRain {
    constructor(){
    this.body = Bodies.rectangle(random(0,1350),random(0,-570),5,20);
    this.width = 5;
    this.height = 20;  
    }
    display(){
    var pos = this.body.position; 
    pos.y = pos.y + 10;
    noStroke();
    fill("blue")
     rect(pos.x,pos.y,this.width,this.height);
     if(pos.y > 570){
         pos.y = 0
     }
    }
}