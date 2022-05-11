const quoteContainer = document.querySelector(".quote-container");
const bubbleText = document.querySelector(".bubble");
const authorText = document.getElementById("author");

let apiQuotes = [];

function newQuote() {
  // pick a random quote from api
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  bubbleText.textContent = `"${quote.text}"`;
}

// get quotes from API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // handle error here
  }
}

// on load
getQuotes();
