package palestra.demopalestra;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


import palestra.demopalestra.model.MusclesGroups;
import palestra.demopalestra.model.Workout;
import palestra.demopalestra.model.WorkoutCategory;
import palestra.demopalestra.model.WorkoutLogDetails;
import palestra.demopalestra.model.WorkoutLogs;

import palestra.demopalestra.services.MusclesGroupsService;
import palestra.demopalestra.services.WorkoutCategoryService;
import palestra.demopalestra.services.WorkoutLogDetailsService;
import palestra.demopalestra.services.WorkoutLogsService;
import palestra.demopalestra.services.WorkoutService;

@Component
public class MyApplicationRunner implements CommandLineRunner {
    @Autowired
    WorkoutCategoryService workoutCategoryService;
    @Autowired
    MusclesGroupsService musclesGroupsService;
    @Autowired
    WorkoutService workoutService;
  
    @Autowired
    WorkoutLogsService workoutLogsService;
    @Autowired
    WorkoutLogDetailsService workoutLogDetailsService;

    @Override
    public void run(String... args) throws Exception {

        WorkoutCategory wC1 = new WorkoutCategory("cardio");
        WorkoutCategory wC2 = new WorkoutCategory("pesistica");
        WorkoutCategory wC3 = new WorkoutCategory("stretching");
        WorkoutCategory wC4 = new WorkoutCategory("corpo libero");
        workoutCategoryService.createWorkoutCategory(wC1);
        workoutCategoryService.createWorkoutCategory(wC2);
        workoutCategoryService.createWorkoutCategory(wC3);
        workoutCategoryService.createWorkoutCategory(wC4);

        MusclesGroups mgGambe = new MusclesGroups("Gambe");
        MusclesGroups mgPettorali = new MusclesGroups("Pettorali");
        MusclesGroups mgSpalle = new MusclesGroups("Spalle");
        MusclesGroups mgDorso = new MusclesGroups(" Dorso");
        MusclesGroups mgTricipiti = new MusclesGroups("Tricipiti");
        MusclesGroups mgAddome = new MusclesGroups("Addome");
        MusclesGroups mgBicipiti = new MusclesGroups("Bicipiti");

        musclesGroupsService.createMusclesGroups(mgGambe);
        musclesGroupsService.createMusclesGroups(mgPettorali);
        musclesGroupsService.createMusclesGroups(mgSpalle);
        musclesGroupsService.createMusclesGroups(mgDorso);
        musclesGroupsService.createMusclesGroups(mgTricipiti);
        musclesGroupsService.createMusclesGroups(mgAddome);
        musclesGroupsService.createMusclesGroups(mgBicipiti);

        Workout w1 = new Workout("squat", wC2, mgGambe, 5);
        workoutService.createWorkout(w1);
        Workout w7 = new Workout("leg press", wC2, mgGambe, 5);
        workoutService.createWorkout(w7);
        Workout w11 = new Workout("leg extension", wC2, mgGambe, 3);
        workoutService.createWorkout(w11);
        Workout w2 = new Workout("panca piana", wC2, mgPettorali, 3);
        workoutService.createWorkout(w2);
        Workout w3 = new Workout("panca stretta", wC2, mgTricipiti, 4);
        workoutService.createWorkout(w3);
        Workout w4 = new Workout("spinte con manubri", wC2, mgSpalle, 2);
        workoutService.createWorkout(w4);
        Workout w5 = new Workout("Curl con manubri in piedi", wC2, mgBicipiti, 3);
        workoutService.createWorkout(w5);
        Workout w6 = new Workout("Lat Machine", wC2, mgDorso, 5);
        workoutService.createWorkout(w6);
        Workout w8 = new Workout("plank", wC4, mgAddome, 4);
        workoutService.createWorkout(w8);
        Workout w9 = new Workout("addominali", wC4, mgAddome, 3);
        workoutService.createWorkout(w9);
        Workout w10 = new Workout("addominali Side Plank", wC4, mgAddome, 4);
        workoutService.createWorkout(w10);
        Workout w12 = new Workout("burpees", wC1, mgPettorali, 2);
        workoutService.createWorkout(w12);
        Workout w13 = new Workout("skip alto", wC1, mgGambe, 3);
        workoutService.createWorkout(w13);
        Workout w14 = new Workout("salti sul posto", wC1, mgGambe, 4);
        workoutService.createWorkout(w14);
        Workout w15 = new Workout("rowing", wC1, mgDorso, 2);
        workoutService.createWorkout(w15);
        Workout w16 = new Workout("aperture panca alta", wC2, mgDorso, 4);
        workoutService.createWorkout(w16);
        Workout w17 = new Workout("chest press", wC2, mgDorso, 5);
        workoutService.createWorkout(w17);
        Workout w18 = new Workout("estensioni seduto", wC2, mgTricipiti, 4);
        workoutService.createWorkout(w18);
        Workout w19 = new Workout("french press", wC2, mgTricipiti, 4);
        workoutService.createWorkout(w19);
        Workout w20 = new Workout("spinte busto", wC2, mgTricipiti, 5);
        workoutService.createWorkout(w20);
        Workout w21 = new Workout("alzate frontali ai cavi", wC2, mgSpalle, 3);
        workoutService.createWorkout(w21);
        Workout w22 = new Workout("alzate laterali busto 90°", wC2, mgSpalle, 3);
        workoutService.createWorkout(w22);
        Workout w23 = new Workout("curl ai cavi alti", wC2, mgBicipiti, 5);
        workoutService.createWorkout(w23);
        Workout w24 = new Workout("curl alternato seduto", wC2, mgBicipiti, 3);
        workoutService.createWorkout(w24);
        Workout w25 = new Workout("lat machine dietro", wC2, mgDorso, 3);
        workoutService.createWorkout(w25);
        Workout w26 = new Workout("lat machine inverso", wC2, mgDorso, 4);
        workoutService.createWorkout(w26);
        Workout w27 = new Workout("abduzione fianchi", wC3, mgGambe, 2);
        workoutService.createWorkout(w27);
        Workout w28 = new Workout("adduzione braccio avanti", wC3, mgBicipiti, 2);
        workoutService.createWorkout(w28);
        Workout w29 = new Workout("allungamento collo laterale", wC3, mgSpalle, 2);
        workoutService.createWorkout(w29);
        Workout w30 = new Workout("apertura gambe", wC3, mgGambe, 2);
        workoutService.createWorkout(w30);
        Workout w31 = new Workout("sumo squat", wC4, mgGambe, 3);
        workoutService.createWorkout(w31);
        Workout w32 = new Workout("superman a terra", wC4, mgAddome, 3);
        workoutService.createWorkout(w32);
        Workout w33 = new Workout("lombari a terra", wC4, mgGambe, 3);
        workoutService.createWorkout(w33);
        Workout w34 = new Workout("panca inclinata", wC1, mgPettorali, 4);
        workoutService.createWorkout(w34);
        Workout w35 = new Workout("affondi frontali", wC1, mgGambe, 4);
        workoutService.createWorkout(w35);
        Workout w36 = new Workout("trazioni alla sbarra", wC4, mgDorso, 5);
        workoutService.createWorkout(w36);
        Workout w37 = new Workout("corsa", wC1, mgGambe, 3);
        workoutService.createWorkout(w37);
        // da implementare con i workout-stretching e cardio

        // creo lista workout dove mi serve la panca piana
      
        // lista workout per bilanciere
        
        // lista wo per manubri
      
        // lista wo macchinari
       



        WorkoutLogs scheda1 = new WorkoutLogs("Aumentare la massa muscolare",
                "Scopri le schede di allenamento che IronGym ti mette a disposizione per aumentare la tua massa muscolare, porta il tuo fisico al top!");
        workoutLogsService.createWorkoutLogs(scheda1);
        WorkoutLogs scheda2 = new WorkoutLogs("Dimagrire e ritrovare la tua forma",
                "Scopri decine di programmi di allenamento per dimagrire, buttare via i chili di troppo e ritrovare la tua forma con IronGym.");
        workoutLogsService.createWorkoutLogs(scheda2);
        WorkoutLogs scheda3 = new WorkoutLogs("Tonificare la tua muscolatura",
                "Consulta le schede di allenamento create per te da IronGym, per raggiungere il tuo obiettivo di tonificazione.");
        workoutLogsService.createWorkoutLogs(scheda3);
        // esercizi scheda 1
        WorkoutLogDetails wL1 = new WorkoutLogDetails(scheda1, w1, 5, 5, 50, 5, 0,
                "La posizione è eretta, con i piedi distanziati in maniera variabile: da poco più della larghezza del bacino a quella delle spalle, con le punte direzionate leggermente verso l'esterno.");
        workoutLogDetailsService.createWorkoutLogDetails(wL1);

        WorkoutLogDetails wL2 = new WorkoutLogDetails(scheda1, w2, 5, 5, 34, 2.5, 0,
                "Sdraiato su una panca con i piedi a terra, afferri il bilanciere con braccia dritte e bloccate, lo porti fino al petto e spingi fino a tornare alla posizione di partenza, mantenendo il sedere ben incollato alla panca.");
        workoutLogDetailsService.createWorkoutLogDetails(wL2);

        WorkoutLogDetails wL3 = new WorkoutLogDetails(scheda1, w34, 4, 8, 20, 1.5, 0,
                "Sdraiati su una panca inclinata e impugna il bilanciere con una larghezza delle mani leggermente superiore alla larghezza delle spalle. Abbassare il bilanciere sino a sfiorare la parte alta del pettorale e quindi risalire sino ad estendere i gomiti.");
        workoutLogDetailsService.createWorkoutLogDetails(wL3);

        WorkoutLogDetails wL4 = new WorkoutLogDetails(scheda1, w9, 3, 20, 0, 2, 0,
                "Sdraiati schiena al pavimento (supini), gambe piegate con i talloni più possibile vicino ai glutei, i piedi larghezza bacino, mani dietro la nuca e gomiti larghi, sollevare le spalle dal pavimento mantenendo la parte bassa della schiena (lombare) sul pavimento.");
        workoutLogDetailsService.createWorkoutLogDetails(wL4);

        WorkoutLogDetails wL5 = new WorkoutLogDetails(scheda1, w7, 3, 20, 55, 3.5, 0,
                "Piegare lentamente le gambe fino al massimo punto consentito, con i quadricipiti che sfiorano il busto. Spingere la pedana fino alla posizione iniziale e ridiscendere nuovamente.");
        workoutLogDetailsService.createWorkoutLogDetails(wL5);

        WorkoutLogDetails wL6 = new WorkoutLogDetails(scheda1, w11, 3, 8, 50, 3.5, 0,
                "Seduti alla macchina, la seduta va regolata da avere le ginocchia libere: se corta dietro il ginocchio si ha una compressione; il rullo va regolato in modo da averlo sul collo del piede, con i piedi a martello. Distendere le gambe in avanti, controllando il movimento e ritorno.");
        workoutLogDetailsService.createWorkoutLogDetails(wL6);

        WorkoutLogDetails wL7 = new WorkoutLogDetails(scheda1, w36, 4, 8, 0, 2, 0,
                "Corpo disteso con le gambe in linea con il busto,eseguire la trazione piegando i gomiti, portando le spalle a toccare la sbarra. Lento e controllato il ritorno.Eseguire tutto il movimento distendendo le braccia per avere il massimo allungamento e contrazione del gran dorsale.");
        workoutLogDetailsService.createWorkoutLogDetails(wL7);

        WorkoutLogDetails wL8 = new WorkoutLogDetails(scheda1, w25, 5, 10, 15, 2.5, 0,
                "Flettere prima un braccio, portando il manubrio alla spalla, ritorno; flettere l’altro braccio.");
        workoutLogDetailsService.createWorkoutLogDetails(wL8);

        WorkoutLogDetails wL9 = new WorkoutLogDetails(scheda1, w26, 3, 8, 40, 2.5, 0,
                "Seduti sotto l'attrezzo con le ginocchia fissate sotto i cuscini, afferrare la sbarra con il dorso delle mani verso l'attrezzo (presa in supinazione) ed un apertura delle braccia come le spalle ed il busto leggermente in dietro.");
        workoutLogDetailsService.createWorkoutLogDetails(wL9);

        WorkoutLogDetails wL10 = new WorkoutLogDetails(scheda1, w23, 4, 8, 5, 3, 0,
                "Flettere gli avambracci verso il capo fino al massimo punti di contrazione del bicipite. Dopo un attimo di contrazione muscolare ritornare lentamente alla posizione di partenza.");
        workoutLogDetailsService.createWorkoutLogDetails(wL10);

        WorkoutLogDetails wL11 = new WorkoutLogDetails(scheda1, w24, 5, 5, 10, 2.5, 0,
                "Senza muovere i gomiti in avanti flettere prima un braccio portando il manubrio alla spalla, aspettare il ritorno prima di flettere l’altro.");
        workoutLogDetailsService.createWorkoutLogDetails(wL11);
        // esercizi scheda 2
        WorkoutLogDetails wL12 = new WorkoutLogDetails(scheda2, w8, 3, 0, 0, 2, 1,
                "Sdraiati pancia sul pavimento (proni), braccia piegate con avambraccio sul pavimento e gomito in linea con la spalla, sollevare il corpo facendo perno sulla punta dei piedi con i talloni che spingono verso il pavimento.");
        workoutLogDetailsService.createWorkoutLogDetails(wL12);

        WorkoutLogDetails wL13 = new WorkoutLogDetails(scheda2, w9, 3, 20, 0, 2, 0,
                "Sdraiati schiena al pavimento (supini), gambe piegate con i talloni più possibile vicino ai glutei, i piedi larghezza bacino, mani dietro la nuca e gomiti larghi, sollevare le spalle dal pavimento mantenendo la parte bassa della schiena (lombare) sul pavimento.");
        workoutLogDetailsService.createWorkoutLogDetails(wL13);

        WorkoutLogDetails wL14 = new WorkoutLogDetails(scheda2, w12, 4, 12, 0, 1, 60,
                "Mantenendo il corpo in asse compiere un piegamento delle braccia, nella fase di distensione e ritorno delle braccia portare le ginocchia alle spalle con le piante dei piedi per terra, alzare il busto verso l’alto e compiere un salto portando le braccia sopra la testa. Nella fase di ritorno portare le mani al pavimento e i piedi dietro distendendo le gambe pronti a compiere un altro piegamento sulle braccia ed un’altra raccolta gambe al busto e jump.");
        workoutLogDetailsService.createWorkoutLogDetails(wL14);

        WorkoutLogDetails wL15 = new WorkoutLogDetails(scheda2, w13, 3, 15, 0, 2, 60,
                "Correre sul posto, portando le ginocchia fino a superare l’altezza delle anche e staccando i piedi più velocemente possibile dal suolo.");
        workoutLogDetailsService.createWorkoutLogDetails(wL15);

        WorkoutLogDetails wL16 = new WorkoutLogDetails(scheda2, w1, 5, 5, 25, 2.5, 0,
                "La posizione è eretta, con i piedi distanziati in maniera variabile: da poco più della larghezza del bacino a quella delle spalle, con le punte direzionate leggermente verso l'esterno.");
        workoutLogDetailsService.createWorkoutLogDetails(wL16);

        WorkoutLogDetails wL17 = new WorkoutLogDetails(scheda2, w11, 3, 8, 30, 3, 0,
                "Seduti alla macchina, la seduta va regolata da avere le ginocchia libere: se corta dietro il ginocchio si ha una compressione; il rullo va regolato in modo da averlo sul collo del piede, con i piedi a martello. Distendere le gambe in avanti, controllando il movimento e ritorno.");
        workoutLogDetailsService.createWorkoutLogDetails(wL17);

        WorkoutLogDetails wL18 = new WorkoutLogDetails(scheda2, w14, 5, 20, 0, 2.5, 60,
                "Piegare velocemente le gambe prima di compiere un salto verso l’alto e atterrare riprendendo subito a caricare le gambe per il salto successivo.");
        workoutLogDetailsService.createWorkoutLogDetails(wL18);

        WorkoutLogDetails wL19 = new WorkoutLogDetails(scheda2, w35, 3, 15, 5, 2.5, 30,
                "Compiere un passo in avanti poco più lungo del passo normale, piagare entrambe le gambe a creare un angolo di 90° gamba-coscia, sia con la gamba anteriore sia con quella posteriore. La gamba davanti spinge verso l’alto-dietro ritornando piedi paralleli. Andata: in avanti appoggia prima il tallone poi la pianta del piede; ritorno: si solleva prima la punta del piede poi in tallone.");
        workoutLogDetailsService.createWorkoutLogDetails(wL19);

        WorkoutLogDetails wL20 = new WorkoutLogDetails(scheda2, w37, 0, 0, 0, 0, 1800,
                "Impostare velocità e pendenza a seconda dell'intensità dell'attività che si vuole raggiungere.");
        workoutLogDetailsService.createWorkoutLogDetails(wL20);
        // esercizi scheda 3

        WorkoutLogDetails wL21 = new WorkoutLogDetails(scheda3, w37, 0, 0, 0, 0, 1800,
                "Impostare velocità e pendenza a seconda dell'intensità dell'attività che si vuole raggiungere.");
        workoutLogDetailsService.createWorkoutLogDetails(wL21);

        WorkoutLogDetails wL22 = new WorkoutLogDetails(scheda3, w2, 5, 5, 34, 2.5, 0,
                "Sdraiato su una panca con i piedi a terra, afferri il bilanciere con braccia dritte e bloccate, lo porti fino al petto e spingi fino a tornare alla posizione di partenza, mantenendo il sedere ben incollato alla panca.");
        workoutLogDetailsService.createWorkoutLogDetails(wL22);

        WorkoutLogDetails wL23 = new WorkoutLogDetails(scheda3, w36, 5, 5, 0, 2, 0,
                "Corpo disteso con le gambe in linea con il busto,eseguire la trazione piegando i gomiti, portando le spalle a toccare la sbarra. Lento e controllato il ritorno.Eseguire tutto il movimento distendendo le braccia per avere il massimo allungamento e contrazione del gran dorsale.");
        workoutLogDetailsService.createWorkoutLogDetails(wL23);

        WorkoutLogDetails wL24 = new WorkoutLogDetails(scheda3, w35, 3, 15, 5, 2.5, 30,
                "Compiere un passo in avanti poco più lungo del passo normale, piagare entrambe le gambe a creare un angolo di 90° gamba-coscia, sia con la gamba anteriore sia con quella posteriore. La gamba davanti spinge verso l’alto-dietro ritornando piedi paralleli. Andata: in avanti appoggia prima il tallone poi la pianta del piede; ritorno: si solleva prima la punta del piede poi in tallone.");
        workoutLogDetailsService.createWorkoutLogDetails(wL24);

        WorkoutLogDetails wL25 = new WorkoutLogDetails(scheda3, w37, 0, 0, 0, 0, 1200,
                "Impostare velocità e pendenza a seconda dell'intensità dell'attività che si vuole raggiungere.");
        workoutLogDetailsService.createWorkoutLogDetails(wL25);

        WorkoutLogDetails wL26 = new WorkoutLogDetails(scheda3, w12, 4, 12, 0, 1, 30,
                "Mantenendo il corpo in asse compiere un piegamento delle braccia, nella fase di distensione e ritorno delle braccia portare le ginocchia alle spalle con le piante dei piedi per terra, alzare il busto verso l’alto e compiere un salto portando le braccia sopra la testa. Nella fase di ritorno portare le mani al pavimento e i piedi dietro distendendo le gambe pronti a compiere un altro piegamento sulle braccia ed un’altra raccolta gambe al busto e jump.");
        workoutLogDetailsService.createWorkoutLogDetails(wL26);

        WorkoutLogDetails wL27 = new WorkoutLogDetails(scheda3, w13, 3, 15, 0, 2, 30,
                "Correre sul posto, portando le ginocchia fino a superare l’altezza delle anche e staccando i piedi più velocemente possibile dal suolo.");
        workoutLogDetailsService.createWorkoutLogDetails(wL27);

        WorkoutLogDetails wL28 = new WorkoutLogDetails(scheda3, w22, 5, 5, 15, 2.5, 0,
                "Sollevare le braccia verso l’esterno fino al punto in cui i manubri raggiungeranno il livello delle spalle. Dopo un attimo di contrazione muscolare ritornare lentamente alla posizione di partenza.");
        workoutLogDetailsService.createWorkoutLogDetails(wL28);

        WorkoutLogDetails wL29 = new WorkoutLogDetails(scheda3, w21, 3, 8, 10, 3, 30,
                "Sollevare i manubri fino ad arrivare all’altezza delle spalle e quindi con le braccia parallele al pavimento. Dopo un attimo di contrazione muscolare ritornare lentamente alla posizione di partenza con le braccia abbassate.");
        workoutLogDetailsService.createWorkoutLogDetails(wL29);

        WorkoutLogDetails wL30 = new WorkoutLogDetails(scheda3, w29, 0, 0, 0, 0, 60,
                "Ruotando la testa come per guardare la spalla verso cui avete flesso il capo, il lavoro di allungamento si focalizza maggiormente sulla regione posteriore del collo. Sollevando, inoltre, la spalla del lato allungato diminuirà il lavoro sul trapezio a vantaggio della muscolatura della schiena.");
        workoutLogDetailsService.createWorkoutLogDetails(wL30);

        WorkoutLogDetails wL31 = new WorkoutLogDetails(scheda3, w30, 0, 0, 0, 0, 60,
                "Seduto per terra, si tendono entrambe le gambe a formare un angolo di 180°, si porta poi il busto in avanti facendo attenzione a rimanere sempre ben saldi a terra.");
        workoutLogDetailsService.createWorkoutLogDetails(wL31);

        WorkoutLogDetails wL32 = new WorkoutLogDetails(scheda3, w27, 0, 0, 0, 0, 60,
                "Seduto per terra, si piegano lateralmente le gambe a 90°, con il busto dritto si fa pressione sulle gambe con le braccia in modo da distenderle il più possibile.");
        workoutLogDetailsService.createWorkoutLogDetails(wL32);

    }

}
