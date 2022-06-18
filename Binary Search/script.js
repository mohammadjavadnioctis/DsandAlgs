console.log("linked");
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function binarySearch(array, target) {
    var left = 0;
    var right = array.length - 1;
    var middle;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (array[middle] === target) {
            return middle;
        }
        else if (array[middle] < target) {
            left = middle + 1;
        }
        else {
            right = middle - 1;
        }
    }
    return -1;
}
console.log(binarySearch(array, 5));
