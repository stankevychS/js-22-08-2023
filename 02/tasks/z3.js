const num = parseInt(prompt("input 1-4","1-4"));
let result;
switch(num){
    case 1:
        result = "зима";
    break;
    case 2:
        result = "весна";
    break;
    case 3:
        result = "літо";
    break;
    case 4:
        result = "осінь";
    break;
    deafault: 
        {
            document.body.style.backgroundColor = "tomato";
        }
}
document.write(result ? result : "щось пішло не так");