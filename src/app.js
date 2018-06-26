
const InputView = require('./views/input_view.js');
const WordCounter = require('./models/word_counter.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const inputView = new InputView();
  inputView.bindEventsInput();

  const wordCounter = new WordCounter();
  wordCounter.bindEventsCounter();


  const resultView = new ResultView();
  resultView.bindEventsResult();
});
