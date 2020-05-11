function minilang(string) {
  let stack = [];
  let register = 0;

  string.split(' ').forEach(value => {
    if (Number(value)) {
      register = Number(value);
    }
    if (value === 'PRINT') {
      console.log(register);
    }
    if (value === 'PUSH') {
      stack.push(register);
    }
    if (value === 'ADD') {
      register += stack.pop();
    }
    if (value === 'SUB') {
      register -= stack.pop();
    }
    if (value === 'MULT') {
      register *= stack.pop();
    }
    if (value === 'DIV') {
      register = Math.floor(register / stack.pop());
    }
    if (value === 'MOD') {
      register = Math.floor(register % stack.pop());
    }
    if (value === 'POP') {
      register = stack.pop();
    }
  });

  return register;
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)