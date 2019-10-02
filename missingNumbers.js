const missingNumbers = (Numbers) =>{
    count = Numbers[Numbers.length-1];
    var myNumbers = [];
    // count = 9
    // for(var x=1;x<=Numbers.length-1; x++){
        for(var i=1;i<count; i++) {
            if(Numbers.indexOf(i)==-1){
                myNumbers.push(i);
                console.log(myNumbers);
                // }console.log(missingNumbers.push(i));
            }
        }

    return myNumbers
}
module.exports = missingNumbers
