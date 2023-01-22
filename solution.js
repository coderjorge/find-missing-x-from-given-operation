let x;
let res = 0;
let result = '';

function MathChallenge(str) {
  const exp = str.split(' ');
  
  let first_operand = exp[0];
  let operator = exp[1];
  let second_operand = exp[2];
  let resultant = exp[exp.length - 1];

  if (resultant.indexOf('x') !== -1) {
    x = resultant;
    first_operand = parseInt(first_operand);
    second_operand = parseInt(second_operand);

    switch (operator) {
      case '+': {
        res = first_operand + second_operand;
        break;
      }
      case '-': {
        res = first_operand - second_operand;
        break;
      }
      case '*': {
        res = first_operand * second_operand;
        break;
      }
      default: {
        res = Math.floor(first_operand / second_operand);
        break;
      }
    }
  } else {
    resultant = parseInt(resultant);
    if (first_operand.indexOf('x') !== -1) {
      x = first_operand;
      second_operand = parseInt(second_operand);
      
      switch (operator) {
        case '+': {
          res = resultant - second_operand;
          break;
        }
        case '-': {
          res = resultant + second_operand;
          break;
        }
        case '*': {
          res = Math.floor(resultant / second_operand);
          break;
        }
        default: {
          res = resultant * second_operand;
          break;
        }
      }
    } else {
      let x = second_operand;
      first_operand = parseInt(first_operand);

      switch (operator) {
        case '+': {
          res = resultant - first_operand;
          break;
        }
        case '-': {
          res = first_operand - resultant;
          break;
        }
        case '*': {
          res = Math.floor(resultant / first_operand);
          break;
        }
        default: {
          res = Math.floor(first_operand / resultant);
          break;
        }
      }
    }
  }

  res = res.toString();
  let idx = 0;
  for (let i of x) {
    if (i === 'x') {
      result = res[idx];
      break;
    } else {
      idx++;
    }
  }
  // code goes here  
  return result; 
}
   
// keep this function call here 
console.log(MathChallenge(readline()));
