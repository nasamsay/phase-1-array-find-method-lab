//Using find method to iterate on an array
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
  ]
//callback function
const isWin = obj => obj['result']=='W';
// iterating using find()
function superbowlWin(arr){
    if (arr.find(isWin) == undefined){
        return undefined
    }
    else{
        return arr.find(isWin)['year']
    }    
}
//test
console.log(superbowlWin(record))
console.log(isWin(record[1]))
const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" }]
console.log(superbowlWin(sadReality))