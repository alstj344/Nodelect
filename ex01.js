console.log("Hello World");

function first(){
    second();
    console.log("first");
}

function second(){
    third();
    console.log("second");
}

function third(){
    console.log("third");
}

function run(){
    console.log("3초");

}
setTimeout(run,3000);

first();

let num1 = 1;
let num2 = 2;
let result = 3;
//1+2=3

let str = `${num1} 더하기 ${num2}는 ${result}`;
console.log(str);

const sayNode = () => {
    console.log('Node');
}
let es = 'ES';

const newObj = {
    Func: sayNode,
    sayJS(){
        console.log('JS');
    },
    [es+6]:'Fantastic'

}
newObj[es+6] = 'Fantastic';
newObj.Func();
newObj.sayJS();
console.log(newObj.ES6);

var relationship1 = {
    name:'zero',
    friends:['nero','hero','xero'],
    add : ['한누리관','송백관'],
    logFriends: function (){
        var that = this;
        this.add.forEach(addlist => {
            this.friends.forEach(friend)=>{
                console.log(this.name,friend,addlist)
            });
        }};
    },
};
relationship1.logFriends();