// Déclaration variables
let operator;
let numberA;
let numberB;
let arrayNumber =[];
let result;


//Déclaration des fonctions
function chooseOperator(){
operator = Number(prompt("Bonjour, choisissez un opérateur :\n\n 1 - Addition \n 2 - Soustraction \n 3 - Multiplication \n 4 - Division "));

}

function chooseNumber(){
    
    arrayNumber[0]= Number(prompt("Choisissez un premier nombre"));
    arrayNumber[1] = Number(prompt("Choisissez un deuxième nombre"));
    if(arrayNumber[1]==0 && operator == 4){
        alert('Pas de division par 0');
        logiciel();
    }

    return arrayNumber;

}

function calculate(numberA, numberB){
    switch(operator){
        case 1:
            result = numberA + numberB;
            break;
        case 2:
            result = numberA - numberB;
            break;
        case 3:
            result = numberA * numberB;
            break;
        case 4:
            result = numberA / numberB;
            
            break;
        default:
            alert('Opérateur invalide');
    }
    
    
    return result;

}

// Lancement de l'application
function logiciel(){

do{
    chooseOperator();
}
while(operator !==1 && operator !== 2 && operator !==3 && operator !==4);

chooseNumber();


alert(calculate(arrayNumber[0],arrayNumber[1]));
};



logiciel();

