$(document).ready(function () {
  var quotes = [
        ["Lao Tzu","The journey of a thousand miles begins with one step."],
        ["Norman Vaughan","Dream big and dare to fail."],
        ["Ralph Waldo Emerson","What you do speaks so loudly that I cannot hear what you say."],
        ["Gandhi","You must be the change you wish to see in the world."],
        ["Christopher Morley","There is only one success: to be able to spend your life in your own way."],
        ["John Muir","The power of imagination makes us infinite."],
        ["T.S. Eliot","Every moment is a fresh beginning"],
        ["Albert Einstein","Your imagination is your preview of life’s coming attractions."],
        ["Marsha Sinetar ","Do what you love and the money will follow."],
        ["Albert Einstein","I think and think for months and years. Ninety-nine times, the conclusion is false. The hundredth time I am right."],
        ["Albert Einstein","The true sign of intelligence is not knowledge but imagination."]
      ];
  var quotesCopy = quotes.slice();

  $("#getQuote").on('click', function () {
      var html = "" ;
      if(quotesCopy.length === 0) {
        quotesCopy = quotes.slice();
      }
      var rand = Math.floor(Math.random() * quotesCopy.length);
      html += "<blockquote>" + quotesCopy[rand][1] + "<footer>" + quotesCopy[rand][0] + "</footer>" + "</blockquote>" ;
    // remove qoute from copy so we don't get repeating quotes
     quotesCopy.splice(rand,1);
     //Render Quote
      $("#quote").html(html);
       //Tweet the quote
      $(".twitter-quote").on("click", function(){
        $(this).attr("href", 'https://twitter.com/intent/tweet?text='  + jQuery(html).text());
      });
   });
});
