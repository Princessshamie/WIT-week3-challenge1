
function sortArray(Arraysort) {
   
    let myObject = {'even':[],'odd':[],'char':[]};

    for(let x=0; x<Arraysort.length; x++) {
        if(Arraysort[x] % 2 === 0){
            myObject.even.push(Arraysort[x])
            myObject.even.sort()
        }

        else if(Arraysort[x] %2 ===1){
            myObject.odd.push(Arraysort[x])
            myObject.odd.sort()
        }
        else{
            myObject.char.push(Arraysort[x])
            myObject.char.sort()
        }    
    }

    console.log(myObject);
    return myObject
}

sortArray([12,9,7,5,10,6,'S','X'])

module.exports = sortArray;
