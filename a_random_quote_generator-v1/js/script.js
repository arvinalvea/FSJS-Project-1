/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * Array of objects containing the quotes, their source and/or citation, year
 ***/
let quotes = [
    {
        quote:
            "All our dreams can come true, if we have the courage to pursue them.",
        source: "Walt Disney",
        tag: "Motivational",
    },
    {
        quote: "The secret of getting ahead is getting started.",
        source: "Mark Twain",
    },
    {
        quote:
            "Home isn't where you land; home is where you launch. You can't pick your home any more than you can choose your family",
        source: "Tayari Jones",
        citation: "An American Marriage",
    },
    {
        quote: "It's hard to beat a person who never gives up",
        source: "Babe Ruth",
        year: 1940,
    },
    {
        quote: "Everything you can imagine is real.",
        source: "Pablo Picasso",
    },
];

/***
 * `getRandomQuote` function
 *
 * This function will generate a random number between zero and -1 the length of the quotes array.
 * This number will be used as the index to access a random object within the quotes array and returns that object.
 ***/

function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);

    return quotes[randomNumber];
}

/***
 * `changeBackgroundColor` function
 *
 * This function will change the background color when a new quote is printed to the page.
 ***/

function changeBackgroundColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}

/***
 * `printQuote` function
 *
 * This function will call on the `getRandomQuote` function and builds a HTML string using the properties of the
 * object returned from the `getRandomQuote` function.
 *
 * It will check if the object has extra properties and list them accordingly.
 *
 * It will then access the element in the DOM with an ID of `quote-box` and insert the HTML it just built.
 ***/

function printQuote() {
    let randomQuote = getRandomQuote();
    let quoteHTML = `<p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}`;

    if (randomQuote.citation) {
        quoteHTML += `
        <span class="citation"> ${randomQuote.citation} </span>
        `;
    }

    if (randomQuote.year) {
        quoteHTML += `
        <span class="year"> ${randomQuote.year} </span>
        `;
    }

    if (randomQuote.tag) {
        quoteHTML += `
      <span>, ${randomQuote.tag} </span>
      `;
    }

    quoteHTML += ` </p>`;
    console.log(quoteHTML);
    changeBackgroundColor();
    return (document.getElementById("quote-box").innerHTML = quoteHTML);
}

newQuote = printQuote();
document.getElementById("quote-box").innerHTML = newQuote;
setInterval(function () {
    printQuote();
}, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
    .getElementById("load-quote")
    .addEventListener("click", printQuote, false);
