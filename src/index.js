module.exports = function check(str, bracketsConfig) {
  let input = str.split('');
  let answer;
  let configCloseBracket;
  let configOpenBracket;

      for (let i = 0; i < input.length; i++) {
       bracketsConfig.forEach(element => {
        if (input[i] === element[1]) { //searching for close bracket in config
          // console.log('i: ' + i); 
          configCloseBracket = element[1];
          // console.log('configCloseBracket: ' + configCloseBracket + ' input[i]: ' + input[i]);
          configOpenBracket = element[0];
          // console.log('configOpenBracket: ' + configOpenBracket + ' input[i - 1] : ' + input[i - 1]);
        }
      });
      if (input[i] ==  configCloseBracket && input[i - 1] == configOpenBracket) {
        // console.log('input arr before splice: ' + input);
        input.splice(i-1, 2);
        // console.log('input arr after splice: ' + input);
        // console.log('input.length arr after splice: ' + input.length);
        i = 0;
      }
      }
      if (input.length !== 0) {
        answer = false;
      } else {
        answer = true;
      }
      // console.log('input: ' + input);
      // console.log('answer: ' + answer);
      return answer;
    }   

