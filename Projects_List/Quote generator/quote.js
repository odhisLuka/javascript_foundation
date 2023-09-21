// An array of sample quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It always seems impossible until it is done. - Nelson Mandela",
];

// Function to generate a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[randomIndex];
}

// Attach the function to the button click event
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", generateQuote);

// Initial quote generation - optional
generateQuote();
