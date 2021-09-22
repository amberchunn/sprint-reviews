const axios = require("axios");

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // Create DOM Elements
  const cardEl = document.createElement("div");
  const headlineEl = document.createElement("div");
  const authorEl = document.createElement("div");
  const imageEl = document.createElement("div");
  const photoEl = document.createElement("img");
  const bylineEl = document.createElement("span");

  // Add Attributes to DOM Elements
  cardEl.classList.add("card");
  headlineEl.classList.add("headline");
  authorEl.classList.add("author");
  imageEl.classList.add("img-container");
  photoEl.setAttribute("src", article.authorPhoto);

  // Add Text Content to DOM Elements
  headlineEl.textContent = article.headline;
  bylineEl.textContent = `By ${article.authorName}`;

  // Append Elements to DOM
  cardEl.appendChild(headlineEl);
  cardEl.appendChild(authorEl);
  authorEl.appendChild(imageEl);
  authorEl.appendChild(bylineEl);
  imageEl.appendChild(photoEl);

  // Add Event Listener for Card to Log the Headline to Console When Clicked
  cardEl.addEventListener("click", () =>
    console.log(`Headline: ${article.headline}`)
  );

  return cardEl;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardsEl = document.querySelector(selector);

  axios
    .get("http://localhost:5000/api/articles")
    .then((res) => {
      const articles = res.data["articles"];
      for (const key in articles) {
        const topics = articles[key];
        topics.forEach((article) => {
          const card = Card(article);
          cardsEl.appendChild(card);
        });
      }
    })
    .catch((err) => {
      console.log("Error!", err);
    });

  return cardsEl;
};

export { Card, cardAppender };
