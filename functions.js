const findTheNumberOfOddNumbers = () => {
  const odds = findTheNumberOfOddNumbers.filter((num) => num % 2 === 1);
  let result= odds.length
  return result
  console.log(result)
};

const getIndexOfFalseItem = () => {
  var results = [];
    var idx = getIndexOfFalseItem.indexOf(false);
    while (idx != -1) {
        results.push(idx);
        idx = getIndexOfFalseItem.indexOf(false, idx + 1);
    }
    return results;
};

const filterNumbers = () => {
  let fnumbers=filterNumbers.filter(pNum)
  return fnumbers[0]
  console.log(fnumbers[0])
};

const generateEmailAddress = () => {
let email="";

for (let index = 0; index < generateEmailAddress.length; index++) {
   counter++
   generateEmailAddress[index]=generateEmailAddress[index].trim().toLowerCase().slice(0,counter)
   
   email= email + generateEmailAddress[index]
   if  {
      emails.push(email.concat("@gmail.com"))
      email=""
   
   }

 }
console.log(emails)
};

export {
  findTheNumberOfOddNumbers,
  getIndexOfFalseItem,
  filterNumbers,
  generateEmailAddress,
};
