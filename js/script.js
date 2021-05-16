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
const quotes=[

  {
    quote: 'If something is important enough, even if the odds are stacked against you, you should still do it.',
    source: 'Elon Musk',
    citation: 'Twitter',
    year: '2016'
  },
  {
    quote: 'Some people want it to happen, some wish it would happen, others make it happen.',
    source: 'Michael Jordan',
    citation: 'ESPN\'s Michael Jordan documentary \"The Last Dance\"',
    year:''
  },
  {
    quote: 'In a gentle way, you can shake the world.',
    source: 'Mahatma Gandhi',
    citation: '',
    year: ''

  },
  {
    quote: 'Happiness is not something ready made. It comes from your own actions.',
    source: 'Dalai Lama XIV',
    citation: '',
    year: ''
  },
  {
    quote: 'The most fundamental problem in software development is complexity. There is only one basic way of dealing with complexity: divide and conquer.',
    source: 'Bjarne Stroustrup',
    citation: 'The C++ Programming Language',
    year: ''
  },
  {
    quote: 'A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.',
    source: 'Alan Turing',
    citation: '',
    year: '1945'
  },
  {
    quote: 'The art of debugging is figuring out what you really told your program to do rather than what you thought you told it to do.',
    source: 'Andrew Singer',
    citation: '',
    year: ''
  },
  {
    quote: 'Creativity is intelligence having fun.',
    source: 'Albert Einstien',
    citation: 'Book',
    year: ''
  },
  {
    quote: 'The secret of getting ahead is getting started. The secret of getting started is breaking your complex overwhelming tasks into small manageable tasks, and starting on the first one.',
    source: 'Mark Twain',
    citation: '',
    year: ''
    
  }
]
   





/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  const randomNum= Math.floor(Math.random() * quotes.length) ; // generates random numbers from 0 to (number of elements in array) 
  return quotes[randomNum];                                    // outputs the quote bearing the random number 
}

/***
 * `printQuote` function
***/
let ptoHTML;
function printQuote(){
let RandomQuote=getRandomQuote();                             
ptoHTML="<p class='quote'>" + RandomQuote.quote + "</p>" + "<p class='source'>" + RandomQuote.source ;    //HTML string for "quote" and "source"
console.log(ptoHTML);
if(RandomQuote.citation!=''){                                                                             // checks if "citation" property is not null
  ptoHTML= ptoHTML + "<span class='citation'>" + RandomQuote.citation + "</span>";                        // adds HTML string for "citation"
}
if(RandomQuote.year!=''){                                                                                 // checks if "year" property is not null
  ptoHTML = ptoHTML + "<span class='year'>" + RandomQuote.year + "</span>";                               // adds HTML string for "year" 
}
ptoHTML=ptoHTML + "</p>"                                                                                  // adds closing </p> to string

document.getElementById("quote-box").innerHTML= ptoHTML;                                                  //prints the complete HTML string to the HTML file

}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);