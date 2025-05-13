// Navbar Dropdown Menu
document.addEventListener('DOMContentLoaded', () => {
    // Navbar Dropdown Menu
    document.getElementById('wblt').addEventListener('mouseenter', () => {
        if (window.location.pathname.endsWith('index.html')) {
            if (window.scrollY === 0) { // Ensure the user is at the top of the page
                const scrollAmount = window.innerHeight * 0.09; // Calculate 9vh
                window.scrollBy({ top: scrollAmount, behavior: 'smooth' }); // Scroll down by 9vh
            }
        }         
        document.getElementById('wbl').style.height = '9vh';
        document.getElementById('wbl').style.visibility = 'visible';
        document.getElementById('wblt').style.backgroundColor = '#BA181B';
        document.getElementById('wblt').style.color = 'white';
        document.querySelectorAll(".wbltt").forEach(element => {
            element.style.bottom = "0px"; // Change to "0px" if needed
            element.style.opacity = "1";
        });
    });
    document.getElementById('wbl').addEventListener('mouseenter', () => {
        document.getElementById('wbl').style.height = '9vh';
        document.getElementById('wbl').style.visibility = 'visible';
        document.getElementById('wblt').style.backgroundColor = '#BA181B';
        document.getElementById('wblt').style.color = 'white';
        document.querySelectorAll(".wbltt").forEach(element => {
            element.style.bottom = "0px"; // Change to "0px" if needed
            element.style.opacity = "1";
        });
    })
    document.getElementById('wblt').addEventListener('mouseleave', () => {
        document.getElementById('wbl').style.height = '0vh';
        document.getElementById('wbl').style.visibility = 'hidden';
        document.getElementById('wblt').style.backgroundColor = '#F5F3F4';
        document.getElementById('wblt').style.color = '#161A1D';
        document.querySelectorAll(".wbltt").forEach(element => {
            element.style.bottom = "9vh"; // Change to "0px" if needed
            element.style.opacity = "0";
        });
    });
    document.getElementById('wbl').addEventListener('mouseleave', () => {
        document.getElementById('wbl').style.height = '0vh';
        document.getElementById('wbl').style.visibility = 'hidden';
        document.getElementById('wblt').style.backgroundColor = '#F5F3F4';
        document.getElementById('wblt').style.color = '#161A1D';
        document.querySelectorAll(".wbltt").forEach(element => {
            element.style.bottom = "9vh"; // Change to "0px" if needed
            element.style.opacity = "0";
        });
    })

    document.getElementById('ext').addEventListener('mouseenter', () => {
        if (window.location.pathname.endsWith('index.html')) {
            if (window.scrollY === 0) { // Ensure the user is at the top of the page
                const scrollAmount = window.innerHeight * 0.09; // Calculate 9vh
                window.scrollBy({ top: scrollAmount, behavior: 'smooth' }); // Scroll down by 9vh
            }
        }     
        document.getElementById('extra').style.height = '9vh';
        document.getElementById('extra').style.visibility = 'visible';
        document.getElementById('ext').style.backgroundColor = '#BA181B';
        document.getElementById('ext').style.color = 'white';
        document.querySelectorAll(".extt").forEach(element => {
            element.style.bottom = "0px"; // Change to "0px" if needed
            element.style.opacity = "1";
        });
    });
    document.getElementById('extra').addEventListener('mouseenter', () => {
        document.getElementById('extra').style.height = '9vh';
        document.getElementById('extra').style.visibility = 'visible';
        document.getElementById('ext').style.backgroundColor = '#BA181B';
        document.getElementById('ext').style.color = 'white';
        document.querySelectorAll(".extt").forEach(element => {
            element.style.bottom = "0px"; // Change to "0px" if needed
            element.style.opacity = "1";
        });
    })
    document.getElementById('ext').addEventListener('mouseleave', () => {
        document.getElementById('extra').style.height = '0vh';
        document.getElementById('extra').style.visibility = 'hidden';
        document.getElementById('ext').style.backgroundColor = '#F5F3F4';
        document.getElementById('ext').style.color = '#161A1D';
        document.querySelectorAll(".extt").forEach(element => {
            element.style.bottom = "9vh"; // Change to "0px" if needed
            element.style.opacity = "0";
        });
    });
    document.getElementById('extra').addEventListener('mouseleave', () => {
        document.getElementById('extra').style.height = '0vh';
        document.getElementById('extra').style.visibility = 'hidden';
        document.getElementById('ext').style.backgroundColor = '#F5F3F4';
        document.getElementById('ext').style.color = '#161A1D';
        document.querySelectorAll(".extt").forEach(element => {
            element.style.bottom = "9vh"; // Change to "0px" if needed
            element.style.opacity = "0";
        });
    })
    window.addEventListener("scroll", () => {
        var navbar = document.getElementById('navbar');
        if (window.location.pathname.endsWith('index.html')) {
            const triggerPosition = window.innerHeight - (window.innerHeight * 0.08);
            if (window.scrollY > triggerPosition) {
                navbar.classList.add("fixed");
                document.getElementById('about').style.paddingTop = '18vh';
            } else {
                navbar.classList.remove("fixed");
                document.getElementById('about').style.paddingTop = '10vh';
            }
        }
    });
    
});

function redirect(url) {
    location.href = url;
};