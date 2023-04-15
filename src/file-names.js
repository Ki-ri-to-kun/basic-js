const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
const renameFiles = filesArray => {
    let filesArrayCopy = filesArray.slice();
    let filesSet = new Set();

    for (const file of filesArrayCopy) {
        filesSet.add(file);
    }

    for (const file of filesSet) {
        let count = -1;
        filesArrayCopy = filesArrayCopy.map(f => {
            if (file === f) {
                count++;
                return count === 0 ? f : `${f}(${count})`;
            }
            return f;
        });
    }

    return filesArrayCopy;
};

module.exports = {
  renameFiles
};
