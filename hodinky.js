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
//Hodiny zobrazují aktuální čas + uložený posun (viz bod 3). Nemám
setInterval(function () {

    sekundy++;
    sekundy_el.innerHTML=sekundy <10 ? '0'+sekundy:sekundy;
    if(sekundy >=59){
        sekundy = 0;
        minuty++;
        minuty_el.innerHTML = minuty <10? '0'+minuty:minuty;
        if(minuty >=59)
        {
            minuty=0;
            hodiny++;
            hodiny_el.innerHTML=hodiny<10? '0'+hodiny:hodiny;
            if(hodiny>=23)
                hodiny=0;
        }
    }
}, 1000)

var datum_el = document.querySelector("#datum");
switch(akt_cas.getDay){
    case 1:datum_el.innerHTML="Pondělí ";break;
    case 2:datum_el.innerHTML="Úterý ";break;
    case 3:datum_el.innerHTML="Středa ";break;
    case 4:datum_el.innerHTML="Čtvrtek ";break;
    case 5:datum_el.innerHTML="Pátek ";break;
    case 6:datum_el.innerHTML="Sobota ";break;
    case 7:datum_el.innerHTML="Neděle ";break;
    default:datum_el.innerHTML="Nerozpoznano";
}