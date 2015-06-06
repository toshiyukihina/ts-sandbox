// number
function sample(x:number, y:number):number {
  return x * y;
}

console.log(sample(10, 20));

// boolean
var res:boolean = true;
res = !res;
if (res) {
  console.log("true");
} else {
  console.log("false");
}

// string
var str1:string = "jack";
var str2:string = 'knife';
var str3:string = str1 + str2;
console.log(str3);

// void
function hello(name:string):void {
  console.log('Hello, ' + name + '!');
}
hello('Jack');

// enum
enum Sex { Male, Female }
var sex:Sex = Sex.Male;
if (sex == Sex.Male) {
  console.log('Male');
} else if (sex == Sex.Female) {
  console.log('Female');
}
