const sentence = "hello there from lighthouse labs\n";
let sleep = 50;
for (const char of sentence) {
  setTimeout(() => {process.stdout.write(char)}, sleep);
  sleep += 50;
}
