//
function sumNumbers(a) {
    
    function sumNumbers(arr) {
    
        sum = 0
        for (let i = 0; i <= arr.length; i ++) {
            if (typeof arr[i] === 'number') {
                sum = sum + arr[i]
            }
        } 
        return sum
    }
}