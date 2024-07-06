function showCongratulations() {
document.getElementById('congratulations').classList.remove('d-none');
}

function moveOption(element) {
const currentWidth = element.getBoundingClientRect().width;
const currentHeight = element.getBoundingClientRect().height;
const newWidth = currentWidth * 1.02; 
const newHeight = currentHeight * 1.02;
element.style.height = `${newHeight}px`;
element.style.width = `${newWidth}px`;
}


function moveOption2(element) {
const x = Math.random() * (window.innerWidth - element.offsetWidth);
const y = Math.random() * (window.innerHeight - element.offsetHeight);
element.style.left = `${x}px`;
element.style.top = `${y}px`;
}

function showCongratulations() {
  document.getElementById('congratulations').classList.remove('d-none');
  setTimeout(function() {
      window.location.href = 'pergunta-final.html';
  }, 3000); 
}