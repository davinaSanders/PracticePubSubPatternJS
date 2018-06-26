const PubSub = require('../helpers/pub_sub.js');
const WordCounter = function () {

};


WordCounter.prototype.bindEventsCounter = function () {
  PubSub.subscribe('InputView:text-inputted', (evt) => {
    const inputtedText = evt.detail;
    const result = this.wordCountIs(inputtedText);
    PubSub.publish('WordCounter:result', result);
    console.log(result);
  });
};


WordCounter.prototype.wordCountIs = function (text) {
  var words = text.split(" ");
  return words.length;
};


module.exports = WordCounter;
