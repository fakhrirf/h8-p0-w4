function changeMe(arr) {
    // you can only write your code here!
    var bio = {}
    var keys = ['firstName', 'lastName', 'gender', 'age']

    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            bio[keys[j]] = arr[i][j]
        }
        console.log(bio.firstName + '' + bio.lastName + ':')
        console.log(bio)
    }
    }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""