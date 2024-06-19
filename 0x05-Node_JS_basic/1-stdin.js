process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const name = data.trim(); // Trim to remove any trailing newline or spaces

  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
  }

  process.exit(); // Exit the program after printing the name
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
