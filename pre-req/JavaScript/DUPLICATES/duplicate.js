//using set operator
let arr = [1,2,3,4,1,2,3,4];

const dupremo =new Set(arr);
console.log('SET OPERATOR1',dupremo);

//using function
function duprem(arr) {
    return [...new Set(arr)];
}
console.log('SET OPERATOR FUNCTION',duprem(arr));


//for each

let array = ["apple", "mango","apple", "orange", "mango", "mango"];
function removeDupe(){
    let heva =[];
    array.forEach(dummy=>{
        if(!heva.includes(dummy)){
            heva.push(dummy)
        }
    })
    return heva;
}
console.log('FOR EACH FUNCTION',removeDupe());

//reduce
    let heva = array.reduce((acc,array)=>{
        if(!acc.includes(array)){
            acc.push(array)
        }
        return acc; 
    }, [])

    console.log('REDUCE',heva);

//filter
const filterDuplicates = array.filter((value, index, self) => self.indexOf(value) === index);

console.log('Filter',filterDuplicates);



//map
const map = new Map();
arr.forEach(value => map.set(value, true));
const mapDuplicates = [...map.keys()];


console.log('MAP FUNCTION',mapDuplicates);



//seen

const removeDuplicates = [];
const seen = {};

arr.forEach((value) => {
  if (!seen[value]) {
    removeDuplicates.push(value);
    seen[value] = true;
  }
});

console.log('SEEN',removeDuplicates);