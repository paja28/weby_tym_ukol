var sekundy_el = document.querySelector("#sekundy");
var minuty_el = document.querySelector("#minuty");
var hodiny_el = document.querySelector("#hodiny");
const akt_cas = new Date();
var sekundy = akt_cas.getSeconds();
var minuty = akt_cas.getMinutes();
var hodiny = akt_cas.getHours();
sekundy_el.innerHTML=sekundy;
minuty_el.innerHTML = minuty;
hodiny_el.innerHTML=hodiny;
setInterval(function () {

    sekundy++;
    sekundy_el.innerHTML=sekundy;
    if(sekundy >=59){
        sekundy = 0;
        minuty++;
        minuty_el.innerHTML = minuty;
        if(minuty >=59)
        {
            minuty=0;
            hodiny++;
            hodiny_el.innerHTML=hodiny;
            if(hodiny>=23)
                hodiny=0;
        }
    }
}, 1000)