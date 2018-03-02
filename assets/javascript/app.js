$(document).ready(function () {
    // First make the timer
    var number = 120;
    
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    //  The decrement function.
    function decrement() {

        //  Decrease number by one.
        number--;
  
        //  Show the number in the #show-number tag.
        $("#show-number").html("<h4>"+ "Time Remaining:" + " " + number + "</h4>");
         //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }

    }
    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();
    $('#quiz-form').on("submit", function (event) {
        event.preventDefault();
    });
    //Start the timer a 5 seconds after the page loads
});

    //When the user submits the form

   
    //Chck what answer they picked

    //Give them a score 



