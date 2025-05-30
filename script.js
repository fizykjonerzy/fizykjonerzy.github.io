let los = 0;
let a = 0;
let byly = [];
let p = 0;

let czyodp = false;

let start = document.getElementById("start");
let mainmenu = document.getElementById("mainmenu");
let menu = document.getElementById("menu");
let quiz = document.getElementById("quiz");
let pytanie = document.getElementById("pytanietext");
let odpowiedzi = document.querySelectorAll(".odp");
let nastepne = document.getElementById("nastepne");
let progi = document.getElementById("progi");
let publicznoscOkno = document.getElementById("publicznoscOkno");
let telefonOkno = document.getElementById("telefonOkno");
let gwarantowane = document.getElementById("gwarantowane");

let szczebel = document.querySelectorAll('.szczebel');
let szczebelIndex = szczebel.length -1;

let pokazPytanie = () => {
    a++;
    los = Math.floor(Math.random() * pytania.length);
    p = pytania[los];
    pytania.splice(los,1);

    czyodp = false;
    szczebel[szczebelIndex].classList.add("pogrubienie");
    document.getElementById("apytanie").textContent = "Pytanie "+(a)+"/12";
    if(szczebelIndex == 4){
        gwarantowane.textContent = "Gwarantowane: 40 000 zł";
    }
    if(szczebelIndex == 9){
        gwarantowane.textContent = "Gwarantowane: 1000 zł";
    }
                
    nastepne.style.display = "none";
    pytanie.textContent = p.pytanie;

    let i = 0;
    let literki = ["A","B","C","D"];
    odpowiedzi.forEach(e => {
        e.classList.remove("zla");
        e.classList.remove("poprawna");
        e.classList.remove("ukryj");
        e.textContent = literki[i]+". "+p.odpowiedzi[i];
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
                  nastepne.style.display = "block";
                }else{
                  // document.getElementById("quiz").style.display = "none";
                  // document.getElementById("menu").style.display = "none";
                  document.getElementById("wygrana").style.display = "block";
                }
                
            }else{
                e.classList.add("zla");
                odpowiedzi[p.poprawna].classList.add("poprawna");
                document.getElementById("przegrana").style.display = "block";
                
                if(szczebel[szczebelIndex].innerHTML > 40000 && szczebel[szczebelPogrubienie].innerHTML > 1000){
                    progi.textContent = "Wygrana z progów gwarantowanych: 40 000 zł";
                }
                if(szczebel[szczebelIndex].innerHTML > 1000){
                    progi.textContent = "Wygrana z progów gwarantowanych: 1000 zł";
                }else{
                    progi.textContent = "Nie osiągnąłeś żadnego progu gwarantowanego!";
                }
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

