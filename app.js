var counter;
function myFunction(){
  var userName = prompt('Welcome! What\'s your name?');{
    alert ('Hello ' + userName +  '. Time to play!');
  }
  var answerOne = prompt('Where do I currently work?');
  var myAnswerOne = 'Ohana Depot';
  if (answerOne === myAnswerOne){
    alert ('Yup, that\'s it!');
    counter++;
  }
  else{
    alert ('Wrong!');
  }
  var answerTwo = prompt('Where did I go to high school?');
  var myAnswerTwo = 'Curtis Sr High';
  if (answerTwo === myAnswerTwo){
    alert ('Yesss!');
    counter++;
  }
  else{
    alert ('Nope!');
  }
  var answerThree = prompt('Do I like music?');
  var myAnswerThree = 'yes';
  if (answerThree === myAnswerThree){
    alert ('Correct!');
    counter++;
  }
  else{
    alert ('C\'Mon Man!');
  }
  var answerFour = prompt('I was a waiter at where?')
  var myAnswerFour = 'MIZU';
  if (answerFour === myAnswerFour){
    alert ('Yup!');
    counter++;
  }
  else{
    alert ('Wrong!');
  }
  var answerFive = prompt('Did I work at an airline?');
  var myAnswerFive = 'yes';

  if (answerFive === myAnswerFive){
    alert ('Great Job!');
    counter++;
  }
  else{
    alert ('Nahhhh');
  }

  var answerSixArray = ['music', 'film', 'fashion'];
  var userAnswerSix = prompt ('Name one of my interests.');

  if (answerSixArray.indexOf(userAnswerSix) !== -1){
    alert ('Correct!'  +  answerSixArray  +  'is one of my interests.');
    counter++;
  }
  else{
    alert ('Sorry, nope.');
  }

  var myAnswerSeven = 7;
  var counter = 1;

  while (counter < 4){
    counter++;
    var answerSeven = parseInt (prompt ('What\'s my number?'));
    if (counter === 4){
      alert ('Good job');
    } else if (answerSeven < myAnswerSeven){
      alert ('Higher');
    } else if (answerSeven > myAnswerSeven){
      alert ('Lower');
    }
  }
  {
    alert ('You guessed' + counter + ' times.');
    alert ('Congratulations, you got' + counter + 'correct');
  }
};
