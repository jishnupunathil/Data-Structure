let names = "jishnu";

function reverse(name) {
  let stack = [];
  for (i = 0; i < name.length; i++) {
    stack.push(name[i]);
  }
  console.log(stack);

  let abc = "";
  while (stack.length > 0) {
    abc += stack.pop();
  }

  return abc;
}

console.log(reverse(names));

