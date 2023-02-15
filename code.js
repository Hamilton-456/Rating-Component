const rating_container = document.querySelector('.rating-container');
const thanks_container = document.querySelector('.thanks-container');
const rating_buttons = document.querySelectorAll('.rating-button');
const submit_button = document.querySelector('.submit');
const error = document.querySelector('.error');
const rating = document.querySelector('.rating');

let rating_value;
let selected = false;

for(let i = 0; i < rating_buttons.length; i++){
    rating_buttons[i].onclick = function(){
        let j = 0
        while(j < rating_buttons.length){
            rating_buttons[j++].className = 'rating-button';
        }
        rating_buttons[i].className = 'rating-button active';
        rating_value = rating_buttons[i].value;
        selected = true;
    }
}

function setAnim(){
    error.style.animation = 'forwards hideerror .75s';
}

function eraseMesageError(){
    error.innerHTML = '';
}

submit_button.addEventListener('click', ()=>{
    if(!selected){
        error.innerHTML = 'Please choose a rating before sending!';
        error.style.animation = 'forwards showerror .75s';

        setTimeout(setAnim, 3000);
        setTimeout(eraseMesageError, 3500);
    }else{
        rating_container.style.display = 'none';
        thanks_container.style.display = 'inherit';
        rating.innerHTML = `You selected ${rating_value} out of 5`;
    }
})