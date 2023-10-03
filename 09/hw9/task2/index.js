window.onload = () => {

    let [...display] = document.querySelectorAll(".stopwatch-display > span");
    const [...btns] = document.querySelectorAll(".stopwatch-control > button"),
        stopwatch = document.querySelector(".container-stopwatch"); 
    
    newColor = (el, classAdd) => {
        el.classList.remove("black","red","silver","green");
        el.classList.add(`${classAdd}`);
    }

    let sec = 0;
    let min = 0;
    let hours = 0;

    secFunc = () => { 
        sec++;
        if (sec<10){
            display[2].innerText = `0${sec}`;
        }else if (sec<60) {
            display[2].innerText = sec;
        }else{
            sec=0;
            display[2].innerText = `0${sec}`;
        }
        
    }

    minFunc = () => { 
        min++;
        if (min<10){
            display[1].innerText = `0${min}`;
        }else if (min<60) {
            display[1].innerText = min;
        }else{
            min=0;
            display[1].innerText = `0${min}`;
        }
        
    }

    hoursFunc = () => { 
        hours++;
        if (hours<10){
            display[0].innerText = `0${hours}`;
        }else{
            display[0].innerText = hours;
        }
        
    }

    btns[0].onclick = () => {
        newColor(stopwatch, "green");
        let secInter = setInterval(secFunc, 1000);
        let minInter = setInterval(minFunc, 60000);
        let hoursInter = setInterval(hoursFunc, 360000)
        
        btns[1].onclick = () => {
            newColor(stopwatch, "red");
            clearInterval(secInter);
            clearInterval(minInter);
            clearInterval(hoursInter);
    
        }

        btns[2].onclick = () => {
            newColor(stopwatch, "silver");
            sec = 0;
            min = 0;
            hours = 0;
            display[2].innerText = `0${sec}`;
            display[1].innerText = `0${min}`;
            display[0].innerText = `0${hours}`;
            clearInterval(secInter);
            clearInterval(minInter);
            clearInterval(hoursInter);

        }
    }
}