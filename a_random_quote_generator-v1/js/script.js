/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
let quotes = [
    {
        quote:
            "All our dreams can come true, if we have the courage to pursue them.",
        source: "Walt Disney",
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
 ***/

function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);

    // console.log(randomNumber);
    // console.log(quotes[randomNumber]);

    return quotes[randomNumber];
}

/***
 * `printQuote` function
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

    quoteHTML += ` </p>`;
    console.log(quoteHTML);

    return quoteHTML;
}
let newQuote = printQuote();
document.getElementById("quote-box").innerHTML = newQuote;

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
    .getElementById("load-quote")
    .addEventListener("click", printQuote, false);
