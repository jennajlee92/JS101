function logInBox(phrase) {
  let horizontalRule = `+${"-".repeat(phrase.length +2)}+`;
  let emptyLine = `|${" ".repeat(phrase.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${phrase} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');