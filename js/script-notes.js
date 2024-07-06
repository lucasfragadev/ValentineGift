let highestZ = 1;
class Paper {
holdingPaper = false;
mouseTouchX = 0;
mouseTouchY = 0;
mouseX = 0;
mouseY = 0;
prevMouseX = 0;
prevMouseY = 0;
velX = 0;
velY = 0;
rotation = Math.random() * 30 - 15;
currentPaperX = 0;
currentPaperY = 0;
rotating = false;

init(paper) {
const moveHandler = (e) => {
const event = e.touches ? e.touches[0] : e;
if(!this.rotating) {
this.mouseX = event.clientX;
this.mouseY = event.clientY;
this.velX = this.mouseX - this.prevMouseX;
this.velY = this.mouseY - this.prevMouseY;
}
const dirX = this.mouseX - this.mouseTouchX;
const dirY = this.mouseY - this.mouseTouchY;
const dirLength = Math.sqrt(dirX * dirX + dirY * dirY);
const dirNormalizedX = dirX / dirLength;
const dirNormalizedY = dirY / dirLength;
const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
let degrees = 180 * angle / Math.PI;
degrees = (360 + Math.round(degrees)) % 360;
if(this.rotating) {
this.rotation = degrees;
}
if(this.holdingPaper) {
if(!this.rotating) {
this.currentPaperX += this.velX;
this.currentPaperY += this.velY;
}
this.prevMouseX = this.mouseX;
this.prevMouseY = this.mouseY;
paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
}
};

document.addEventListener('mousemove', moveHandler);
document.addEventListener('touchmove', moveHandler);

const downHandler = (e) => {
const event = e.touches ? e.touches[0] : e;
if(this.holdingPaper) return;
this.holdingPaper = true;
paper.style.zIndex = highestZ;
highestZ += 1;
this.mouseTouchX = event.clientX;
this.mouseTouchY = event.clientY;
this.prevMouseX = event.clientX;
this.prevMouseY = event.clientY;
if(e.type === 'mousedown' && e.button === 2) {
this.rotating = true;
}
};

paper.addEventListener('mousedown', downHandler);
paper.addEventListener('touchstart', downHandler);

const upHandler = () => {
this.holdingPaper = false;
this.rotating = false;
};

window.addEventListener('mouseup', upHandler);
window.addEventListener('touchend', upHandler);
}
}

const papers = Array.from(document.querySelectorAll('.paper'));
papers.forEach(paper => {
const p = new Paper();
p.init(paper);
});

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audio");
    var audioPlayer = document.getElementById("audioPlayer");
    var playIcon = document.getElementById("playIcon");
});