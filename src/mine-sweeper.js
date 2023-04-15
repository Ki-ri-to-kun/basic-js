const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
const minesweeper = matrix => {
    let resultArray = [];

    for (let i = 0; i < matrix.length; i++) {
        let innerResultArray = [];

        for (let i2 = 0; i2 < matrix[0].length; i2++) {
            let numberOfMines = 0;

            //север
            if (matrix[i - 1] !== undefined && matrix[i - 1][i2] !== undefined) {
                numberOfMines = matrix[i - 1][i2] ? numberOfMines + 1 : numberOfMines;
            }
            //северо-восток
            if (matrix[i - 1] !== undefined && matrix[i - 1][i2 + 1] !== undefined) {
                numberOfMines = matrix[i - 1][i2 + 1] ? numberOfMines + 1 : numberOfMines;
            }
            //восток
            if (matrix[i] !== undefined && matrix[i][i2 + 1] !== undefined) {
                numberOfMines = matrix[i][i2 + 1] ? numberOfMines + 1 : numberOfMines;
            }
            //юго-восток
            if (matrix[i + 1] !== undefined && matrix[i + 1][i2 + 1] !== undefined) {
                numberOfMines = matrix[i + 1][i2 + 1] ? numberOfMines + 1 : numberOfMines;
            }
            //юг
            if (matrix[i + 1] !== undefined && matrix[i + 1][i2] !== undefined) {
                numberOfMines = matrix[i + 1][i2] ? numberOfMines + 1 : numberOfMines;
            }
            //юго-запад
            if (matrix[i + 1] !== undefined && matrix[i + 1][i2 - 1] !== undefined) {
                numberOfMines = matrix[i + 1][i2 - 1] ? numberOfMines + 1 : numberOfMines;
            }
            //запад
            if (matrix[i] !== undefined && matrix[i][i2 - 1] !== undefined) {
                numberOfMines = matrix[i][i2 - 1] ? numberOfMines + 1 : numberOfMines;
            }
            //северо-запад
            if (matrix[i - 1] !== undefined && matrix[i - 1][i2 - 1] !== undefined) {
                numberOfMines = matrix[i - 1][i2 - 1] ? numberOfMines + 1 : numberOfMines;
            }
            innerResultArray.push(numberOfMines);
        }
        resultArray.push(innerResultArray);
    }

    return resultArray;
};

module.exports = {
  minesweeper
};
