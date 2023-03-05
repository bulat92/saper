export const increaseCellsStateInFieldMapFunc = (fieldMap) => {

  const checkAndIncreaseFunc = (row , cell) => {
    if(row >= 0 && row < fieldMap.length){
      if(cell >= 0 && cell < fieldMap[row].length){
        if(fieldMap[row][cell].cellState >= 0){
          fieldMap[row][cell].cellState++
        }
      }
    }
  }
   
  for (let rowIn = 0; rowIn < fieldMap.length; rowIn++){ 
      for(let cellIn = 0; cellIn < fieldMap[rowIn].length; cellIn++){
        if(fieldMap[rowIn][cellIn].cellState < 0){ 
          
          checkAndIncreaseFunc(rowIn + 1, cellIn + 1);
          checkAndIncreaseFunc(rowIn + 1, cellIn);
          checkAndIncreaseFunc(rowIn + 1, cellIn - 1);

          checkAndIncreaseFunc(rowIn, cellIn - 1);
          checkAndIncreaseFunc(rowIn, cellIn + 1);

          checkAndIncreaseFunc(rowIn - 1, cellIn + 1);
          checkAndIncreaseFunc(rowIn - 1, cellIn);
          checkAndIncreaseFunc(rowIn - 1, cellIn - 1);
        }
      }
  }
 
  return fieldMap;
};

