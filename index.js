// part 1
// cau 1
console.log("cau 1")
var MarksWeight = 78;
var MarksHeight = 1.69;
var JohnWeight = 92;
var JohnHeight = 1.95;

var MarksBMI = MarksWeight / (MarksHeight * MarksHeight);
var JohnBMI = JohnWeight / (JohnHeight * JohnHeight);

console.log("BMI cua Marks la : ", MarksBMI.toFixed(2));
console.log("BMI cua John la : ", JohnBMI.toFixed(2));

var markHigherBMI = MarksBMI > JohnBMI;
if(markHigherBMI){
    console.log("BMI cua Marks cao hon BMI cua John")
}
else {
    console.log("BMI cua Marks thap hon BMI cua John")
}

// cau 2
console.log("cau 2")
var MarksWeight = prompt("can nang cua Marks : ");
var MarksHeight = prompt("can nang cua Marks : ");
var JohnWeight = prompt("can nang cua John : ");
var JohnHeight = prompt("can nang cua john : ");

var MarksBMI = MarksWeight / (MarksHeight * MarksHeight);
var JohnBMI = JohnWeight / (JohnHeight * JohnHeight);

console.log("BMI cua Marks la : ", MarksBMI.toFixed(2));
console.log("BMI cua John la : ", JohnBMI.toFixed(2));

var markHigherBMI = MarksBMI > JohnBMI;
if(markHigherBMI){
    console.log("BMI cua Marks (" + MarksBMI.toFixed(2) + ")" + " cao hon BMI cua John ("+ MarksBMI.toFixed(2) + ")")
}
else {
    console.log("BMI cua Marks (" + MarksBMI.toFixed(2) + ")" + " thap hon BMI cua John ("+ MarksBMI.toFixed(2) + ")")
}


