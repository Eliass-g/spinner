const spinner2 = function(array, start, interval, end) {
  for (let i = 0; start <= end; i++, start += interval) {
    setTimeout(() => {
    process.stdout.write(`\r${array[i]}   `);
    }, start);
    if (i === array.length) {
      i = 0;
    }
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, end + interval);
}

spinner2(['|', '/', '-', '\\'], 100, 200, 1700);