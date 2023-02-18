// function declaration

function validateINN(inn){
    var firstNumber = Number(inn[0])
    if(firstNumber === 0 || firstNumber === 1 || firstNumber === 2 && inn.length === 14){
        console.log('ok');
    }
    else{
        console.error('');
    }
} 

validateINN('103030003456')

// function expression

var getCoffee = function(){
    var drinkName = prompt('what do you wantto drink? hint: coffee')
    if(drinkName === 'coffee'){
        var variant = prompt('How do you want your coffee? black/with cream').toLocaleLowerCase
        switch(variant){
            case 'black':
                alert('one black coffee coming right up!')
                break
            case 'with cream':
                alert('coffee with cream is a nice choice')
                break
            default:
                alert('Wo dont have that coffee') 
        }
    }else{
        alert('Sorry, we server only coffee')
    }
}

// getCoffee

// самые лучшие уроки мы получаем, когда делаем ошибки
// ошибка прошлого - мудрость будущего.
// -- Дейл Карнеги

// функции с параметрами rest (es6+) и arguments (es5)

function getAllSum(){
    console.log(arguments);
    // let sum = 0
    // for(let i = 0; i < arguments.length; i++){
    //     sum += arguments[i]
    // }
    let sum = Array.from(arguments).reduce((a, b) => a += b)
    console.log(sum);
}

getAllSum(2, 3, 5)

function getAllSum2(...nums){
    console.log(nums);
    let sum = nums.reduce((a, b) => a += b)
    console.log(sum);
}
getAllSum2(4, 4)
 
// rest spread operators - оператор деструктуризации

const num1 = [2, 3, 4]
const num2 = [5, 6, 7]
const allNum = [...num1, ...num2] 
console.log(...allNum);  // 2 3 4 5 6 7
console.log(...num1);    // 2 3 4
console.log(num1);   // [2, 3, 4]

// default params - параметры по умолчанию

function pushJoin(array, separator = '?'){
    let result = ''
    for(let i = 0; i < array.length; i++){
        const element = array[i]
        result += element + (i === array.length-1? '' : separator)
    }
    return result
}

console.log(pushJoin([1, 2, 3, 4], '-'));  // 1-2-3-4


// анонимная функция
document.querySelector('button').addEventListener('click', function(){
    console.log('вы нажали на кнопку');
})