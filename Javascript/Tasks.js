//t1:select heading of a page by ID and change its text to welcome to sheryians
let heading_1 = document.querySelector("#heading_1");
heading_1.innerText="Welcome to Sheryians";
//t2: select all <li> elements and print their text using a loop
//METHOD 1: using for loop
let list_items =document.querySelectorAll("li");
for(i=0;i<list_items.length;i++){//we use for loop here because querySelectorAll provides us with an array like structure
    console.log(list_items[i].innerText);
}
//METHOD 2: using forEach loop
list_items.forEach(function(val){
    console.log(val.innerText);
})


//t3: select a paragraph and replace its text content with <b>Updated </b> content
paragraph_1= document.querySelector("p");
paragraph_1.innerHTML="<b>Updated </b> content";

//t4: getting the src value from an image
let image = document.querySelector("img");
console.log(image.getAttribute("src"));//method 1
console.log(image.src);//method 2

//t5: select a link and update its href
let linking = document.querySelector("a");
linking.setAttribute("href","https://dealer-portal-react-production.up.railway.app")//method 1
linking.href="https://dealer-portal-react-production.up.railway.app"//method 2

//t6:Add a value to a title attribute to a div dynamically
let divider = document.querySelector("div");
divider.setAttribute("title","This is a dynamically added title");//method 1


//t9: highlight every even list item
let li = document.querySelectorAll("ul li:nth-child(even)");
li.forEach(function(val){
    val.style.backgroundColor="lightgrey";
})
//points to remember
//1. querySelectorAll returns a nodelist which is similar to an array
//2. we can use for loop or forEach loop to iterate through the nodelist
//3. innerText is used to get or set the text content of an element
//4. innerHTML is used to get or set the HTML content of an element
//5. getAttribute is used to get the value of an attribute of an element
//6. setAttribute is used to set the value of an attribute of an element
//7. we can also use dot notation to get or set the value of an attribute of an element
//8. nth-child(even) is used to select every even child element
//9. style property is used to change the style of an element
//10.innerText is comparatively slower than textContent because innerText considers the styling and layout of the document while textContent does not
//11.innerHTML is used to set or get the HTML content of an element whereas innerText is used to set or get the text content of an element