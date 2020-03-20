module.exports = function towelSort(matrix) {
    let sorted = [];
    if (!!matrix && matrix.length > 0) {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                for (let j = 0; j < matrix[i].length; j++) {
                    sorted.push(matrix[i][j])
                }
            } else {
                for (let x = matrix[i].length - 1; x >= 0; x--) {
                    sorted.push(matrix[i][x])
                }
            }
        }
        return sorted;
    }
    return [];
}
