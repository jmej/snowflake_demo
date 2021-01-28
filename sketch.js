let snowflakes = [];
let numberOfSnowflakes = 100;

function setup() {
  createCanvas(800, 800);
  for (var i = 0; i < numberOfSnowflakes; i++) {
    snowflakes.push(new Snowflake());
  }
  snowflake = new Snowflake();
}

function draw() {
  background(235, 125, 52);
  for (var i = 0; i < snowflakes.length; i++) {
    snowflakes[i].display();
    snowflakes[i].move();
  }

}


class Snowflake{
  constructor(){
    this.x = random(width);
    this.y = 0;
    this.size = random(5);
    this.hue = 128;
    this.speed = (random(100)/100)*3;
    this.numberOfSubBranches = random(10);
    this.subBranchLength = random(10);

  }
  move(){
    this.y = this.y + this.speed;
    if(this.y > height){
      this.y = 0;
      this.numberOfSubBranches = random(10);
      this.subBranchLength = random(10);
      this.x = random(width);
      this.speed = (random(100)/100)*3;
    } 
  }

  display(){
    let branchDiff = this.size / this.numberOfSubBranches;

    // let x2 = x1;
    // let y2 = y1+size;
    push();
    translate(this.x, this.y);
    stroke(255,255,255,this.hue);
    for (let i = 0; i < 6; i++) {
      let rotation = 60;
      push();
      rotate(radians(rotation*i));
      line(0,0,0,this.size);
      //let subBranchVector = createVector(40, 50);
      for (let i = 1; i < this.numberOfSubBranches; i++) {
        line(0, branchDiff*i, this.subBranchLength, branchDiff*i+this.subBranchLength);
        line(0, branchDiff*i, -this.subBranchLength, branchDiff*i+this.subBranchLength);
      }
      pop();
    }
    pop();

    }

}



// function snowflake(size, hue, numberOfSubBranches, subBranchLength ){
//   //always has 6 branches
//   let x1 = random(width)/2;
//   let y1 = random(height)/2;
//   let branchDiff = size / numberOfSubBranches;

//   // let x2 = x1;
//   // let y2 = y1+size;
//   push();
//   translate(x1, y1);
//   stroke(0,0,255,hue);
//   for (let i = 0; i < 6; i++) {
//     let rotation = 60;
//     push();
//     rotate(radians(rotation*i));
//     line(0,0,0,size);
//     //let subBranchVector = createVector(40, 50);
//     for (let i = 1; i < numberOfSubBranches; i++) {
//       line(0, branchDiff*i, subBranchLength, branchDiff*i+subBranchLength);
//       line(0, branchDiff*i, -subBranchLength, branchDiff*i+subBranchLength);
//     }
//     pop();
//   }
//   pop();

// }
