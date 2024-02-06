
function extractAndSort(arr,n){
    
  let sortedArr = []
  let j = 0
  for (let i = n - 1; i >= 0; i--) {
      console.log('i value:', i)

      //
      console.log(i)

      // console log j as 0 1 2
      console.log(j)
      sortedArr[j] = arr[i]
      console.log(sortedArr)
      j++

  }

  console.log(sortedArr)
  sortedArr = String(sortedArr)
  console.log(sortedArr)
// return sortedArr;
}

console.log(extractAndSort([1,2,3,4,5,6], 3)) // 3,2,1

