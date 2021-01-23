//Печать треугольника
var i = 0,
  j = 0;

var max = 15;
var space = "",
  star = "";

while (i < max) {
  space = "";
  star = "";
  for (j = 0; j < max - i; j++) space += " ";
  for (j = 0; j < 2 * i + 1; j++) star += "#";
  console.log(space + star);
  i++;
}


//Работа с массивом
var arr = []

function fillArray(max,min) {
    for(let i=0; i<10;i++){
        arr.push( Math.floor(Math.random() * (max - min + 1)) + min)
    }
    return arr
}

function replaceFromArrae() {
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i] = 0
        }
    }
    return arr
}

function addToArray() {
    for(let i=0;i<=arr.length;i++){
        if(i%2 == 0 && arr[i] == 0 ){
        arr[i+1] = -1
        }
    }
    return arr
}

console.log(fillArray(100,-100))
console.log(replaceFromArrae())
console.log(addToArray())

























