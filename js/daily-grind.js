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

    myReturn += 
    `
        <p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
           <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}
        </p>
    `;

    return myReturn;
}


let myDate = new Date();
let myDay = myDate.getDay();
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//data available? show data from url
    myDay = urlParams.get("day");
}
//force to be an integer
myDay = parseInt(myDay);

switch(myDay){

   case 0:
     today = "Sunday";

     coffee = {
        name: "Drip",
        alt: "This is a pic of a Drip Coffee",
        desc: `Drippin Coffee.`,
        pic: "images/drip.jpg",
        color: "blue",
        day: "Sunday"
    }

   break;

   case 1:
     today = "Monday";

     coffee = {
        name: "Caramel",
        alt: "This is a pic of a Caramel Latte",
        desc: `MMM Caramel`,
        pic: "images/caramel-latte.jpg",
        color: "gold",
        day: "Monday"
    }

   break;

   case 2:
     today = "Tuesday";

     coffee = {
        name: "Cold Brew",
        alt: "This is a pic of a Cold Brew",
        desc: `Cold Brew is Yummy.`,
        pic: "images/cold-brew.jpg",
        color: "brown",
        day: "Tuesday"
    }

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

    }

  break;

    case 4:
        today = "Thursday";

        coffee = {

            color: "brown",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a Mocha",
            day: "Thursday",
            desc: `I love Mocha!`

        }

    break;

    case 5:
        today = "Friday";

        coffee = {
            name: "Frappaccino",
            alt: "This is a pic of a Frappaccino",
            desc: `Frappaccino like Al Pacino.`,
            pic: "images/frappaccino.jpg",
            color: "Red",
            day: "Friday"
        }

    break;

    case 6:
     today = "Saturday";


			coffee = {
				name: "Pumpkin Spice ",
				alt: "This is a pic of Pumpkin Spice Latte",
				desc: `Have some pumpkin, pumpkin.`,
				pic: "images/pumpkin-spice-latte.jpg",
				color: "magenta",
				day: "Saturday"
            }
   break;

    default:
        today = "Something went wrong!";

}
// coffeeData = coffeeTemplate(coffee);
// alert(coffee.pic);

// load coffee data to page 
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.background = coffee.color;


// console.log(coffee);
