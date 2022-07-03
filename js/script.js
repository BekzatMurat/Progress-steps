const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActives = 1;
next.addEventListener('click', () => {
  currentActives++;
  if (currentActives > circles.length) {
    currentActives = circles.length;
  }

  update();
})

prev.addEventListener('click', () => {
  currentActives--;
  if (currentActives < 1) {
    currentActives = 1;
  }

  update();
})

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActives) {  
      circle.classList.add('active');
    }else {
      circle.classList.remove('active');
    }
  })

  const actives = document.querySelectorAll('.active');

  if(currentActives == 1) {
    prev.disabled = true;
  }
  else if (currentActives == circles.length) {
    next.disabled = true;
  }
  else {
    prev.disabled = false;
    next.disabled = false;
  }

  let width = 0.33 * (actives.length - 1);
  progress.style.width = width * 100 + "%";

}
