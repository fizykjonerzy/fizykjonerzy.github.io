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
      },
      {
      pytanie: "Jakie zjawisko zachodzi przy pocieraniu dwóch ciał, np. linijki o włosy?",
      odpowiedzi: ["Indukcja elektromagnetyczna", "Przepływ prądu", "Elektrostatyka", "Przemiana chemiczna"],
      poprawna: 2
    },
    {
      pytanie: "Czym są przewodniki elektryczne?",
      odpowiedzi: ["Ciałami, które nie przewodzą prądu", "Ciałami, przez które przepływa prąd", "Ciałami bez ładunku", "Ciałami izolującymi elektron"], 
      poprawna: 1
    },
    {
      pytanie: "Jakie cząstki odpowiadają za przewodnictwo prądu w metalach?",
      odpowiedzi: ["Jony dodatnie", "Neutrony", "Swobodne elektrony", "Protony"],
      poprawna: 2
    },
    {
      pytanie: "Który z materiałów najlepiej przewodzi prąd elektryczny?",
      odpowiedzi: ["Guma", "Szkło", "Miedź", "Drewno"],
      poprawna: 2
    },
    {
      pytanie: "Jak zmieni się natężenie prądu w obwodzie szeregowym, jeśli dołożymy kolejny opornik?",
      odpowiedzi: ["Zwiększy się", "Zmniejszy się", "Nie zmieni się", "Zniknie całkowicie"],
      poprawna: 1
    },
    {
      pytanie: "Jaką funkcję pełni bezpiecznik w obwodzie elektrycznym?",
      odpowiedzi: ["Zwiększa napięcie", "Zamienia prąd na ciepło", "Chroni przed przeciążeniem", "Łączy przewody"],
      poprawna: 2
    },
    {
      pytanie: "Które połączenie odbiorników umożliwia ich niezależne działanie?",
      odpowiedzi: ["Szeregowe", "Równoległe", "Mieszane", "Napięciowe"],
      poprawna: 1
    },
    {
      pytanie: "Co oznacza, że ciało jest naładowane dodatnio?",
      odpowiedzi: ["Ma więcej neutronów", "Ma więcej elektronów", "Ma więcej protonów niż elektronów", "Ma więcej ciepła"],
      poprawna: 2
    },
    {
      pytanie: "Który przyrząd mierzy opór elektryczny?",
      odpowiedzi: ["Amperomierz", "Rezystor", "Omomierz", "Woltomierz"],
      poprawna: 2
    },
    {
      pytanie: "Jakie jest oznaczenie napięcia elektrycznego w fizyce?",
      odpowiedzi: ["I", "R", "P", "U"],
      poprawna: 3
    },
    {
    pytanie: "Co się stanie, gdy przerwiesz obwód elektryczny?",
    odpowiedzi: ["Zwiększy się napięcie", "Prąd przestanie płynąć", "Prąd zacznie płynąć szybciej", "Opór zniknie"],
    poprawna: 1
  },
  {
    pytanie: "Jaki symbol oznacza opór elektryczny?",
    odpowiedzi: ["R", "U", "I", "P"],
    poprawna: 0
  },
  {
    pytanie: "Która z jednostek jest odpowiednia dla pracy elektrycznej?",
    odpowiedzi: ["Wolt", "Dżul", "Amper", "Om"],
    poprawna: 1
  },
  {
    pytanie: "Który z poniższych materiałów jest izolatorem?",
    odpowiedzi: ["Aluminium", "Srebro", "Guma", "Miedź"],
    poprawna: 2
  },
  {
    pytanie: "W jakim połączeniu odbiorników napięcie jest takie samo dla każdego z nich?",
    odpowiedzi: ["Szeregowe", "Równoległe", "Indukcyjne", "Mieszane"],
    poprawna: 1
  },
  {
    pytanie: "Jaką jednostkę ma moc elektryczna w układzie SI?",
    odpowiedzi: ["Dżul", "Wat", "Wolt", "Amper"],
    poprawna: 1
  },
  {
    pytanie: "Jakie zjawisko powoduje powstanie iskry podczas dotknięcia klamki po pocieraniu dywanu?",
    odpowiedzi: ["Przepływ ciepła", "Elektryzowanie przez indukcję", "Wzrost oporu", "Rozładowanie ładunku elektrostatycznego"],
    poprawna: 3
  },
  {
    pytanie: "Jakie napięcie ma typowa bateria AA (paluszek)?",
    odpowiedzi: ["9 V", "1,5 V", "3 V", "4,5 V"],
    poprawna: 1
  },
  {
    pytanie: "Które połączenie zapewnia mniejsze zużycie prądu, ale większy opór całkowity?",
    odpowiedzi: ["Szeregowe", "Równoległe", "Mieszane", "Krzyżowe"],
    poprawna: 0
  },
  {
    pytanie: "Która wielkość opisuje szybkość przepływu ładunku?",
    odpowiedzi: ["Napięcie", "Opór", "Natężenie prądu", "Moc"],
    poprawna: 2
  },
  {
    pytanie: "Która jednostka jest jednostką ładunku elektrycznego?",
    odpowiedzi: ["Kulomb", "Wolt", "Amper", "Dżul"],
    poprawna: 0
  },
  {
    pytanie: "Jakie połączenie żarówek powoduje, że po przepaleniu jednej pozostałe przestają świecić?",
    odpowiedzi: ["Równoległe", "Szeregowe", "Mieszane", "Transformatorowe"],
    poprawna: 1
  },
  {
    pytanie: "Które urządzenie służy do magazynowania ładunku elektrycznego?",
    odpowiedzi: ["Rezystor", "Kondensator", "Cewka", "Woltomierz"],
    poprawna: 1
  },
  {
    pytanie: "Jakie zjawisko opisuje związek pomiędzy pracą a napięciem i ładunkiem?",
    odpowiedzi: ["Prawo Ohma", "Definicja mocy", "Praca prądu elektrycznego", "Prawo Coulomba"],
    poprawna: 2
  },
  {
    pytanie: "W jakim materiale elektrony są swobodne i mogą się poruszać?",
    odpowiedzi: ["W izolatorze", "W przewodniku", "W próżni", "W powietrzu"],
    poprawna: 1
  },
  {
    pytanie: "Co to jest prąd stały?",
    odpowiedzi: ["Prąd, który zmienia kierunek", "Prąd o zmiennym natężeniu", "Prąd o stałym kierunku przepływu", "Prąd przemienny"],
    poprawna: 2
  },
  {
    pytanie: "Które zjawisko wykorzystywane jest w akumulatorach?",
    odpowiedzi: ["Spalanie", "Reakcje chemiczne", "Elektryzowanie", "Fale elektromagnetyczne"],
    poprawna: 1
  },
  {
    pytanie: "Ile wynosi napięcie sieci elektrycznej w gniazdkach domowych w Polsce?",
    odpowiedzi: ["110 V", "230 V", "12 V", "400 V"],
    poprawna: 1
  },
  {
    pytanie: "Co się stanie z oporem, jeśli długość przewodnika się zwiększy?",
    odpowiedzi: ["Zmniejszy się", "Zwiększy się", "Nie zmieni się", "Zależy od napięcia"],
    poprawna: 1
  },
  {
    pytanie: "Jak obliczyć moc prądu elektrycznego?",
    odpowiedzi: ["P = U / I", "P = I × U", "P = R / I", "P = U × R"],
    poprawna: 1
  },
   {
    pytanie: "Jakie są jednostki mocy elektrycznej?",
    odpowiedzi: ["Dżule", "Waty", "Omy", "Kulomby"],
    poprawna: 1
  },
  {
    pytanie: "Który przyrząd chroni instalację przed skutkami zwarcia?",
    odpowiedzi: ["Wyłącznik różnicowoprądowy", "Bezpiecznik", "Woltomierz", "Rezystor"],
    poprawna: 1
  },
  {
    pytanie: "Co oznacza symbol I w fizyce?",
    odpowiedzi: ["Napięcie", "Opór", "Natężenie prądu", "Moc"],
    poprawna: 2
  },
  {
    pytanie: "Jakie połączenie odbiorników jest najczęściej stosowane w instalacjach domowych?",
    odpowiedzi: ["Szeregowe", "Równoległe", "Indukcyjne", "Krzyżowe"],
    poprawna: 1
  },
  {
    pytanie: "Jakie urządzenie może zamieniać energię elektryczną na energię mechaniczną?",
    odpowiedzi: ["Żarówka", "Grzałka", "Silnik", "Akumulator"],
    poprawna: 2
  },
  {
    pytanie: "Co to jest napięcie elektryczne?",
    odpowiedzi: ["Ruch elektronów", "Siła między elektronami", "Różnica potencjałów", "Energia cieplna"],
    poprawna: 2
  },
  {
    pytanie: "Jakie urządzenie służy do zwiększania lub zmniejszania napięcia prądu przemiennego?",
    odpowiedzi: ["Transformator", "Woltomierz", "Akumulator", "Dioda"],
    poprawna: 0
  },
  {
    pytanie: "Które z wymienionych ciał najlepiej izoluje prąd elektryczny?",
    odpowiedzi: ["Miedź", "Szkło", "Aluminium", "Złoto"],
    poprawna: 1
  },
  {
    pytanie: "Co powoduje większy opór: dłuższy czy krótszy przewodnik (z tego samego materiału)?",
    odpowiedzi: ["Dłuższy", "Krótszy", "Nie ma wpływu", "Zależy od natężenia prądu"],
    poprawna: 0
  },
  {
    pytanie: "Jak nazywa się zjawisko przekształcania energii mechanicznej w elektryczną?",
    odpowiedzi: ["Elektryzowanie", "Indukcja elektromagnetyczna", "Polaryzacja", "Opór czynny"],
    poprawna: 1
  },
  {
    pytanie: "Która z wielkości fizycznych nie zależy od czasu?",
    odpowiedzi: ["Moc", "Praca", "Natężenie", "Ładunek"],
    poprawna: 2
  },
  {
    pytanie: "Jakie zjawisko wykorzystywane jest w mikrofonach i głośnikach?",
    odpowiedzi: ["Indukcja", "Rezonans", "Prąd stały", "Pole magnetyczne"],
    poprawna: 0
  },
  {
    pytanie: "Ile wynosi ładunek jednego elektronu?",
    odpowiedzi: ["0 C", "1 C", "1,6 × 10⁻¹⁹ C", "9,8 N"],
    poprawna: 2
  },
  {
    pytanie: "Które urządzenie zmienia prąd stały na przemienny?",
    odpowiedzi: ["Rezystor", "Falownik", "Woltomierz", "Kondensator"],
    poprawna: 1
  },
  {
    pytanie: "Jak nazywa się opór stawiany przez urządzenia w obwodzie?",
    odpowiedzi: ["Rezystancja", "Moc", "Natężenie", "Ładunek"],
    poprawna: 0
  },
  {
    pytanie: "Która wartość opisuje łączną ilość energii dostarczonej przez prąd w czasie?",
    odpowiedzi: ["Moc", "Natężenie", "Praca", "Napięcie"],
    poprawna: 2
  },
  {
    pytanie: "W jakim kierunku poruszają się elektrony w przewodniku?",
    odpowiedzi: ["Od plusa do minusa", "Od minusa do plusa", "W losowych kierunkach", "Od środka przewodnika na zewnątrz"],
    poprawna: 1
  },
  {
    pytanie: "Jak nazywa się proces usuwania ładunku z ciała?",
    odpowiedzi: ["Polaryzacja", "Uziemienie", "Izolacja", "Indukcja"],
    poprawna: 1
  },
  {
    pytanie: "Które urządzenie może chronić człowieka przed porażeniem prądem?",
    odpowiedzi: ["Bezpiecznik", "Transformator", "Wyłącznik różnicowoprądowy", "Kondensator"],
    poprawna: 2
  },
  {
    pytanie: "Co dzieje się z napięciem, gdy odbiorniki są połączone szeregowo?",
    odpowiedzi: ["Dzieli się między odbiorniki", "Pozostaje bez zmian", "Znika", "Zwiększa się"],
    poprawna: 0
  },
  {
    pytanie: "Czym są jonami?",
    odpowiedzi: ["Neutralnymi atomami", "Naładowanymi cząstkami", "Elektronami", "Cząstkami światła"],
    poprawna: 1
  },
  {
    pytanie: "Który z materiałów jest półprzewodnikiem?",
    odpowiedzi: ["Miedź", "Krzem", "Guma", "Złoto"],
    poprawna: 1
  },
  {
    pytanie: "Co się dzieje, gdy opór rośnie, a napięcie jest stałe?",
    odpowiedzi: ["Prąd rośnie", "Prąd maleje", "Prąd się nie zmienia", "Napięcie spada"],
    poprawna: 1
  },
  {
    pytanie: "Który z tych elementów magazynuje energię w polu elektrycznym?",
    odpowiedzi: ["Kondensator", "Rezystor", "Cewka", "Dioda"],
    poprawna: 0
  },
  {
    pytanie: "Które połączenie elementów obwodu elektrycznego pozwala na niezależne włączanie i wyłączanie urządzeń?",
    odpowiedzi: ["Szeregowe", "Równoległe", "Indukcyjne", "Bezpośrednie"],
    poprawna: 1
  },
  {
    pytanie: "W jakiej jednostce mierzymy rezystancję?",
    odpowiedzi: ["Wolty", "Ampery", "Omy", "Kulomby"],
    poprawna: 2
  },
  {
    pytanie: "Jaki jest kierunek konwencjonalny przepływu prądu?",
    odpowiedzi: ["Od plusa do minusa", "Od minusa do plusa", "Dowolny", "Od środka przewodnika"],
    poprawna: 0
  },
  {
    pytanie: "Jaką rolę pełni obwód zamknięty w przepływie prądu?",
    odpowiedzi: ["Zatrzymuje prąd", "Umożliwia jego przepływ", "Zwiększa napięcie", "Zmniejsza opór"],
    poprawna: 1
  },
  {
    pytanie: "Które urządzenie służy do zapisywania przebiegów napięcia i prądu?",
    odpowiedzi: ["Multimetr", "Oscyloskop", "Woltomierz", "Amperomierz"],
    poprawna: 1
  },
  {
    pytanie: "Który element zwiększa rezystancję w obwodzie?",
    odpowiedzi: ["Woltomierz", "Rezystor", "Amperomierz", "Transformator"],
    poprawna: 1
  }
  ];