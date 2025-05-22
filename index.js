window.onload = function () {
    const roles = document.getElementById("roles");
    const myroles = ["Full Stack Developer", "Immortal Lion Council Member", "Immortal Lion", "Leader", "Marauder", "Scirauder", "Photographer"];
    var random;
    var count = 0;
    var countName = 0;
    var nameid = 0;
    var nameText = ["Kyle Alexander Baldovi", "AltronX"];
    const name = document.getElementById('name');
    updateRole();
    changeName();

    function changeName()  {
        if (nameid == 1) {
            name.innerText = "";
            countName = 0;
            nameEffect();
        } 
        if (nameid == 0) {
            name.innerText = "";
            countName = 0;
            nameEffect();
        }
    }
    function nameEffect() {
        if (countName < nameText[nameid].length) {
            name.innerText = name.innerHTML + nameText[nameid].charAt(countName);
            countName++;
            setTimeout(nameEffect, 100); // Corrected function reference
        } else {
            if (nameid == 1) {
                nameid = 0;
            } else if (nameid == 0) {
                nameid = 1;
            }
        }
    }
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

    setInterval(changeName, 15000)
};
