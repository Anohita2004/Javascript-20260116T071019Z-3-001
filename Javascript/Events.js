//EVENTS AND EVENT HANDLING IN JAVASCRIPT
// An event is an action that occurs in the system you are programming, which the system tells you about so your code can respond to it as needed.
//Its basically how your element will behave on interacting with it, example,we click on the mouse and something changes then it is called event handling
//browser mein page par koi bhi harkat karo event raise ho jayega
//kuch screen par ho toh apko event handle karna aana chahiye
//event listener ka matlab hai aapne koi action ka reaction diye,suppose apne screen par click kiya aur kuch screen par change hogaya
//LETS START
//STEP 1: Select the paragraph first
let p = document.querySelector("p");
//.....................SYNTAX OF EVENT LISTENER...................
 // element.addEventListener(event, function, useCapture);
 // element: The HTML element to which you want to attach the event listener.
 // event: A string that specifies the name of the event to listen for (e.g., "click", "mouseover", "keydown").
 // function: The function to be executed when the event occurs. This can be a named function or an anonymous function.
 // useCapture (optional): A boolean value that indicates whether the event should be captured during the capturing phase (true) or the bubbling phase (false). The default is false.
//STEP 2: Now we will add an event listener to this paragraph
//we basically define the action first and then define the reaction in form of the function
p.addEventListener("click",function(){
    p.style.color="red";
    p.style.backgroundColor="yellow";
    
});
p.addEventListener("dblclick",function(){
    p.style.backgroundColor="white";
    p.style.color="black";});
//Removing an event listener

let butt = document.querySelector("button");
function changingColor(){
    butt.style.borderWidth="10px";
    butt.style.borderColor="green";

}
butt.addEventListener("click",changingColor);
butt.removeEventListener("click",changingColor);

//Counting the number of letters you typed in the input box
let input_name = document.querySelector("input");
let count =0;
input_name.addEventListener("input",function(){
    count+=1;
    console.log("You have typed "+count+" letters");
});//since this depends on the loop running,evenif we de;ete an element it increases the count
input_name.addEventListener("input",function(){
    count =input_name.value.length;
    letter=input_name.value;
    console.log("You have typed "+count+" letters: "+letter);
})
input_name.addEventListener("click",function(){
    input_name.style.backgroundColor="lightblue";
});
//using the data attribute
input_name.addEventListener("input",function(details){
    console.log(details.data);
})

//I want the heading to change asper the option selected by me
let selection = document.querySelectorAll("select option");
selection.forEach(function(option){
    option.addEventListener("select",function(){
        let heading = document.querySelector("h1");
        // cSpell:ignore Sheriyans
        heading.textContent=`Welcome to Sheriyans `+ option.textContent;
    });
});
let selectBox = document.querySelector("select");
selectBox.addEventListener("change",function(details){
    let heading = document.querySelector("h1");
    heading.style.color="purple";
    heading.textContent=`Welcome to Sheriyans `+ details.target.value;});

window.addEventListener("keydown",function(details){
    console.log(details.key);
    let heading_5 = document.querySelector("h5");
    heading_5.textContent=details.key;

});