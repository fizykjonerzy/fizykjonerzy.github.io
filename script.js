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
    },
    {
        pytanie: "testowe pytanie",
        odpowiedzi: ["bajojajo", "tung tung tung", "uhhhhhhh", "🥀"],
        poprawna: 3
    },
    {
        pytanie: "testowe pytanie 2",
        odpowiedzi: ["sdfgsdfgsdfg", "rawr", "e", "piwko tesco"],
        poprawna: 2
    },
    {
        pytanie: "Jakiego koloru jest niebo?",
        odpowiedzi: ["Niebieskie", "Zielone", "Czerwone", "Fioletowe"],
        poprawna: 0
      },
      {
        pytanie: "Ile to 2 + 2?",
        odpowiedzi: ["3", "4", "5", "22"],
        poprawna: 1
      },
      {
          pytanie: "testowe pytanie",
          odpowiedzi: ["bajojajo", "tung tung tung", "uhhhhhhh", "🥀"],
          poprawna: 3
      },
      {
          pytanie: "testowe pytanie 2",
          odpowiedzi: ["sdfgsdfgsdfg", "rawr", "e", "piwko tesco"],
          poprawna: 2
      },
      {
        pytanie: "Jakiego koloru jest niebo?",
        odpowiedzi: ["Niebieskie", "Zielone", "Czerwone", "Fioletowe"],
        poprawna: 0
      },
      {
        pytanie: "Ile to 2 + 2?",
        odpowiedzi: ["3", "4", "5", "22"],
        poprawna: 1
      },
      {
          pytanie: "testowe pytanie",
          odpowiedzi: ["bajojajo", "tung tung tung", "uhhhhhhh", "🥀"],
          poprawna: 3
      },
      {
          pytanie: "testowe pytanie 2",
          odpowiedzi: ["sdfgsdfgsdfg", "rawr", "e", "piwko tesco"],
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

start.addEventListener("click",()=>{
    mainmenu.style.display = "none";
    menu.style.display = "block";
    quiz.style.display = "block";
    pokazPytanie();
})


odpowiedzi.forEach(e => {
    e.addEventListener("click",() => {
        if(czyodp == false){
            let podana = e.id;
            if(podana == p.poprawna){
                e.classList.add("poprawna");
            }else{
                e.classList.add("zla");
                odpowiedzi[p.poprawna].classList.add("poprawna");
            }
            czyodp = true;
            nastepne.style.display = "block";
        }
    })
});

nastepne.addEventListener("click",() => {
    if(a != 12){
        pokazPytanie();
    }else{
        nastepne.style.display = "none";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("wygrana").style.display = "flex";
    }
})
