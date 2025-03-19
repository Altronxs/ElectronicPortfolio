window.onload = function () {
    const roles = document.getElementById("roles");
    const myroles = ["Full Stack Developer", "Immortal Lion Council Member", "Immortal Lion", "Leader", "Marauder", "Scirauder"];
    let random;

    function updateRole() {
        // Fade out by setting opacity to 0
        roles.style.opacity = "0";

        // Wait for the fade-out to complete (1 second in this case)
        setTimeout(() => {
            random = Math.floor(Math.random() * myroles.length);
            roles.innerText = myroles[random]; // Update the text
            roles.style.opacity = "1"; // Fade back in

        }, 1000); // Matches the CSS transition time
    }

    // Trigger the update every 10 seconds
    setInterval(updateRole, 10000);
};
