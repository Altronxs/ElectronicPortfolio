window.onload = function () {
    const roles = document.getElementById("roles");
    const myroles = ["Full Stack Developer", "Immortal Lion Council Member", "Immortal Lion", "Leader", "Marauder", "Scirauder", "Photographer"];
    var random;
    var count = 0;
    var countName = 0;
    var nameid = 0;
    var nameText = ["Kyle Alexander Baldovi", "AltronX", "AlexTronX", "AlternateTronX"];
    const name = document.getElementById('name');
    updateRole();

    function changeName()  {
        name.innerText = "";
        countName = 0;
        nameEffect();
    }

    changeName();
    function nameEffect() {
        if (countName < nameText[nameid].length) {
            name.innerText = name.innerHTML + nameText[nameid].charAt(countName);
            countName++;
            setTimeout(nameEffect, 100); // Corrected function reference
        } else {
            if (nameid == 1) {
                nameid = 2;
            } else if (nameid == 0) {
                nameid = 1;
            } else if (nameid == 2) {
                nameid = 3;
            } else if (nameid == 3) {
                nameid = 0;
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
        if (count < myroles[random].length) {
            roles.innerText = roles.innerHTML + myroles[random].charAt(count);
            count++;
            setTimeout(typeEffect, 100);
        }
    }
    
    // Trigger the update every 10 seconds
    setInterval(updateRole, 10000);

    setInterval(changeName, 25000);
};