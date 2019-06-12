var x = 200;
var y = 200;
var direction;
var fired = 0;
var xB;
var xY;
var counter = 0;



function setup() {
    createCanvas(400, 400);
    fill(255, 0, 0);
}

function draw() {  
    
    if (keyIsDown(LEFT_ARROW)) {
        x -= 3;
        if (fired === 0) {
            direction = 270;
        }
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x += 3;
        if (fired === 0) {
            direction = 90;
        }
    }
    if (keyIsDown(UP_ARROW)) {
        y -= 3;
        if (fired === 0) {
            direction = 0;
        }
    }
    if (keyIsDown(DOWN_ARROW)) {
        y += 3;
        if (fired === 0) {
            direction = 180;
        }
    }
    if (keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW)) {
        if (fired === 0) {
            direction = 315;
        }
    }  
    if (keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW)) {
        if (fired === 0) {
            direction = 45;
        }
    }  
    if (keyIsDown(RIGHT_ARROW) && keyIsDown(DOWN_ARROW)) {
        if (fired === 0) {
            direction = 135;
        }
    } 
    if (keyIsDown(LEFT_ARROW) && keyIsDown(DOWN_ARROW)) {
        if (fired === 0) {
            direction = 225;
        }
    }  
    if (keyCode === 81) {
            fired = 1;
    } 
    
    
    clear();
    background(225);
    if (fired === 1) {
      
      
        if (direction === 0) {
            counter += 10;
            ellipse(xB, yB - counter, 10, 10);
            if (yB - counter <= 0) {
                fired = 0;
                counter = 0;
            }
        }
        if (direction === 180) {
            counter += 10;
            ellipse(xB, yB + counter, 10, 10);
            if (yB + counter >= 400) {
            fired = 0;
            counter = 0;
            }
        }
        if (direction === 270) {
            counter += 10;
            ellipse(xB - counter, yB, 10, 10);
            if (xB - counter <= 0) {
                fired = 0;
                counter = 0;
            }
        }
        if (direction === 90) {
            counter += 10;
            ellipse(xB + counter, yB, 10, 10);
            if (xB + counter >= 400) {
                fired = 0;
                counter = 0;
            }
        }
        if (direction === 45) {
            counter += 10;
            ellipse(xB + counter, yB - counter, 10, 10);
            if ((xB + counter >= 400)||(yB - counter <= 0)) {
                fired = 0;
                counter = 0;
            }
        }
        if (direction === 135) {
            counter += 10;
            ellipse(xB + counter, yB + counter, 10, 10);
            if ((xB + counter >= 400)||(yB + counter >= 400)) {
                fired = 0;
                counter = 0;
            }
        }
        if (direction === 225) {
            counter += 10;
            ellipse(xB - counter, yB + counter, 10, 10);
            if ((xB - counter <= 0)||(yB + counter >= 400)) {
                fired = 0;
                counter = 0;
            }
        }
        if (direction === 315) {
            counter += 10;
            ellipse(xB - counter, yB - counter, 10, 10);
            if ((xB - counter <= 0)||(yB - counter <= 0)) {
                fired = 0;
                counter = 0;
            }
        }
    } else {
        xB = x;
        yB = y;
    }
    ellipse(x, y, 10, 10);
    
  
}