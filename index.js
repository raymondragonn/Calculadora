const bottoms = document.querySelectorAll('.bottom')
let arr1 = [];
let arr2 = [];
let number1 = 0;
let number2 = 0;
let currentArr = arr1;
let isSecondNumber = false;

const valueOfNumbers = {
    'bottom17': '1',
    'bottom18': '2',
    'bottom19': '3',
    'bottom13': '4',
    'bottom14': '5',
    'bottom15': '6',
    'bottom9': '7',
    'bottom10': '8',
    'bottom11': '9',
    'bottom22': '0', 
};

const control = {
    'bottom1': '%',
    'bottom2': 'CE',
    'bottom3': 'C',
    'bottom4': '←',
    'bottom24': '='
}

const opOneNumber = {
    'bottom5': '1/x',
    'bottom6': 'x²',
    'bottom7': '√',
    'bottom21': '±',
    'bottom23': '.',
};

const opTwoNumbers = {
    'bottom8': '÷',
    'bottom12': '×',
    'bottom16': '-',
    'bottom20': '+',
}

function updateScreen(result = 0) {
    document.getElementById('screen').textContent = result;
}

function resetCalc() {
    arr1 = [];
    arr2 = [];
    number1 = 0;
    number2 = 0;
    currentArr = arr1;
    isSecondNumber = false;
    document.getElementById('screen').textContent = 0;
}

function valueInArray(idBottom) {
    const value = valueOfNumbers[idBottom];
    console.log(value)

    if(!isSecondNumber) {
        arr1.push(value);
        number1 = parseInt(arr1.join(''));
        updateScreen(number1);
    }
    else{
        arr2.push(value);
        number2 = parseInt(arr2.join(''));
        updateScreen(number2);
    }
}

function controlBottoms(idBottom){
    switch(idBottom) {
        case 'bottom1': 
            console.log('%');
            break;
        case 'bottom2':
            console.log('CE');
            if (isSecondNumber) {
                arr2 = [];
                number2 = 0;
                document.getElementById('screen').textContent = 0;
            } else {
                arr1 = [];
                number1 = 0;
                document.getElementById('screen').textContent = 0;
            }
            break;
        case 'bottom3':
            console.log('C');
            resetCalc();
            break; 
        case 'bottom4':
            console.log('←');
            if (isSecondNumber) {
                arr2.pop();
                number2 = (arr2.length > 0) ? parseInt(arr2.join('')) : 0;
                document.getElementById('screen').textContent = number2;
            } else {
                arr1.pop();
                number1 = (arr1.length > 0) ? parseInt(arr1.join('')) : 0;
                document.getElementById('screen').textContent = number1;
            }
            break;
        case 'bottom24':
            console.log('=');
            break;
        default: 
            break;
    }
}

function needOneNum(idBottom) {
    switch(idBottom) {
        case 'bottom5':
            console.log('1/X');
            number1 = 1 / number1;
            updateScreen(number1);
            break;
        case 'bottom6':
            console.log('x²');
            number1 = Math.pow(number1, 2);
            updateScreen(number1);
            break;
        case 'bottom7':
            console.log('√');
            number1 = Math.sqrt(number1);
            updateScreen(number1);
            break;
            case 'bottom21':
            console.log('±');
            arr1.unshift('-');
            number1 = parseInt(arr1.join(''));
            updateScreen(number1);
            break;
        case 'bottom23':
            console.log('.');
            arr1.push('.');
            console.log(arr1);
            number1 = parseFloat(arr1.join(''));
            updateScreen(number1);
            break;
        default:
            break;
    }
}

function needTwoNum(idBottom) {
    switch(idBottom) {
        case 'bottom8':
            console.log('÷');
            number1 = number1 / number2;
            break;
        case 'bottom12':
            console.log('×');
            number1 = number1 * number2;
            break;
        case 'bottom16':
            console.log('-');
            number1 = number1 - number2;
            break;
        case 'bottom20':
            console.log('+');
            number1 = number1 + number2;
            break;
        default: 
            break;
    }
}

function newNumber(){
    function handleClick(event) {
        const buttonId = event.target.id;
        console.log(event.target.id);
        if(valueOfNumbers[buttonId]){
            valueInArray(buttonId);
        }

        if(opOneNumber[buttonId]){
            needOneNum(buttonId);
        }

        if(opTwoNumbers[buttonId]){
            needTwoNum(buttonId);
            isSecondNumber = true;
        }

        if(control[buttonId]) {
            controlBottoms(buttonId);
        }
    }

    bottoms.forEach(bottom => {
        bottom.removeEventListener('click', handleClick);
       
        bottom.addEventListener('click', handleClick);
    });
}

newNumber();