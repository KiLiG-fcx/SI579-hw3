/*
* Excercise 1
*
*/

const colorblock=document.querySelector('#color-block')
const colorname=document.querySelector('#color-name')
/*
* Then write a function that changes the text and the color inside the div
*
*/
colorblock.addEventListener("click",changeColor);
function changeColor(){
    //Write a condition determine what color it should be changed to
    if(colorname.textContent=="#F08080"){
        //change the background color using JS
        colorblock.style['background-color']="#E6E6FA"
        //Change the text of the color using the span id color-name
        colorname.textContent="#E6E6FA"
    }
    else{
        //change the background color using JS
        colorblock.style.backgroundColor="#F08080"
        //Change the text of the color using the span id color-name
        colorname.textContent="#F08080"       
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const convertbutton=document.querySelector('#convertbtn');
const faname=document.querySelector("#f-input");
convertbutton.addEventListener('click',convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    /*console.log(faname.value);*/
    var temp=(faname.value-32)*5/9;
    //Send the calculated temperature to HTML
    document.querySelector('#c-output').textContent=temp;
}


