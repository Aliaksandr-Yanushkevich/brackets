module.exports = function check(str, bracketsConfig) {
  // your solution
      let input = str.split('');
      let config = []

        for (let i = 0; i < bracketsConfig.length; i++) {
          for (let j = 0; j < bracketsConfig[i].length; j++) {
            config.push(bracketsConfig[i][j]); // transform bracketsConfig into 1-demension array
          }
        }
        let summ = 0;
        let bracketSet = [];
        for (let i = 0; i < input.length; i++) {
          let configIndex = config.indexOf(input[i]);
          if (summ >= 0 && configIndex % 2 == 0) {
            summ ++;
            bracketSet.push(input[i]);
            
          } else if (summ >= 0 && configIndex % 2 == 1) {
              if (input[i-1] == bracketSet.pop()) {
                summ --;
              } else {
                input = false;
              }
          }
        }
        if (summ !== 0) {
          input = false;
        }
      return input
    }
    // console.log(check(']]]{{{}}}', [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]))
