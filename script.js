let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  const title = document.getElementById('main-title');
  title.textContent = 'Welcome';
  // console.log(title.textContent);

  // Part 2
  const body = document.querySelector('body');
  body.style.backgroundColor =
    'rgba(' + 0 + ',' + 191 + ',' + 255 + ',' + 0.3 + ')';

  // Part 3
  const favThings = document.getElementById('favorite-things');
  favThings.lastElementChild.remove('lastElementChild');

  // Part 4
  const list = document.querySelectorAll('.special-title');
  list.forEach((title) => (title.style.fontSize = '2rem'));

  // Part 5
  const pastRacesList = document.getElementById('past-races');
  const listElem = pastRacesList.children;

  for (let i = 0; i < listElem.length; i++) {
    if (listElem[i].textContent === 'Chicago') {
      // console.log(listElem[i].textContent);
      listElem[i].remove();
    }
  }

  // Part 6
  const listElement = document.createElement('li');
  listElement.textContent = 'Pittsburgh';
  pastRacesList.appendChild(listElement);

  // Part 7
  const blogPostDiv = document.createElement('div');
  blogPostDiv.classList.add('blog-post', 'purple');

  const blogPostTitle = document.createElement('h1');
  blogPostTitle.textContent = 'Pittsburgh';
  blogPostDiv.appendChild(blogPostTitle);

  const blogPostParagraph = document.createElement('p');
  blogPostParagraph.textContent = 'new paragraph';
  blogPostDiv.appendChild(blogPostParagraph);

  const mainParagraphs = document.querySelectorAll('.blog-post');

  mainParagraphs[0].before(blogPostDiv);

  // Part 8
  const quoteTitleBtn = document.getElementById('quote-title');
  quoteTitleBtn.addEventListener('click', randomQuote);

  // Part 9
  const updatedMainParagraphs = document.querySelectorAll('.blog-post');

  updatedMainParagraphs.forEach((element) => {
    element.addEventListener('mouseout', function(){
      element.classList.toggle('purple');
    });
    element.addEventListener('mouseenter', function(){
      element.classList.toggle('red');
    });
  });
});
