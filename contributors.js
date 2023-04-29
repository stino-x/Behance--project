const contributorObject = [
  {
    image: 'images/portrait-outgoing-good-looking-african-american-guy-with-bristle-blue-turtleneck (1).jpg',
    name: 'HOREB MAXIMUS',
    occupation: 'owner of kazun oil enterprises',
    contribution: 'Built over one hundred shelters for the disadvantaged in Europe',
  },
  {
    image: 'images/closeup-image-handsome-asian-man-is-shaving-hair-by-head-man-who-is-ordained-buddhism (1).jpg',
    name: 'LIN HO',
    occupation: 'shaolin monk',
    contribution: 'helped to rehabilitate homeless children in south east asia through martial arts',
  },
  {
    image: 'images/Driver.jpg',
    name: 'CLINTON JONES',
    occupation: 'farmer',
    contribution: 'helped feed the recipients of the organisations helping hands',
  },
  {
    image: 'images/headshot-handsome-young-afro-american-male-looking-with-broad-friendly-smile-enjoying-good-day-leisure-time-indoors-black-man-feeling-happy-carefree-while-relaxing-home (1).jpg',
    name: 'XAVIER JONES',
    occupation: 'farmer',
    contribution: 'helped feed the recipients of the organisations helping hands',
  },
  {
    image: 'images/IMG_20230217_142621.jpg',
    name: 'BURNA BOY',
    occupation: 'Musician',
    contribution: 'contributed financially to the growth of the organisation',
  },
  {
    image: 'images/IMG_20230217_142645.jpg',
    name: 'REMA',
    occupation: 'Musician',
    contribution: 'contributed financially to the growth of the organisation',
  },
];
const contributorsgrid = document.querySelector('.contributors-grid');

window.addEventListener('load', (() => {
  let content = '';
  contributorObject.forEach((contributor) => {
    content += `<div class="contributor-${contributor} contributor-info left">
          <div class="c-image"><img src="${contributor.image}" class="people-image" alt=""></div>
          <div class="info">
          <h2>${contributor.name}</h2>
          <p class="occupation">${contributor.occupation}</p>
          <div class="minus-container"></div>
          <p class="contributions">${contributor.contribution}</p>
          </div>
        </div>`;
  });
  contributorsgrid.innerHTML = content;
  // content = '';
}));