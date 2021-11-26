const eqallButton = document.querySelector('.main_calc_body_container .main_buttons_container ul.buttons li:nth-child(17)');
const clearButton = document.querySelector('.main_calc_body_container .main_buttons_container ul.buttons li:nth-child(3)');
let   backSpace   = document.querySelector('.main_calc_body_container .main_buttons_container ul.buttons li:nth-child(2)');
const Numbers     = document.querySelectorAll('.main_calc_body_container .main_buttons_container ul.buttons li[data-num]');
let   display     = document.querySelector('.Display')
let   OperationButtons = document.querySelectorAll('.main_calc_body_container .main_buttons_container ul.buttons li[data-operator]')

//Array to store number Choosed

let numberFromCalc = [];

//Geting numbers btns and add click event to btns
for(let number of Numbers){
    
    number.addEventListener('click' , (e)=>{
        display.innerHTML += Number.parseInt(e.target.getAttribute('data-num'))
        numberFromCalc.push(Number.parseInt(e.target.getAttribute('data-num')));
    })
};

//Geting clear btn and add event
clearButton.addEventListener('click' , ()=>{
    display.innerHTML = '';
    numberFromCalc=[];
})

//Geting clear btn and add event 
backSpace.addEventListener('click'  , ()=>{
    if  (display.textContent !="")    {

    
    let DisplayConverted = display.textContent.split('')
        DisplayConverted.pop()
        // display.innerHTML = DisplayConverted.join('')
        display.innerHTML = Number.parseFloat(DisplayConverted.join(''))
    }

})

//Geting Operation btns and add event
//forEach fot getting all operation btns
OperationButtons.forEach(operator =>{
    //Start Adding Click Event 
    operator.addEventListener('click' , e=>{
        display.innerHTML += e.target.getAttribute('data-operator')
        numberFromCalc.push(e.target.getAttribute('data-operator'))
    })
})

eqallButton.addEventListener('click',()=>{
    display.innerHTML =eval(display.textContent)
})

