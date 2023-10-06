let num1 = parseInt(prompt('enter the first integer:'));
let num2 = parseInt(prompt('enter the second integer:'));
if (num1 === num2) {
    document.write("Both integers are equal: " + num1);
} else if(num1 >num2) {
    document.write("The larger integer is: " + num1);
}else {
    document.write("The larger integer is: " + num2);
}
