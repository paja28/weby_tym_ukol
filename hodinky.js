const sekundy_el = document.querySelector("#sekundy");
const minuty_el = document.querySelector("#minuty");
const hodiny_el = document.querySelector("#hodiny");
const datum_el = document.querySelector("#datum");


const panelNastaveni = document.querySelector("#nastaveni-panel");
const btnToggle = document.querySelector("#toggle-nastaveni");
const tlacitkoPosun = document.querySelector("#tlac_posun");
const inputPosun = document.querySelector("#posun");
const alertBox = document.querySelector("#vlastni-alert");

let ulozenyPosunVMinutach = 0;

function aktualizujCas() {

    const akt_cas = new Date();
    
    akt_cas.setMinutes(akt_cas.getMinutes() + ulozenyPosunVMinutach);

    let h = akt_cas.getHours();
    let m = akt_cas.getMinutes();
    let s = akt_cas.getSeconds();

    hodiny_el.innerHTML = h < 10 ? '0' + h : h;
    minuty_el.innerHTML = m < 10 ? '0' + m : m;
    sekundy_el.innerHTML = s < 10 ? '0' + s : s;


    const volby = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    datum_el.innerHTML = akt_cas.toLocaleDateString('cs-CZ', volby);
}

aktualizujCas();
setInterval(aktualizujCas, 1000);

btnToggle.addEventListener("click", () => {
    panelNastaveni.classList.toggle("skryty");
});


tlacitkoPosun.addEventListener("click", () => {
    ulozenyPosunVMinutach = parseInt(inputPosun.value) || 0;
    

    aktualizujCas();


    const znamenko = ulozenyPosunVMinutach > 0 ? '+' : '';
    alertBox.innerHTML = `Nastavení uloženo: ${znamenko}${ulozenyPosunVMinutach} min`;

    alertBox.classList.add("zobrazit");

    setTimeout(() => {
        alertBox.classList.remove("zobrazit");
    }, 2500);
});
