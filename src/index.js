module.exports = function check(str, bracketsConfig) {
  // your solution
      let input = str.split('');
      let config = [];
      let answer = true;

        for (let i = 0; i < bracketsConfig.length; i++) {
          for (let j = 0; j < bracketsConfig[i].length; j++) {
            config.push(bracketsConfig[i][j]); // transform bracketsConfig into 1-demension array
          }
        }
        for (let i = 0; i < input.length; i++) {
          if (config.indexOf(input[i])%2 !== 0 && input[i -1] === config[config.indexOf(input[i - 1])]) { // searching close bracket. close bracket index in config is odd.
            //previous input arr element should be equal previous element in config arr
            input.splice(i - 1, 2);
            i = 0;
          } 
        }
        
        if (input.length !== 0) { // checking input array. if it is empty (open and close brackets should kill each other) return 'true', otherwise 'false'
          answer = false;
        }
        
      
      return answer;
    }
