const slider = document.getElementById('slider')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const square1 = document.getElementById('square-item1')
const square2 = document.getElementById('square-item2')
const square3 = document.getElementById('square-item3')
const square4 = document.getElementById('square-item4')

let percent = 0;

if (square1) square1.style.backgroundColor = 'brown'
const squares = (percent) => {
  if (percent == -100) {
    square1.style.backgroundColor = 'rgb(75, 75, 75)';
    square2.style.backgroundColor = 'brown'
    square3.style.backgroundColor = 'rgb(75, 75, 75)';
  }else if (percent == -200) {
    square2.style.backgroundColor = 'rgb(75, 75, 75)';
    square3.style.backgroundColor = 'brown'
    square4.style.backgroundColor = 'rgb(75, 75, 75)';
  }else if (percent == -300) {
    square3.style.backgroundColor = 'rgb(75, 75, 75)';
    square4.style.backgroundColor = 'brown'
    square1.style.backgroundColor = 'rgb(75, 75, 75)';
  }else if (percent == 0){
    square4.style.backgroundColor = 'rgb(75, 75, 75)';
    square1.style.backgroundColor = 'brown'
    square2.style.backgroundColor = 'rgb(75, 75, 75)';
  }
}

prev && prev.addEventListener('click', (e) => {slidePrev()})

next && next.addEventListener('click', (e) => {slideNext()})

const slidePrev = () => {
  if(percent == 0) percent = -300;else percent += 100;
  slider.style.marginLeft = `${percent}`+'%';
  squares(percent)
}

const slideNext = () => {
  if(percent == -300) percent = 0;else percent -= 100;
  slider.style.marginLeft = `${percent}`+'%';
  squares(percent)
}
setInterval(function(){slideNext()},10000)