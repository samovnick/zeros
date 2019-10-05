module.exports = function zeros(expression) {
  //devide string into operands
  function twoFive(number, index) {
        
    let count2 = 0;
    let count5 = 0;
    switch (index) {
        case 0: 
            for (let i = 1; i <= number; i ++) {
                let tmp = i;
                while (tmp % 2 == 0) {
                    count2++;
                    tmp = Math.floor(tmp  / 2);
                }
                tmp = i;
                while (tmp % 5 == 0) {
                    count5++;
                    tmp = Math.floor(tmp / 5);
                }
            }
            break;
        case 1:
            for (let i = 1; i <= number; i +=2) {
                let tmp = i;
                while (tmp % 2 == 0) {
                    count2++;
                    tmp = Math.floor(tmp  / 2);
                }
                tmp = i;
                while (tmp % 5 == 0) {
                    count5++;
                    tmp = Math.floor(tmp / 5);
                }
            }
            break;
        default:
             for (let i = 2; i <= number; i +=2) {
                let tmp = i;
                while (tmp % 2 == 0) {
                    count2++;
                    tmp = Math.floor(tmp  / 2);
                }
                tmp = i;
                while (tmp % 5 == 0) {
                    count5++;
                    tmp = Math.floor(tmp / 5);
                }
            }
    }
    return [count2, count5];
}

 // check factorial
 let str = expression;
 let arr = str.split("*");
 let count2 = 0;
 let count5 = 0;

 arr.forEach(element => {
     let countFact = element.match(/!/g).length;
     let c2 = 0;
     let c5 = 0;
     let number = parseInt(element);
     if (countFact > 1) {
         if (number % 2 == 0) [c2, c5] = twoFive(number, 2);
         else  [c2, c5] = twoFive(number, 1);
     } else [c2, c5] = twoFive(number, 0);
     count2 += c2;
     count5 += c5;
 })

  // console.log(`count2 - ${count2}, count5 - ${count5}`);
  // console.log(`zero - ${Math.min(count2, count5)}`);
  return Math.min(count2, count5);
}
