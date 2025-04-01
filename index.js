window.onload = function () {
    const roles = document.getElementById("roles");
    const myroles = ["Full Stack Developer", "Immortal Lion Council Member", "Immortal Lion", "Leader", "Marauder", "Scirauder", "Photographer"];
    var random;
    var count = 0;
<<<<<<< HEAD
    var delay = false;
=======
    updateRole();
>>>>>>> 417c0a37f4d5651513b6d7118e0f931a90c2d8ca

    function updateRole() {
        roles.innerText = "";
        count = 0;
        random = Math.floor(Math.random() * myroles.length);
        typeEffect();
    }

    function typeEffect() {
        if (count == 0) {
            roles.innerText = myroles[random].charAt(0);
            count++;
            console.log("test");
            setTimeout(typeEffect, 200);
        } else {
            roles.innerText = roles.innerHTML + myroles[random].charAt(count);
            count++;
            setTimeout(typeEffect, 200);
        }
    }
    
    // Trigger the update every 10 seconds
    setInterval(updateRole, 10000);

    // intial play
    updateRole();
};
