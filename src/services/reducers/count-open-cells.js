export const countOpenCells = (fieldMap) => {
  let count = 0;

  for (let rowIn = 0; rowIn < fieldMap.length; rowIn++) {
    for (let cellIn = 0; cellIn < fieldMap[rowIn].length; cellIn++) {
      if (!fieldMap[rowIn][cellIn].cellOpen) {
        count++;
      }
    }

   
  } 
  console.log(count);
  return count;
};
