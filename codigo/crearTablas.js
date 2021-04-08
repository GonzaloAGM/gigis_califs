const file_system = require('fs');
const arr = [
    {//1
    participantes: [6,7,8,11,12,14,15,20,22,24,27,29,31,33,35,38,42,45,48,49,51,93,54,59,61,62,65,66,70,71,79,81,82,86,88,91,92],
    grupo: "G014",
    niveles: ["N014", "N025", "N26"],
    ciclo: "C007",
    cantObj: 13,
    maxPunt: 5
    },
    {//2
    participantes: [86,46,54,50,31,71,34,95,51,48,23,26,22,45,7,63,14,29],
    grupo: "G008",
    niveles: ["N008", "N023"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 5
    },
    {//3
    participantes: [6,29,30,91,14,11,27],
    grupo: "G008",
    niveles: ["N017"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 4
    },
    {//4
    participantes: [10,18,24,33,45,46,51,56,61,65,75,78,83,85,96,101,102],
    grupo: "G018",
    niveles: ["N018"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 4
    },
    {//5
    participantes: [12,92,22,66,45,88,6,29,14,11,27],
    grupo: "G005",
    niveles: ["N005"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 4
    },
    {//6
    participantes: [2,5,25,40,43,44,55,56,67,78,89,90,98,94,77,76,96,60,13,57,99],
    grupo: "G007",
    niveles: ["N007"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 4
    },
    {//7
    participantes: [3,27,33,62,14,11,2],
    grupo: "G016",
    niveles: ["N016"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 4
    },
    {//8
    participantes: [48,85,16,81,53,32,60,64,83],
    grupo: "G006",
    niveles: ["N006"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 4
    },
    {//9
    participantes: [44,63,53,36,82,25,95,55,94,56,86,78,83,5,21,97,32,90,40,15],
    grupo: "G015",
    niveles: ["N015"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 4
    },
    {//10
    participantes: [25,63,78,90,5,39,43,51,56,82,21],
    grupo: "G001",
    niveles: ["N001","N002","N003","N004"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 4
    },
    {//11
    participantes: [46,86,2,49,54,30,50,71,79,101,24],
    grupo: "G002",
    niveles: ["N001","N002","N003","N004"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 4
    },
    {//12
    participantes: [33,18,8,37,72,78,51,81,47,49,26],
    grupo: "G003",
    niveles: ["N001","N002","N003","N004"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 4
    },
    {//13
    participantes: [28,91,14,45,53,33,75,6,59,26,10],
    grupo: "G004",
    niveles: ["N001","N002","N003","N004"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 4
    },
    {//14
    participantes: [91,62,63,14,29,20,38,40,49],
    grupo: "G019",
    niveles: ["N019"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 4
    },
    {//15
    participantes: [1,6,7,8,9,10,11,14,15,17,18,19,20,23,24,26,27,28,29,30],
    grupo: "G009",
    niveles: ["N009","N010","N020"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 4
    },
    {//16
    participantes: [31,33,35,36,37,41,42,45,46,47,48,49,50,53,54,58,59,61,62,63],
    grupo: "G010",
    niveles: ["N009","N010","N020"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 4
    },
    {//17
    participantes: [65,66,68,70,71,72,73,74,75,80,82,83,86,87,91,92,93,95,97],
    grupo: "G020",
    niveles: ["N009","N010","N020"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 4
    },
    {//18
    participantes: [14,15,18,17,24,31,36,39,80,45,46,50,54,61,71,72,74,82],
    grupo: "G013",
    niveles: ["N013","N023"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 4
    },
    {//19
    participantes: [1,6,7,8,10,11,14,15,20,23,27,28,29,33,41,45,47,48,51],
    grupo: "G011",
    niveles: ["N011","N012","N021","N022"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 5
    },
    {//20
    participantes: [53,59,62,63,65,66,68,70,73,74,75,80,81,87,91,93,95],
    grupo: "G012",
    niveles: ["N011","N012","N021","N022"],
    ciclo: "C007",
    cantObj: 5,
    maxPunt: 4
    }
];

const archivo = "./Participantes_Grupos_Objetivos.csv";

let numObj = 0;
let acumObj = 0;
for(let dato of arr){
    let k = 0;
    for(let participante of dato.participantes){
        for(numObj = acumObj; numObj < acumObj + dato.cantObj; numObj++){
            let anteObj = "";
            let text = "";
            let antePart = "";

            if (numObj < 10){
                anteObj = "O00"
            } else if(numObj < 100){
                anteObj = "O0"
            }else{
                anteObj = "O"
            }

            if(participante < 10){
                antePart = "correo00";
            }else if(participante < 100){
                antePart = "correo0";
            }else{
                antePart = "correo";
            }

            let numRand1 = Math.floor(Math.random() * dato.maxPunt * 10)/10;
            let numRand2 = menorRand(numRand1, dato.maxPunt);
            if(numRand1 > numRand2){
                let temp = numRand1;
                numRand1 = numRand2;
                numRand2 = temp;
            }

            let registro = antePart + participante + "," + dato.grupo + "," + dato.niveles[k] + "," + anteObj + (numObj+1) + "," + numRand1 + "," + numRand2 + "\n";
            file_system.writeFileSync(archivo, registro,{encoding: "utf8",flag: "a+"});
        }
        k++;
        if(k % dato.niveles.length === 0)
            k = 0;
    }
    acumObj = numObj;
}

function menorRand(numMayor, max){
    let numMenor = Math.floor(Math.random() * max * 10)/10;
    if(numMenor > numMayor)
        return menorRand(numMayor, max);
    else
        return numMenor;
}