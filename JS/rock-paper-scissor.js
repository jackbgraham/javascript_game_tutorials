function sortNumArray(array){
    for (let i=0; i < array.length; i++) {             //loop over the array
        let compA = array.indexOf(i);                  //gets index of element A
        let compB = array.indexOf(i + 1); //gets index of element B
        if ( i > i.indexOf(i + 1))                     //compare value of i to i+1
                                                       //remove i from the array
            array.splice(i);

    }
}

const testArray = [5, 6, 1, 2, 3, 4];

console.log("test");
console.log(sortNumArray(testArray));