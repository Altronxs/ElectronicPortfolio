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
        if (window.location.pathname.endsWith('index.html')) {
            if (window.scrollY === 0) { // Ensure the user is at the top of the page
                const scrollAmount = window.innerHeight * 0.09; // Calculate 9vh
                window.scrollBy({ top: scrollAmount, behavior: 'smooth' }); // Scroll down by 9vh
            }
        }     
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