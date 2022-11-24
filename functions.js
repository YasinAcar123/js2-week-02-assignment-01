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

const generateEmailAddress = (pArr) => {
  let result=pArr.map((item)=> {return item.toLowerCase()+"@gmail.com"})
};

export {
  findTheNumberOfOddNumbers,
  getIndexOfFalseItem,
  filterNumbers,
  generateEmailAddress,
};
