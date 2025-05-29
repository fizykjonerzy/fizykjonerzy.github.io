const pytania = [
    {
      pytanie: "Jakiego koloru jest niebo?",
      odpowiedzi: ["Niebieskie", "Zielone", "Czerwone", "Fioletowe"],
      poprawna: 0
    },
    {
      pytanie: "Ile to 2 + 2?",
      odpowiedzi: ["3", "4", "5", "22"],
      poprawna: 1
    }
  ];

let start = document.getElementById("start");
let a = 0;
let czyodp = false;
let pytanie = document.getElementById("pytanietext");
let odpowiedzi = document.querySelectorAll(".odp");
let nastepne = document.getElementById("nastepne");

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

start.addEventListener("click",()=>{
    document.getElementById("mainmenu").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    pokazPytanie();
})


odpowiedzi.forEach(e => {
    e.addEventListener("click",() => {
        if(czyodp == false){
            let podana = e.id;
            if(podana == pytania[a].poprawna){
                e.classList.add("poprawna");
            }else{
                e.classList.add("zla");
                odpowiedzi[pytania[a].poprawna].classList.add("poprawna");
            }
            czyodp = true;
            nastepne.style.display = "block";
        }
    })
});

nastepne.addEventListener("click",() => {
    a++;
    if(a != 2){
        pokazPytanie();
    }else{
        nastepne.style.display = "none";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("wygrana").style.display = "block";
    }
    console.log(a);
})
