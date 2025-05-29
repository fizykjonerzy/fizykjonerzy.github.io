//pytania
const pytania = [
    {
        pytanie: "Co jest jednostką natężenia prądu w układzie SI?",
        odpowiedzi: ["Wolt", "Amper", "Om", "Kulomb"],
        poprawna: 1
      },
      {
        pytanie: "Jak nazywa się prawo opisujące zależność między napięciem, natężeniem prądu i oporem?",
        odpowiedzi: ["Prawo Pascala", "Prawo Ohma", "Prawo Archimedesa", "Prawo Coulomba"],
        poprawna: 1
      },
      {
        pytanie: "Które urządzenie służy do pomiaru napięcia elektrycznego?",
        odpowiedzi: ["Amperomierz", "Watomierz", "Woltomierz", "Ohmomierz"],
        poprawna: 2
      },
      {
        pytanie: "Jakie są nośniki prądu w metalach?",
        odpowiedzi: ["Protony", "Elektrony", "Neutrony", "Jony dodatnie"],
        poprawna: 1
      },
      {
        pytanie: "Które z poniższych połączeń odbiorników powoduje, że prąd elektryczny rozdziela się na kilka gałęzi?",
        odpowiedzi: ["Szeregowe", "Równoległe", "Mieszane", "Indukcyjne"],
        poprawna: 1
      },
      {
        pytanie: "Jakie jest napięcie między dwoma punktami obwodu, jeśli przeniesienie ładunku 1 kulomba wymaga pracy 1 dżula?",
        odpowiedzi: ["1 wolt", "1 amper", "1 om", "1 wat"],
        poprawna: 0
      },
      {
        pytanie: "Które urządzenie może pełnić funkcję zarówno amperomierza, jak i woltomierza?",
        odpowiedzi: ["Multimetr", "Transformator", "Oscyloskop", "Rezystor"],
        poprawna: 0
      },
      {
        pytanie: "Co jest niezbędne do powstania prądu elektrycznego w obwodzie?",
        odpowiedzi: ["Opór", "Napięcie", "Moc", "Ładunek"],
        poprawna: 1
      },
      {
        pytanie: "Jak nazywa się uporządkowany ruch cząstek obdarzonych ładunkiem elektrycznym?",
        odpowiedzi: ["Prąd elektryczny", "Napięcie elektryczne", "Opór elektryczny", "Moc elektryczna"],
        poprawna: 0
      },
      {
        pytanie: "Która z poniższych wielkości jest miarą zdolności przewodnika do przeciwstawiania się przepływowi prądu?",
        odpowiedzi: ["Napięcie", "Natężenie", "Opór", "Moc"],
        poprawna: 2
      }
  ];

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


//od szczebelka

let szczebel = document.querySelectorAll('.szczebel');
let szczebelPogrubienie = szczebel.length -1;
let stawkiGwarantowane = [szczebel[5].innerHTML, szczebel[10].innerHTML];
let szczebelIndex = szczebel.length -1;

//od pytania
let pokazPytanie = () => {
    los = Math.floor(Math.random() * pytania.length);
    p = pytania[los];
    pytania.splice(los,1);

    czyodp = false;
    a++;

    document.getElementById("apytanie").textContent = "Pytanie "+a+"/12";

    nastepne.style.display = "none";
    pytanie.textContent = p.pytanie;

    let i = 0;

    odpowiedzi.forEach(e => {
        
        e.classList.remove("zla");
        e.classList.remove("poprawna");
        e.textContent = p.odpowiedzi[i];
        i++;
    });
};

//start quizu
start.addEventListener("click",()=>{

    mainmenu.style.display = "none";
    menu.style.display = "block";
    quiz.style.display = "block";

    document.getElementById("mainmenu").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.querySelector("footer").style.display = "none";
    szczebel[szczebelPogrubienie].style.fontWeight = 'bold';

    pokazPytanie();
})



odpowiedzi.forEach(e => {
    e.addEventListener("click",() => {
        if(czyodp == false){
            let podana = e.id;
            if(podana == p.poprawna){
                e.classList.add("poprawna");
                czyodp = true;
                nastepne.style.display = "block";
            }else{
                e.classList.add("zla");
                odpowiedzi[p.poprawna].classList.add("poprawna");

            }

        }
    })
});

//następne pytanie


nastepne.addEventListener("click",() => {
    
    a++;
    szczebelIndex = szczebelPogrubienie - a;
    szczebel[szczebelIndex].style.fontWeight = 'bold';

    if(a != 12){
        pokazPytanie();
        
        
    }else{
        nastepne.style.display = "none";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("wygrana").style.display = "flex";
    }
})
