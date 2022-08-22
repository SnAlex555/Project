const buttonPlus=document.querySelector('.filter__plus');
const buttonMinus=document.querySelector('.filter__minus');
const filterCost=document.querySelector('.filter__cost');
    
function filterCostOpen() {
    filterCost.classList.toggle('filter__cost--active');
    buttonMinus.classList.toggle('filter__minus--active');
    buttonPlus.classList.toggle('filter__plus--active');
}

buttonPlus.addEventListener('click', filterCostOpen);
buttonMinus.addEventListener('click', filterCostOpen);




const buttonPlusPeoples=document.querySelector('.filter__plus-peoples');
const buttonMinusPeoples=document.querySelector('.filter__minus-peoples');
const filterPeoples=document.querySelector('.filter__peoples');

function filterPeoplesOpen() {
    filterPeoples.classList.toggle('filter__peoples--active');
    buttonMinusPeoples.classList.toggle('filter__minus-peoples--active');
    buttonPlusPeoples.classList.toggle('filter__plus-peoples--active');
}

buttonPlusPeoples.addEventListener('click', filterPeoplesOpen);
buttonMinusPeoples.addEventListener('click', filterPeoplesOpen);




const buttonPlusPlace=document.querySelector('.filter__plus-place');
const buttonMinusPlace=document.querySelector('.filter__minus-place');
const filterPlace=document.querySelector('.filter__place');

function filterPlaceOpen() {
    filterPlace.classList.toggle('filter__place--active');
    buttonMinusPlace.classList.toggle('filter__minus-place--active');
    buttonPlusPlace.classList.toggle('filter__plus-place--active');
}

buttonPlusPlace.addEventListener('click', filterPlaceOpen);
buttonMinusPlace.addEventListener('click', filterPlaceOpen);




const buttonPlusDuration=document.querySelector('.filter__plus-duration');
const buttonMinusDuration=document.querySelector('.filter__minus-duration');
const filterDuration=document.querySelector('.filter__duration');

function filterDurationOpen() {
    filterDuration.classList.toggle('filter__duration--active');
    buttonMinusDuration.classList.toggle('filter__minus-duration--active');
    buttonPlusDuration.classList.toggle('filter__plus-duration--active');
}

buttonPlusDuration.addEventListener('click', filterDurationOpen);
buttonMinusDuration.addEventListener('click', filterDurationOpen);




const buttonPlusDate=document.querySelector('.filter__plus-date');
const buttonMinusDate=document.querySelector('.filter__minus-date');
const filterDate=document.querySelector('.filter__date');

function filterDateOpen() {
    filterDate.classList.toggle('filter__date--active');
    buttonMinusDate.classList.toggle('filter__minus-date--active');
    buttonPlusDate.classList.toggle('filter__plus-date--active');
}

buttonPlusDate.addEventListener('click', filterDateOpen);
buttonMinusDate.addEventListener('click', filterDateOpen);



