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
    // Navbar Dropdown Menu
    document.getElementById('wblt').addEventListener('mouseenter', () => {
        document.getElementById('wbl').style.height = '9vh';
        document.getElementById('wblt').style.backgroundColor = '#BA181B';
        document.getElementById('wblt').style.color = 'white';
    });
    document.getElementById('wbl').addEventListener('mouseenter', () => {
        document.getElementById('wbl').style.height = '9vh';
        document.getElementById('wblt').style.backgroundColor = '#BA181B';
        document.getElementById('wblt').style.color = 'white';
    })
    document.getElementById('wblt').addEventListener('mouseleave', () => {
        document.getElementById('wbl').style.height = '0vh';
        document.getElementById('wblt').style.backgroundColor = '#F5F3F4'
        document.getElementById('wblt').style.color = '#161A1D'
    });
    document.getElementById('wbl').addEventListener('mouseleave', () => {
        document.getElementById('wbl').style.height = '0vh';
        document.getElementById('wblt').style.backgroundColor = '#F5F3F4'
        document.getElementById('wblt').style.color = '#161A1D'
    })

    document.getElementById('ext').addEventListener('mouseenter', () => {
        document.getElementById('extra').style.height = '9vh';
        document.getElementById('ext').style.backgroundColor = '#BA181B';
        document.getElementById('ext').style.color = 'white';
    });
    document.getElementById('extra').addEventListener('mouseenter', () => {
        document.getElementById('extra').style.height = '9vh';
        document.getElementById('ext').style.backgroundColor = '#BA181B';
        document.getElementById('ext').style.color = 'white';
    })
    document.getElementById('ext').addEventListener('mouseleave', () => {
        document.getElementById('extra').style.height = '0vh';
        document.getElementById('ext').style.backgroundColor = '#F5F3F4';
        document.getElementById('ext').style.color = '#161A1D';
    });
    document.getElementById('extra').addEventListener('mouseleave', () => {
        document.getElementById('extra').style.height = '0vh';
        document.getElementById('ext').style.backgroundColor = '#F5F3F4';
        document.getElementById('ext').style.color = '#161A1D';
    })

});

function redirect(url) {
    location.href = url;
};