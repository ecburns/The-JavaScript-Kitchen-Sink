let myName = "E.C.";
console.log(myName);

const U_STATES = "50";
console.log(U_STATES);

let sum = 5 + 4;
console.log(sum);

if (myName.charCodeAt(76)) {
    alert("Back of the line!");
} else {
    alert("Next!");
}

function sayHello(name) {
    alert('Hello ' + name + '!');
    }
sayHello ("E.C.");

function checkAge (name, age){
    if (age < 21) {
        alert ("Sorry, you aren't old enough to view this page!");
    }
}
checkAge ("Charles", 21);
checkAge ("Abby", 27);
checkAge ("James", 18);
checkAge ("John", 17);

let vegtables = ["Brussels", "Carrots", "Celery", "Spinach"];
console.log (vegtables);
/-----
for (let i = 0; i <checkAge.length; i++) {
    console.log(checkAge[i]);
}

