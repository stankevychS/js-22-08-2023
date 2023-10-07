//content menu - налагоджувач
//правою кнопкою мишки
document.querySelector('body').addEventListener('contextmenu', (e) => {
    console.log(e);
 e.preventDefault();//при натиску на праву кнопку миші налагоджувач не відкривається
});