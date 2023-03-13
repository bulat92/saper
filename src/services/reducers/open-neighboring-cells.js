export const openNeighboringCellsFunc = (
  fieldMap,
  id, 
  arrayOfNeighboringCellID = []
) => {
  const checkAndopenNeighboringCellsFunc = (row, cell, addInArr=true) => {
    if (row >= 0 && row < fieldMap.length) {
      if (cell >= 0 && cell < fieldMap[row].length) {
        if (
          fieldMap[row][cell].cellState !== -1 &&
          !fieldMap[row][cell].cellOpen
        ) {
          fieldMap[row][cell].cellOpen = true; 
          if (fieldMap[row][cell].cellState === 0 && addInArr) {
            arrayOfNeighboringCellID.push(fieldMap[row][cell].id);
          }
          
        }
      }
    }
  };

  for (let rowIn = 0; rowIn < fieldMap.length; rowIn++) {
    for (let cellIn = 0; cellIn < fieldMap[rowIn].length; cellIn++) {
      if (fieldMap[rowIn][cellIn].id === id) {
        
        checkAndopenNeighboringCellsFunc(rowIn, cellIn, false);

        checkAndopenNeighboringCellsFunc(rowIn + 1, cellIn + 1);
        checkAndopenNeighboringCellsFunc(rowIn + 1, cellIn);
        checkAndopenNeighboringCellsFunc(rowIn + 1, cellIn - 1);

        checkAndopenNeighboringCellsFunc(rowIn, cellIn - 1);
        checkAndopenNeighboringCellsFunc(rowIn, cellIn + 1);

        checkAndopenNeighboringCellsFunc(rowIn - 1, cellIn + 1);
        checkAndopenNeighboringCellsFunc(rowIn - 1, cellIn);
        checkAndopenNeighboringCellsFunc(rowIn - 1, cellIn - 1);
      }
    }
  }

  if (arrayOfNeighboringCellID.length > 0) {
    for (let n = 0; n < arrayOfNeighboringCellID.length - 1; n++) {
         
      fieldMap = openNeighboringCellsFunc(fieldMap, arrayOfNeighboringCellID[n]);
    }
  }

  
  return fieldMap;
};

 