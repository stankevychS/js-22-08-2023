const min = parseInt(prompt("Число він 0 до 59", "0-59"));

/*
if(min<=15 && min>0){
    document.write("перша чверть");
}else if(min<=30 && min>0){
    document.write("друга чверть");
}else if(min<=45 && min>0){
    document.write("третя чверть");
}else if(min<=59 && min>0){
    document.write("четверта чверть");
}else{
    console.error("Error");
}
*/

min<=15 && min>0 ? document.write("перша чверть") : 
min<=30 && min>0 ? document.write("друга чверть") : 
min<=45 && min>0 ? document.write("третя чверть") : 
min<=59 && min>0 ? document.write("четверта чверть") : 
console.error("Error");