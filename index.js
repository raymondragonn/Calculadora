const bottoms = document.querySelectorAll('.bottom')
let arr2 = [];
let arr1 = [];

const valueOfNumbers = {
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

function newNumber(){
    bottoms.forEach((bottom) => {
        bottom.addEventListener('click', () => {
            const value = valueOfNumbers[bottom.id];
            if (value !== undefined){
                arr1.push(value);
                const number = arr1.join('');
                console.log(number);
            }
            else {
                switch(bottom.id) {
                    case 'bottom1': 
                        console.log('%');
                        break;
                    case 'bottom2':
                        console.log('CE');
                        break;
                    case 'bottom3':
                        console.log('C');
                        break;
                    case 'bottom4':
                        console.log('<-');
                        break;
                    case 'bottom5':
                        console.log('1/x');
                        break;
                    case 'bottom6':
                        console.log('x^2');
                        break;
                    case 'bottom7':
                        console.log('raiz');
                        break;
                    case 'bottom8':
                        console.log('div');
                        break;
                    case 'bottom12':
                        console.log('X');
                        break;
                    case 'bottom16':
                        console.log('-');
                        break;
                    case 'bottom20':
                        console.log('+');
                        break;
                    case 'bottom21':
                        console.log('+/-');
                        break;
                    case 'bottom23':
                        console.log('.');
                        break;
                    case 'bottom24':
                        console.log('=');
                        break;
                    default:
                        break;
                }
            }
        });
    });
}


function funcSum(arr1, arr2) {
    return arr1 + arr2;
}

newNumber(bottoms);