function Human (age) {
    this.age = age;
}

function lowToHigh (newArray) {
    //Bubble Sort - сортування бульбашкою
    for (let i = 0; i<newArray.length; i++) { 
        for(let k = 0; k<newArray.length-1; k++) {
            if (newArray[k].age>newArray[k+1].age) {
                let thisK = newArray[k];
                newArray[k]=newArray[k+1];
                newArray[k+1]=thisK;
            }
        }
    }
    return newArray;
}

function highToLow (newArray) {
    //Bubble Sort - сортування бульбашкою
    for (let i = 0; i<newArray.length; i++) { 
        for(let k = 0; k<newArray.length-1; k++) {
            if (newArray[k].age<newArray[k+1].age) {
                let thisK = newArray[k];
                newArray[k]=newArray[k+1];
                newArray[k+1]=thisK;
            }
        }
    }
    return newArray;
}

function randomHumansArray () {
    let humansArray = [];
    const randomCount = Math.floor(Math.random()*8+2);
    for (let i = 0; i<randomCount; i++) {
        let randomAge = Math.floor(Math.random()*100+1);
        humansArray.push(new Human (randomAge));
    }
    return humansArray;
    
}

const objArray = randomHumansArray (); 

console.log(lowToHigh(objArray)); //від меншого до більшого
console.log(highToLow(objArray)); //від більшого до меншого