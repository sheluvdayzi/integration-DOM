const card = document.querySelectorAll('.card');
const basenb = document.querySelector('.basenb');
const ingredientnb = document.querySelector('.ingredientnb');
const totaleuro = document.querySelector('.totaleuro');
const remise = document.querySelector('.remise');
const submit = document.querySelector('.card__submit');
const error = document.querySelector('.error');
const ingredientnb__total = document.querySelector('.ingredientnb__total');
const totaleuro__total = document.querySelector('.totaleuro__total');
const cmd__confirmationActive = document.querySelector('.cmd__confirmation--active');
const cmd__confirmation = document.querySelector('.cmd__confirmation');
const containerNone = document.querySelector('.container');

let nbvalue = 0;
let prix = 8.50;
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => {
        if (card[i].classList.contains('card--innactive')) {
            card[i].classList.remove('card--innactive');
            nbvalue -= 1;
            basenb.innerHTML = nbvalue;
            ingredientnb.innerHTML = nbvalue;
        }
        else {
            card[i].classList.add('card--innactive');
            console.log(i);
            nbvalue += 1;
            basenb.innerHTML = nbvalue;
            ingredientnb.innerHTML = nbvalue;
        }
        if (nbvalue == 1) {
            totaleuro.innerHTML = prix;
            ingredientnb.innerHTML = nbvalue + 1;
            remise.innerHTML = 'Double dose !'
        }
        else if (nbvalue == 0) {
            totaleuro.innerHTML = prix = 8.5;
            remise.innerHTML = '';
        }
        else if (nbvalue == 2) {
            totaleuro.innerHTML = prix = 8.5 - 1.5;
            remise.innerHTML = '- 1.50€ de remise !';
        }
        else if (nbvalue == 3) {
            totaleuro.innerHTML = prix = 8.5;
            remise.innerHTML = '';
        }
        else if (nbvalue == 4) {
            totaleuro.innerHTML = prix = 8.5 + 1.5;
            remise.innerHTML = '';
        }
        else if (nbvalue == 5) {
            totaleuro.innerHTML = prix = 8.5 + 3;
            remise.innerHTML = '';
        }
        else if (nbvalue == 6) {
            totaleuro.innerHTML = prix = 8.5 + 4.5;
            remise.innerHTML = '';
        }  // J'ai coder en dure parce que quand je mettais "si nbvalue > 3", ca marchait mais quand je deselectionnais ca ne s'actualisais pas correctement
        submit.addEventListener('click', () => {
            ingredientnb__total.innerHTML = nbvalue;
            totaleuro__total.innerHTML = prix;
            cmd__confirmation.classList.remove('cmd__confirmation--active');
            containerNone.classList.add('container--none');
        })
    }
    )
}

