// alert("It's Working!");

/*

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content

    Here are the items we need to change for each coffee:

    image - src of pic

    alt - alt tag of pic

    description - a paragraph of content about the coffee

    name - a name of today's coffee

    color - a color representing the coffee

    We may also use the following, but not part of the coffee itself
    today - the current day of the week

*/

function coffeeTemplate(coffee){
    
    let myReturn = "";

    myReturn += `<p>
    <img src="${coffee.src}" alt="${coffee.src}" id="coffee" />
    <strong class="feature">${coffee.src}'s Coffee Special:</strong> ${coffee.src}'s daily coffee special is <strong class="feature">${coffee.src}</strong>, ${coffee.src}
    </p>`;

    return myReturn;

}




let myDate = new Date();
let myDay = myDate.getDay();
let coffee = "";


switch(myDay){

   case 0:
     today = "Sunday";
   break;

   case 2:
     today = "Tuesday";
   break;

   case 3:
    today = "Wednesday";

    coffee = {

        color: "pink",
        name: "Bubble Tea",
        pic: "images/bubble-tea.jpg",
        alt: "A picture of Bubble Tea",
        day: "Wednesday",
        desc: `I like me some Bubble Tea!`

            };

  break;

   default:
     today = "Something went wrong!";

}
coffeeData = coffeeTemplate(coffee);
alert(coffee.pic);
console.log(coffee);
