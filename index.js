// part 1
// cau 1

var MarksWeight = prompt("can nang cua Marks : ");
var MarksHeight = prompt("can nang cua Marks : ");
var JohnWeight = prompt("can nang cua John : ");
var JohnHeight = prompt("can nang cua john : ");

var MarksBMI = MarksWeight / (MarksHeight * MarksHeight);
var JohnBMI = JohnWeight / (JohnHeight * JohnHeight);

console.log("BMI cua Marks la : ", MarksBMI);
console.log("BMI cua John la : ", JohnBMI);

var markHigherBMI = MarksBMI > JohnBMI;
if(markHigherBMI){
    console.log("BMI cua Marks cao hon BMI cua John")
}
else {
    console.log("BMI cua Marks thap hon BMI cua John")
}


