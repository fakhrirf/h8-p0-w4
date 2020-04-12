function digitPerkalianMinimum(angka) {
  // you can only write your code here!
    var hasil = 0;
    var faktorisasi;
    var arr = []
    var arrSlice = [];
    var digit = '' ;

    for (var i=0; i<=angka; i++){
        for (var j=0; j<= angka; j++){
            var test = i + '-' + j;
            hasil = i *j;
            console.log(test, hasil)
        }
        if (hasil === angka){
            console.log(test, hasil);
            console.log(String(i), String(j));
            faktorisasi = String(i) + String(j);

            arr.push(faktorisasi);
            arrSlice = arr.slice(Math.round(arr.length/2-1), 
            Mathround(arr.length/2));

            digit = arrSlice[0];
            console.log(arrSlice[0], digit);   
        
        }
    }
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
// console.log(digitPerkalianMinimum(90)); // 3
// console.log(digitPerkalianMinimum(20)); // 2
// console.log(digitPerkalianMinimum(179)); // 4
// console.log(digitPerkalianMinimum(1)); // 2