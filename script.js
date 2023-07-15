/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(function(pro){
    if(pro.profession=="developer"){
      console.log(pro.name);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(pro){
    if(pro.profession=="developer"){
      console.log(pro.name);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  const obj={
    id:1,
    name:"susan",
    age:"20",
    profession:"intern"
  }
  arr.push(obj);
  console.log(arr[3]);

}

function removeAdmin() {
  //Write your code here, just console.log
  arr.forEach(function(pro){
    if(pro.profession=="admin"){
       arr.splice(2);
      console.log(arr);
    }
  })
}

let arr2 = [
  { id: 6, name: "jane", age: "52", profession: "admin" },
  { id: 7, name: "jill", age: "62", profession: "intern" },
  { id: 8, name: "kin", age: "72", profession: "developer" },
];
function concatenateArray() {
  //Write your code here, just console.log
  const narr=arr.concat(arr2);
  console.log(narr);
}
