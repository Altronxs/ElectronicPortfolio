window.onload = function () {
    const roles = document.getElementById("il");
    var count = 1;

    function updateBackground() {
       if (count == 1) {
            roles.style.backgroundImage = "url('./public/pictures/IMG_6664.jpg')";
            roles.style.backgroundPositionY = '50%';
            count = 2;
       } else if (count == 2) {
            roles.style.backgroundImage = "url('./public/pictures/IMG_6665.jpg')";
            count = 3;
       } else if (count == 3) {
          roles.style.backgroundImage = "url('./public/pictures/IMG_1787.jpg')";
          count = 1;
       }
    }
    
    // Trigger the update every 26 seconds
    setInterval(updateBackground, 26000);

    // intial play
    updateBackground();
};