import '../scss/main.scss';
import moment from 'moment'

const buttonTwo = document.querySelector('.action--js')

buttonTwo.addEventListener('click', () => {
    const heading = document.querySelector('.main-heading--js');
    heading.innerHTML = ('Wszystko gra!');
    heading.classList.add('klasa-z-js');
});

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})



const startOfTheDay = moment().startOf('day').fromNow();

const timePlaceholder = document.querySelector('.time--js');
timePlaceholder.innerHTML = startOfTheDay;

console.log(startOfTheDay);



// Dodawanie cookies
// localStorage.setItem('human', 'Damian');

// console.log(localStorage.removeItem('human'));



// brak widocznych danych w obiekcie , jak dostać się do obiektu?

// console.log(JSON.stringify({ name: 'Tango' }));

localStorage.setItem('newKey', JSON.stringify({ name: 'Tango' }));


const myResult = localStorage.getItem('newKey');

console.log(JSON.parse(myResult));


// localStorage.setItem('newKey', { name: 'Tango' });

// console.log(localSorage.getItem('newKey'));

