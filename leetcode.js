const obj = {
  name: "John Doe",
  age: 30,
};

// Check if the object has a property called "name".
const hasName = "string" in obj;
console.log("using in: ", hasName)

// Iterate over the object and print each property name and value.
for (var property_name in obj) {
  console.log(property_name, obj[property_name]);
}


let h = [1, 3, 5]

const hasProperty = "length" in h
console.log(hasProperty)

for(var n in h) {
  console.log(n, h[n])
}

// function removeElement(nums, val) {
//   let j = 0;
//   for( let n of nums )if( n !== val ) nums[j++] = n
//   return j, nums
// };

// console.log(removeElement([1,3,5,6,3], 5))


// const d = [1, 2, 3, 4, 5];

// // Remove all even numbers from the array.
// const newLength = removeElements(d, function(t) {
//   return t % 2 === 0;
// });

var removeElement = function(nums, val) {
  let j = 0
  for(let n of nums) {
    if(n !== val) {
      nums[j++] = n
    }
  }
  return nums
} 

console.log(removeElement([0,2,2,3]
  , 2))
 

  var strStr = function(haystack, needle) {
    if(haystack.includes(needle)) {
      return haystack.indexOf(needle)
    }
    return -1
  };

  console.log(strStr(haystack = "sadbutsad", needle = "sau"))