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

let start = document.getElementById("start");
let a = 0;
let czyodp = false;
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
    nastepne.style.display = "none";
    czyodp = false;
    pytanie.textContent = pytania[a].pytanie;
    let i = 0;

    odpowiedzi.forEach(e => {
        
        e.classList.remove("zla");
        e.classList.remove("poprawna");
        e.textContent = pytania[a].odpowiedzi[i];
        i++;
    });
};

//start quizu
start.addEventListener("click",()=>{
    document.getElementById("mainmenu").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    szczebel[szczebelPogrubienie].style.fontWeight = 'bold';
    pokazPytanie();
})



odpowiedzi.forEach(e => {
    e.addEventListener("click",() => {
        if(czyodp == false){
            let podana = e.id;
            if(podana == pytania[a].poprawna){
                e.classList.add("poprawna");
                czyodp = true;
                nastepne.style.display = "block";
            }else{
                e.classList.add("zla");
                
                odpowiedzi[pytania[a].poprawna].classList.add("poprawna");
                
                if(szczebel[szczebelIndex].innerHTML > 40000 && szczebel[szczebelPogrubienie].innerHTML > 1000){
                    alert("Wygrałeś 40 000 zł");
                }

                if(szczebel[szczebelIndex].innerHTML > 1000){
                    alert("Wygrałeś 1000 zł");
                }else{
                    alert("Wygrałeś 0zł :((");
                }
                



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
        document.getElementById("wygrana").style.display = "block";
    }
    console.log(a);
})