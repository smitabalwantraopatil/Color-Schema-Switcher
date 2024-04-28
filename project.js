const buttons = document.querySelectorAll('.button');
const main = document.querySelector('#main');

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        console.log(e.id);
        if(e.target.id==="grey"){
            main.style.backgroundColor="grey"
        }
        if(e.target.id==="white"){
            main.style.backgroundColor="white"
        }
        if(e.target.id==="blue"){
            main.style.backgroundColor="blue"
        }
        if(e.target.id==="yellow"){
            main.style.backgroundColor="yellow"
        }
    })
})