const bottoms = document.querySelectorAll('.bottom')
let arr1 = [];
let arr2 = [];
let number = 0;

const valueOfNumbers = {
    'bottom22': 0,    
    'bottom17': 1,
    'bottom18': 2,
    'bottom19': 3,
    'bottom13': 4,
    'bottom14': 5,
    'bottom15': 6,
    'bottom9': 7,
    'bottom10': 8,
    'bottom11': 9
};

const operations = {
    'bottom1': '%',
    'bottom2': 'CE',
    'bottom3': 'C',
    'bottom4': '←',
    'bottom5': '1/x',
    'bottom6': 'x²',
    'bottom7': '√',
    'bottom8': '÷',
    'bottom12': '×',
    'bottom16': '-',
    'bottom20': '+',
    'bottom21': '±',
    'bottom24': '='
};

function valueInArray(idBottom, arr) {
    const value = valueOfNumbers[idBottom];
    arr.push(value);
    number = arr.join('');
    console.log(number);
}

function needOneNum(idBottom) {
    switch(idBottom) {
        case 'bottom1': 
            console.log('%');
            break;
        case 'bottom2':
            console.log('CE');
            break;
        case 'bottom3':
            console.log('C');
            arr1 = [];
            arr2 = [];
            break;
        case 'bottom4':
            console.log('←');
            break;
        case 'bottom5': // array 1
            console.log('1/X');
            break;
        case 'bottom6': // array 1;
            console.log('x²');
            /*number = Math.pow(number, 2);*/
            break;
        case 'bottom7': // array 1
            console.log('√');
            break;
            case 'bottom21': // array 1
            console.log('±');
            /*arr1.unshift('-');*/
            break;
        case 'bottom23':
            console.log('.');
            break;
        case 'bottom24':
            console.log('=');
            /*console.log(number);
            arr1 = Array.from(String(number), Number);*/
            break;
        default:
            break;
    }
}

function needTwoNum(idBottom) {
    switch(idBottom) {
        case 'bottom8': // array 2
            console.log('÷');
            break;
        case 'bottom12': // array 2
            console.log('×');
            break;
        case 'bottom16': // array 2
            console.log('-');
            break;
        case 'bottom20': // array 2
            console.log('+');
            break;
        default: 
            break;
    }
}

function newNumber(arr1, arr2){
    let currentArr = arr1;
    let flag  = false;

    bottoms.forEach((bottom) => {
        bottom.addEventListener('click', () => {
            if(flag){
                currentArr = (currentArr === arr1) ? arr2 : arr1;
                flag = false;
            }

            if(valueOfNumbers[bottom.id]){
                valueInArray(bottom.id, currentArr);
            }

            if(operations[bottom.id]){
                needOneNum(bottom.id);
                flag = true;
            }
        });
    });
}

newNumber(arr1, arr2);