const button1=document.querySelector('.btn1');
const button2=document.querySelector('.btn2');
const button3=document.querySelector('.btn3');

let body=document.querySelector('body');

let heading=document.querySelector('h1');


//function to  change body to red
function redBackground(){
if(button1){
    body.style.backgroundColor="red";
    heading.style.color="white";
    button1.addEventListener("click",redBackground);

}
}

button1.addEventListener("click",redBackground);

//function to  change body to yellow
function yellowBackground(){
    if(button2){
        body.style.backgroundColor="yellow";
        heading.style.color="black";
        button2.addEventListener("click",yellowBackground);
    }
}

button2.addEventListener("click",yellowBackground);


//function to  change body to green
function greenBackground(){
    if(button3){
        body.style.backgroundColor="green";
        heading.style.color="white";
        button3.addEventListener("click",greenBackground);
    }
}

button3.addEventListener("click",greenBackground)
