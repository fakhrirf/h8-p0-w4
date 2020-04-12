function cariModus(arr) {
    // you can only write your code here!
  var cariNilai = 0;
  var modus = 0;

  for (var i = arr.length-1; i >= 0; i--){
        //console.log(i)
        var tampung = 0
        for (var j = 0; j < arr.length; j++){
            console.log(arr[i], arr[j])
            if (arr[j] == arr[i]){
                tampung += 1
                //console.log("ini tampung " + tampung)
            }
        }
    }  
}
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1