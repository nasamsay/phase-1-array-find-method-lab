//Using find method to iterate on an array

const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]
//callback function
const isWin = obj => { 
        if(obj['result']=='W'){
            return obj['year']
        }
    }
   


function superbowlWin(arr){
    if (arr.find(isWin) == undefined){
        return undefined
    }
    else{
        return arr.find(isWin)['year']
    }
    
}

console.log(superbowlWin(record))
console.log(isWin(record[1]))

const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" }]
console.log(superbowlWin(sadReality))