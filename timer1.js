//process.stdout.write('\x07');

let args = process.argv.slice(2);
let intArray = [];
if (args.length > 0) {
  for (elm of args) {
    if (!isNaN(parseInt(elm)) && parseInt(elm) >= 0) {
      intArray.push(parseInt(elm));
    }
  }

  args = intArray.sort(function (a, b) { return a - b });

  for (let alarmTime of args) {
    setTimeout(() => {      
      process.stdout.write(".");
    }, alarmTime * 1000);
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, args[args.length-1]*1001);
}

