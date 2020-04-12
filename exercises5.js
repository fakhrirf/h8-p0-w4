function ubahHuruf(kata) {
    // you can only write your code here!
    var hurufAlpha = "abcdefhijklmnopqrstuvwxyz";
    var hurufBaru = '';
    huruf=0;

    for (var i = 0; i < kata.length;i++){
        for (var j=0; j < hurufAlpha.length;j++){
            if (kata[i] === hurufAlpha[j]){
                hurufBaru += hurufAlpha [j+1];
            }
        }
    }
    return hurufBaru

  }
  
  // TEST CASESs
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu