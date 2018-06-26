const PubSub = require('../helpers/pub_sub.js');
const InputView = function () {

};

InputView.prototype.bindEventsInput = function () {
  const input = document.querySelector('#text');
  input.addEventListener('input', (evt) => {
    const inputtedText = evt.target.value;
    PubSub.publish('InputView:text-inputted', inputtedText);
    console.log('inputted text: ', inputtedText);
  })
};

module.exports = InputView;
