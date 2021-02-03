$(document).ready(function(){
  $("form#luckSurvey").submit(function(event) {
    event.preventDefault();
    $("luck-responses").show();


  }
  


  //two ways to return fortunes. 1) return an individual response for each bad luck - ex: saw a black cat, draw a circle of salt. 
  //2. if, else if, else statement. if sum of unlucky > lucky, bad fortune. sum of unlucky = sum of lucky, precarious month. sum of lucky > unlucky, you're doing well
  // Using a loop (for? each?) to total up the sum of something checked in "lucky" name attribute, then comparing.
  // Can also use a score system and return a different fortune for each score range
});