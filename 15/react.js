//бібліотека JavaScript компанії Meta
//можна до неї додатково підключати бібліотеки
//є ще інші фреймворки (англулар)
//зв'язок з віртуальним дом-деревом, тому все відбувається швидше
//next.js - фреймворк реакту, ще швидше і вище

//у реакті створюються компоненти (функції)
//компонента

/*
import React from "react";
import ReactDOM from "react-dom";

//const hello = React.createElement("h1", null, "hello world");
//const hello = <h1>Hello world</h1>; //<h1> - джаваскрипт розширення

const HelloUser = () => { //компонента
    return (
        <div>
            <h1>Hello, user!</h1>
            <div>{new Date().toString()}</div> 
        </div>    
    )//js in { }
}

ReactDOM.render(<HelloUser/>, document.querySelector("#root"))

*/

const names = ["Ivan","Oleg","Roman"];
function User (names) { //компонента
    <>
        {
            names.map(u => {
                return (/*код для повернення*/
                    //class -> className, ОБОВ'ЯЗКОВО МАЄ БУТИ БАТЬКІВСЬКИЙ 
                    <div className="one"> 
                        {u}
                    </div> //компоненти в реакті
                )
            })
        }
    </>
    
}
function UserShow () { 
    return (
        <User></User> //викликаєм компоненту
    )
}
ReactDOM.render(<UserShow/>, document.querySelector("body"))
