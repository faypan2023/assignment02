let num = parseFloat(prompt("enter a number between 1 and 100"))
if (num>=60 && num <70){
    console.log("You received a D")
}else if(num >=70 && num<80){
    console.log("You received a C")
}else if(num >=80 && num<90){
    console.log("You received a B")
}else if(num >=90 && num<=100){
    console.log("You received an A")
}else if(num>=1 && num<60){
    console.log("You received an F")
}else{
    console.log("only numbers between 1 and 100 are accepted")
}
