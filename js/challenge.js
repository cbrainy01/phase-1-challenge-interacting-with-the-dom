//event listener is created to continuously increment the timer when the DOM parses through all the underlying HTML
document.addEventListener("DOMContentLoaded", incrementTimer);

//this function actually does the incrementing
function incrementTimer() {
    //runs the function every 1000 miliseconds(1second)
    const intervalID = document.setInterval(func, [1000]);

    function func() {
       const counter = document.getElementById("counter");
       //create element which holds the number that is being incremented
         const displayNum = counter.textContent;
         displayNum = displayNum + 1;
    }

}