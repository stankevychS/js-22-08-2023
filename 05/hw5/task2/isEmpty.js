
function isEmpty(obj) {
    if (Object.keys(obj).length===0){
        return true;
    }else {
        return false;
    }
}

let firstObj = {};
let secondObj = {
    empty: "no"
};

console.log(isEmpty(firstObj));
console.log(isEmpty(secondObj));