
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
    PreferenciasMusicales: ["Pop","Reggae","Clasica"]
}

const people = [Joe, Ann, Neil]

for (let index = 0; index < people.length; index++) {
    const p = people[index];//Joe , Ann, Neil
    for (let j = 0; j < p.PreferenciasMusicales.length; j++) {
        const gustoMusical = p.PreferenciasMusicales[j];
        if(gustoMusical == "Reggae"){
            console.log(p.Name + " le gusta el Reggae")
        }
    }
}

//foreach

items.forEach(unaFuncion);
items.forEach(obj => console.log(obj));