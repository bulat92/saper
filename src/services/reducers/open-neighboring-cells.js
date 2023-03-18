export const openNeighboringCellsFunc = (
  fieldMap,
  arrayOfNeighboringCellID
) => {

  let id = 0

  if (arrayOfNeighboringCellID.length != 0) {
    id = arrayOfNeighboringCellID.shift();
  } 
  
  const checkAndopenNeighboringCellsFunc = (row, cell, addInArr = true) => {
    if (row >= 0 && row < fieldMap.length) {
      if (cell >= 0 && cell < fieldMap[row].length) {
        if (
          fieldMap[row][cell].cellState !== -1 &&
          !arrayOfNeighboringCellID.includes(id) &&
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

  if (arrayOfNeighboringCellID.length != 0) {
    fieldMap = openNeighboringCellsFunc(
      fieldMap, 
      arrayOfNeighboringCellID
    );
  }

  return fieldMap;
};
