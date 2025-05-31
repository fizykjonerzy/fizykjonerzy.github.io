let los = 0;
let a = 0;
let byly = [];
let p = 0;
let kasa = "0 zł";

let czyodp = false;
let liczCzas = false;
let stoper = 0;

let start = document.getElementById("start");
let mainmenu = document.getElementById("mainmenu");
let menu = document.getElementById("menu");
let quiz = document.getElementById("quiz");
let pytanie = document.getElementById("pytanietext");
let odpowiedzi = document.querySelectorAll(".odp");
let nastepne = document.getElementById("nastepne");
let nastepneOkno = document.getElementById("nastepneOkno");
let progi = document.getElementById("progi");
let publicznoscOkno = document.getElementById("publicznoscOkno");
let telefonOkno = document.getElementById("telefonOkno");
let gwarantowane = document.getElementById("gwarantowane");
let czasGry = document.getElementById("czasGry");
let koniecGry = document.getElementById("koniecGry");
let wynik = document.getElementById("wynik");

let szczebel = document.querySelectorAll('.szczebel');
let szczebelIndex = szczebel.length -1;


let sekundy = 0;
const czas = document.getElementById("czas");

function format(s) {
const min = Math.floor(s / 60);
const sek = s % 60;
return (
    String(min).padStart(2, '0') + ":" + String(sek).padStart(2, '0')
);
}

if (!liczCzas) {
    liczCzas = true;
    stoper = setInterval(() => {
      sekundy++;
      czas.textContent = "Czas: " + format(sekundy);
    }, 1000);
  }

  function zatrzymajCzas() {
  if (liczCzas) {
    liczCzas = false;
    clearInterval(stoper);
  }
  czasGry.textContent = "Czas gry: "+format(sekundy);
}


let pokazPytanie = () => {
    a++;
    los = Math.floor(Math.random() * pytania.length);
    p = pytania[los];
    pytania.splice(los,1);

    czyodp = false;
    szczebel[szczebelIndex].classList.add("pogrubienie");
    document.getElementById("apytanie").textContent = "Pytanie "+(a)+"/12";

    if(szczebelIndex == 4){
        kasa = "40 000 zł";
    }
    if(szczebelIndex == 9){
        kasa = "1000 zł";
    }
    gwarantowane.textContent = "Gwarantowane: "+kasa;

    nastepneOkno.style.display = "none";
    pytanie.textContent = p.pytanie;

    let i = 0;
    let literki = ["A","B","C","D"];
    odpowiedzi.forEach(e => {
        e.classList.remove("zla");
        e.classList.remove("poprawna");
        e.classList.remove("ukryj");
        e.innerHTML = "<span class='orango'>"+literki[i]+". </span>"+p.odpowiedzi[i];
        i++;
    });
};

start.addEventListener("click",()=>{
    mainmenu.style.display = "none";
    menu.style.display = "block";
    quiz.style.display = "block";
    document.querySelector("footer").style.display = "none";
    pokazPytanie();
})


odpowiedzi.forEach(e => {
    e.addEventListener("click",() => {
        if(czyodp == false){
            publicznoscOkno.style.display = "none";
            telefonOkno.style.display = "none";

            e.classList.add("czekaj");
            czyodp = true;
            setTimeout(() => {
            e.classList.remove("czekaj");
            let podana = e.id;
            if(podana == p.poprawna){
                e.classList.add("poprawna");
                if(a < 12){
                  nastepneOkno.style.display = "block";
                }else{
                    zatrzymajCzas();
                    koniecGry.style.display = "block";
                    wynik.innerHTML = "<h1>WYGRAŁEŚ</h1><h1>1 000 000 zł</h1>";
                }
                
            }else{
                zatrzymajCzas();
                e.classList.add("zla");
                odpowiedzi[p.poprawna].classList.add("poprawna");
                koniecGry.style.display = "block";
                wynik.innerHTML = "<h1>Przegrałeś!</h1><h2>Wygrana z progów gwarantowanych: "+kasa+"</h2>";
            }
            },2000);
        }
    })
});

nastepne.addEventListener("click",() => {
        szczebel[szczebelIndex].classList.remove("pogrubienie");
        szczebelIndex--;
        pokazPytanie();
})

let wroc = () => {
    location.reload();
}

fortyforty = document.getElementById("5050");
publicznosc = document.getElementById("publicznosc");
telefon = document.getElementById("telefon");

fortyforty.addEventListener("click",() =>{
    if(!fortyforty.classList.contains("kolonieaktywne")){
        niepoprawne = Array.from(odpowiedzi);

        niepoprawne.splice(p.poprawna,1);
        nplos = Math.floor(Math.random() * niepoprawne.length);
        niepoprawne[nplos].classList.add("ukryj");

        niepoprawne.splice(nplos,1);
        nplos = Math.floor(Math.random() * niepoprawne.length);
        niepoprawne[nplos].classList.add("ukryj");

        fortyforty.classList.remove("kolo");
        fortyforty.classList.add("kolonieaktywne");
    }
})

publicznosc.addEventListener("click",()=>{
  if(!publicznosc.classList.contains("kolonieaktywne")){
  publicznoscOkno.style.display = "block";
  let procenty = [];
  procenty.push(Math.floor(Math.random() * 51) + 50);
  procenty.push(Math.floor(Math.random() * (100 - procenty[0])));
  procenty.push(Math.floor(Math.random() * (100 - procenty[0] - procenty[1])));
  procenty.push(100-procenty[0]-procenty[1]-procenty[2]);

  paski = document.querySelectorAll(".pasek");

  paski[p.poprawna].style.width = procenty[0] + "%";
  numerki = [0,1,2,3];
  numerki.splice(p.poprawna,1);
  
  i = 0;
  numerki.forEach(e => {
    i++;
    console.log(e);
    paski[e].style.width = procenty[i] + "%";
  });
  publicznosc.classList.remove("kolo");
  publicznosc.classList.add("kolonieaktywne");
}
})

telefon.addEventListener("click", () => {
  if(!telefon.classList.contains("kolonieaktywne")){
    telefonOkno.style.display = "block";
    let literki = ["A","B","C","D"];
    document.getElementById("porada").innerHTML += literki[p.poprawna];
    telefon.classList.remove("kolo");
    telefon.classList.add("kolonieaktywne");
  }
})
