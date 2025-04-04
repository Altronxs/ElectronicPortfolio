window.onload = function () {
    const roles = document.getElementById("roles");
    const myroles = ["Full Stack Developer", "Immortal Lion Council Member", "Immortal Lion", "Leader", "Marauder", "Scirauder", "Photographer"];
    var random;
    var count = 0;
    updateRole();

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

// Navbar Dropdown Menu
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('wblt').addEventListener('mouseenter', () => {
        document.getElementById('wbl').style.height = '8vh';
    });
    document.getElementById('wbl').addEventListener('mouseenter', () => {
        document.getElementById('wbl').style.height = '8vh';
    })
    document.getElementById('wblt').addEventListener('mouseleave', () => {
        document.getElementById('wbl').style.height = '0vh';
    });
    document.getElementById('wbl').addEventListener('mouseleave', () => {
        document.getElementById('wbl').style.height = '0vh';
    })

    document.getElementById('ext').addEventListener('mouseenter', () => {
        document.getElementById('extra').style.height = '8vh';
    });
    document.getElementById('extra').addEventListener('mouseenter', () => {
        document.getElementById('extra').style.height = '8vh';
    })
    document.getElementById('ext').addEventListener('mouseleave', () => {
        document.getElementById('extra').style.height = '0vh';
    });
    document.getElementById('extra').addEventListener('mouseleave', () => {
        document.getElementById('extra').style.height = '0vh';
    })
});
