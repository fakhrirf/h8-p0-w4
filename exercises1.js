function angkaPrima(angka) {
  // you can only write your code here!
  var hasil = true;
  for (i = 3; i<angka; i++){
      if (angka % i === 0){
          hasil = false;
      }
    }
  return hasil;
}

// TEST CASES

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false