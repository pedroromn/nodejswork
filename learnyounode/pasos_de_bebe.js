//console.log(process.argv)

/*var sum = 0;
process.argv.forEach((val, index) => {
    if (index >= 2) {
        sum += Number(val);
    }
});

console.log(`${sum}`); */


//'use strict'

var result = 0

for (var i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}

console.log(result)
