
// controls for changing the background
// create your event listener here
// add the background image change code inside of the event listener
document.getElementById('background-btn').addEventListener('click', function() {
    document.getElementById('background').style.backgroundImage = "url('https://wallpapercave.com/wp/wp1925773.jpg')";
});



// this is the code for changing a background image
// missing image url










// BUTTON CONTROLS

// controls for the left button
document.getElementById('left').addEventListener('click', function() {
    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) - 10;

    document.getElementById('ball').style.left = newPosition + 'px';    

});

// controls for the right button
// missing element id and event type
document.getElementById('right').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) + 10;

    document.getElementById('ball').style.left = newPosition + 'px';
});

