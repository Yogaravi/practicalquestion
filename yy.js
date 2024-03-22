function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}
const arr = [1, 2, 3, 4, 5,1,6,2, 7,1,3];
const uniqueValues = removeDuplicates(arr);
console.log(uniqueValues); 
