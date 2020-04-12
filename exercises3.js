function cariMedian(arr) {
    // you can only write your code here!

    var nilai;
    var median;
    if(arr.length%2!==0){
        nilai= Math.trunc(arr.length/2);
        median = arr[nilai];  
        //console.log(median)
    }else{
        (arr.length%2===0)
        nilai=Math.trunc(arr.length/2);
        median=(arr[nilai]+arr[nilai-1])/2;
        //console.log(median)
    }
    return median
}
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5