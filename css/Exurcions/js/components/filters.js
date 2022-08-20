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


// var buttonPlus=document.querySelector('.filter__plus');
// var buttonMinus=document.querySelector('.filter__minus');
// const filterPeoples=document.querySelector('.filter__peoples');

// function filterPeoplesOpen() {
//     filterCost.classList.toggle('filter__peoples--active');
//     buttonMinus.classList.toggle('filter__minus--active');
//     buttonPlus.classList.toggle('filter__plus--active');
// }

// buttonPlus.addEventListener('click', filterPeoplesOpen);
// buttonMinus.addEventListener('click', filterPeoplesOpen);
