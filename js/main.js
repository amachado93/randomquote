(function() {
  var quotes = [
  'The slimy old lady proudly dodged because some dog passionately killed towards a soft boy which, became a soft, lovely teacher. - Walt Disney',
  'The slimy plastic precisely sliced because some dog passionately killed towards a lovely professor which, became a professional, dumb duck. - FDR',
  'The slimy duck passionately kicked because some dog passionately killed towards a dumb plastic which, became a slimy, beautiful bird. - Me',
  'The soft clock humbly ran because some old lady proudly died above a lazy boy which, became a rough, lazy clock. - Oscar Wilde',
  'The lazy duck calmly flew because some clock elegantly ran into a dumb hamster which, became a vibrating, professional bird. - Rowan Atkinson',
  'The rough professor quickly dodged because some teacher humbly rolled below a hot plastic which, became a lovely, lovely professor. - Einstein',
  'When you think about an apple, you also think about the opposite of an apple. - Jaden Smith',
  'ayy lmao - unknown',
  'Welcome to Hollywood, baby! You got start material written all over you! - Audrey Hepburn',
  'I was playing Minecraft on survival single player and herobrain hacked me and took away all my diamonds and killed me!1! - Typical Minecraft Player'
]



function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementsByClassName('quoteDisplay').innerHTML = quotes[randomNumber];
}

})()
