const PubSub = require('../helpers/pub_sub.js');
const ResultView = function () {

};

// const form = document.querySelector('#wordcounter-form');

ResultView.prototype.bindEventsResult = function () {
  PubSub.subscribe('WordCounter:result', (evt) => {
    const result = evt.detail;
    this.updateView(result);
    console.log(result);
  });
};

// const handleFormSubmit = function (event) {
//   event.preventDefault();
//   this.updateView(event);
// }

// form.addEventListener('submit', handleFormSubmit);

ResultView.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result');
    resultElement.textContent = `Word Count: ${result}`;
  };



module.exports = ResultView;
