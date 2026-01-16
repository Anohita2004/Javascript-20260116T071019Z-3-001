//creation of an element
//appending/prepending  an element- wherebver you want to
//let h1= document.createElement("h1");//creates a blank h1 tag but doesnt show inside the elements view
//h1.innerText="Hello World";
//to attach this h1 tag with the html we need to select the body element first and then append or prepend
//document.body.append(h1);//do this if you want to add at the end of the body space,at the very last
//document.body.prepend(h1);//do this if you want to attach the h1 at the very first of the body space
//document.querySelectorAll("body").append(h1);//another way of selecting body and appending h1   
//document.querySelectorAll("body").prepend(h1);//another way of selecting body and prepending h1 





//STEP 2:Change styles of css using JS: method 1 was using .tyle and the next method is using the classList
let h4 = document.querySelector("h4");
h4.classList.add("abcd");//adds the style of class abcd into the h4 tag 
let heading_1= document.querySelectorAll("h1");
heading_1[1].classList.add("abcd");
//selecting all buttons who belong to class buy-now 
let buy_now = document.querySelectorAll(".buy-now");
console.dir(buy_now);
//SOME POINTS TO REMEMBER:
//1. classList is used to add the class defined in the css to the selected element in html
//2. classList.add("class name") is used to add the class defined in the css to the selected element in html
//3. querySelector is used to select a single element whereas querySelectorAll is used to select multiple elements
//4. while using querySelectorAll we need to specify the index of the element we want to select as it selects all the elements of that type and stores them in an array format
//5. while using classList.add we need to specify the class name defined in the css inside double quotes
//6. innerText is used to change the text inside the selected element
//7. createElement is used to create a new element
//8. append is used to add the element at the end of the selected element
//9. prepend is used to add the element at the beginning of the selected element
//10. document.body is used to select the body element of the html
//11. document.head is used to select the head element of the html
//12. document.title is used to select the title element of the html
//13. document.querySelector("element") is used to select a single element
//14. document.querySelectorAll("element") is used to select multiple elements
//15. style is used to change the style of the selected element
//16.If you want to select an element with an id using querySelecttor then use '#' before the id name whereas if we use class then use '.' before the class name but 
//17.If we use getElementById then we dont need to use '#' before the id name
//18.If we use getElementsByClassName then we dont need to use '.' before the class name
//19.getElementById is used to select a single element with a specific id
//20.getElementsByClassName is used to select multiple elements with a specific class name