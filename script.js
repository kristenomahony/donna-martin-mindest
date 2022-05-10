const quoteContainer = document.querySelector(".quote-container");
const bubbleText = document.querySelector(".bubble");
const authorText = document.getElementById("author");
const sendBtn = document.getElementById("send-email");

const nodemailer = require("nodemailer");

async function sendEmail() {
  var transporter = nodemailer.createTransport({
    host: "smtp.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: "kristenomahony@hotmail.com",
      pass: "BigBob84"
    }
  });

  console.log(req.body.message);

  let info = await transporter.sendMail({
    from: req.body.email, // sender address
    to: "kristenomahony@hotmail.com", // list of receivers
    subject: "A message from a new client",
    text: `My name is ${req.body.name}, ${req.body.phone} and ${req.body.message}`,
    context: {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      message: req.body.message
    }
  });
}

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
// event listeners
sendBtn.addEventListener("submit", sendEmail);
// on load
getQuotes();
