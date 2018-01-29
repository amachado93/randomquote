(function() {
  var quotes = [
  'But man is not made for defeat.  A man can be destroyed but not defeated - Hemingway',
  'When you reach the end of your rope, tie a knot and hang on. - FDR',
  'Nothing is permanent except change. - Heraclitus',
  'You cannot shake hands with a clenched fist. - Gandhi',
  'There is no charm equal to tenderness of heart. - Jane Austen',
  'Learning never exhausts the mind. - da Vinci',
  'When you think about an apple, you also think about the opposite of an apple. - Jaden Smith',
  'ayy lmao - unknown',
  'All that we see or seem is but a dream within a dream. - Edgar Allan Poe',
  'Good judgement comes from experience, and a lot of that comes from bad judgement - Will Rodgers'
]

  var button = document.getElementsByTagName('button')

  button[0].addEventListener('click', function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementsByClassName('quoteDisplay')[0].innerHTML = quotes[randomNumber];
}
)

})()
