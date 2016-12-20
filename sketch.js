function setup() {
  createCanvas(360,640);
  
  //Deal with microphone
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var volume = mic.getLevel();
  
  //If the volume is not enought, re-map it (set a higher newMax).
 // var newMax = 5;
//  volume = map(volume,0,1,0,newMax);
  
  background(231, 223, 198);
  push();  //Start with transformations
  translate(width/2,height/2);
 
  
  
  var size = map(volume,0,1,width/5,width/2);
 
  for(var y=-100; y<100; y+=30){
  
  size = map(volume,0,1, 100, 500) *  (y + 100)/200;
 
  strokeWeight(8);
  stroke(37, 68, 65);
  strokeCap(ROUND);
  line(-size,y,size,y);
    }
    
    
    ////rami+corti
    
  for(var y1=-100; y1<100; y1+=30){
  for(var p=-100; p<100; p+=30){
  size = map(volume,0,1, 100, 300) *  (y1 + 100)/200;
  
  
  stroke(15, 94, 86);
  line(-size,y1+15,size,y1+15);

    }
  
  }
  

  
  push();
 
   fill(219, 43, 57);
  noStroke();
  ellipseMode(CENTER);
  ellipse(0,-85,10);
 

  var col = map(volume,0,1,width/5,width/2);
  col = map(volume,0,1, 0, 255) *100;

  fill(242, 212, 146,col);
  ellipse(-25,-15,10);
  ellipse(45,30,10);
  ellipse(-25,60,10);
  
  
  
  
  stroke(219, 43, 57);
  line(-30,110,30,110);
  line(-30,125,30,125);
  pop();
  
  
  pop();  //All transformation are now dropped and the coordinate system is resetted.
  
}