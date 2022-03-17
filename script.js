

const content = document.getElementById("content");

const btn = document.getElementById("btn");



const colors=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];



btn.addEventListener('click',function(){
  console.log('am clicked!')
    let hex= '#';

    for(let i=0;i<6;i++){
       hex += colors[getRandomColors()];
    }

    //set the body color & set the content
    content.textContent =hex;
    document.body.style.backgroundColor = hex;


})

function getRandomColors(){
    return (Math.floor(Math.random() * 15));
}