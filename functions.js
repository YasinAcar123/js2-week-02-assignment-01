const findTheNumberOfOddNumbers = (pArr) => {
    let newArr= pArr.filter((item)=> item %2===1)
    let result=newArr.length
    return result
  
};

const getIndexOfFalseItem = (pArr) => {
  let result=pArr.indexOf(false)
  return result
};

const filterNumbers = (pArr) => {
  let result=pArr.filter((item)=> typeof item==="number")
  return result
};

const generateEmailAddress = () => {
/*let email="";

for (let index = 0; index < generateEmailAddress.length; index++) {
   counter++
   generateEmailAddress[index]=generateEmailAddress[index].trim().toLowerCase().slice(0,counter)
   
   email= email + generateEmailAddress[index]
   if  {
      emails.push(email.concat("@gmail.com"))
      email=""
   
   }

 }
console.log(emails)*/
};

export {
  findTheNumberOfOddNumbers,
  getIndexOfFalseItem,
  filterNumbers,
  generateEmailAddress,
};
