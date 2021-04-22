import './vendor';
import './helpers';

let checkBox = document.querySelectorAll('.skills__list-item-check');
let cursor = document.querySelector('.scale__cursor');
let skillLevel = document.querySelector('.scale__number');
let activeCheckBox = 1;


function getSkillLevel(count) {
  let n = skillLevel.innerHTML;
  let time = Math.round(100 / (count / 1));
  let interval = setInterval(() => {
    count > n ? n++ : n--;
    n == count ? clearInterval(interval) :'';
    
    skillLevel.innerHTML = n;
  }, time);
}


const howManyActiveCheckBox = function() {
    let num = 0
    for (let i = 0; i<checkBox.length; i++) {
        checkBox[i].classList.contains('active') ?
        num++ : ''
    };
    activeCheckBox = num;
    console.log(activeCheckBox)
    cursor.style.transform = `rotate(${330 + activeCheckBox * 15}deg)`
    getSkillLevel(activeCheckBox * 83)
};
const getChangedCheckBox = function() {
	for (let i = 0; i<checkBox.length; i++) {
		checkBox[i].addEventListener('click', function(evt) {
			checkBox[i].classList.toggle('active')
            howManyActiveCheckBox()
		});
	};
};

getChangedCheckBox()