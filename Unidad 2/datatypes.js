//Tipos de datos son Dinamicos
//string - number - boolean
let nombre = "Joe";
console.log(typeof(nombre));

nombre = 10;
console.log(typeof(nombre));

let num_1 = 1;
let num_2 = "2";


let estado = true;
console.log(typeof(estado));

let PI = 3.1416
console.log(typeof(PI));




//array
let autos = ["Volvo", "Kia", "Mercedes"];
console.log(typeof(autos));//object

const valor1 = autos[0];//GET obtener
valor == "valor1"
autos[0] = "Ferrari" //SET dar valor

const edades = [25,30,15,18,20,35,29]
let contadorMayores = 0;
for (let index = 0; index < edades.length; index++) {
        if (edades[index] >= 18){
            contadorMayores += 1
        }
}
console.log("Cantidad de Alumnos Mayores: " + contadorMayores)















//object
let persona = {
    Name: "Joe",
    LastName: "Amstrong",
    Age: 20,
    City: "New York",
    PreferenciasMusicales: ["Rock","Metal","Cumbia"]
}


let Joe = {
    Name: "Joe",
    LastName: "Amstrong",
    Age: 20,
    City: "New York",
    PreferenciasMusicales: ["Rock","Metal","Cumbia"]
}

let Ann = {
    Name: "Ann",
    LastName: "Brige",
    Age: 15,
    City: "California",
    PreferenciasMusicales: ["Reggae","Electronica","Pop"]
}

let Neil = {
    Name: "Neil",
    LastName: "Mando",
    Age: 18,
    City: "Texas",
    PreferenciasMusicales: ["Pop","Reggaetton","Clasica"]
}

const people = [Joe, Ann, Neil]
let mayores = 0;
for (let index = 0; index < people.length; index++) {
    const p = people[index];//Joe , Ann, Neil
    if(p.Age >= 18){
        mayores += 1;
    }
}
console.log("Mayores de Edad: "+ mayores);

for (let index = 0; index < people.length; index++) {
    const p = people[index];//Joe , Ann, Neil
    for (let j = 0; j < p.PreferenciasMusicales.length; j++) {
        const gustoMusical = p.PreferenciasMusicales[index];
        if(gustoMusical == "Reggae"){
            console.log(p.Name + " le gusta el Reggae")
        }
    }
}









for (let prop in persona){
    console.log(prop)
}

//Determinar cuantas personas son mayores de edad:

//Determinar las personas que les gusta el Reggae
//(PreferenciasMusicales)

let persona2 = {
    "Name": "Joe",
    "LastName": "Amstrong",
    "Age": 20,
    "City": "New York"
}
console.log(persona);
console.log(persona.City);