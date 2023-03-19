export const openNeighboringCellsFunc = (
  fieldMap,
  arrayOfNeighboringCellID
) => {
  let id = arrayOfNeighboringCellID.shift();
  let rowIn = Math.floor(id / 16);
  let cellIn = id % 16;

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

  checkAndopenNeighboringCellsFunc(rowIn, cellIn, false);

  checkAndopenNeighboringCellsFunc(rowIn + 1, cellIn + 1);
  checkAndopenNeighboringCellsFunc(rowIn + 1, cellIn);
  checkAndopenNeighboringCellsFunc(rowIn + 1, cellIn - 1);

  checkAndopenNeighboringCellsFunc(rowIn, cellIn - 1);
  checkAndopenNeighboringCellsFunc(rowIn, cellIn + 1);

  checkAndopenNeighboringCellsFunc(rowIn - 1, cellIn + 1);
  checkAndopenNeighboringCellsFunc(rowIn - 1, cellIn);
  checkAndopenNeighboringCellsFunc(rowIn - 1, cellIn - 1);

  if (arrayOfNeighboringCellID.length != 0) {
    fieldMap = openNeighboringCellsFunc(fieldMap, arrayOfNeighboringCellID);
  }

  return fieldMap;
};
