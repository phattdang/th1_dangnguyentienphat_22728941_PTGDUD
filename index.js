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
if (markHigherBMI) {
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
if (markHigherBMI) {
    console.log("BMI cua Marks (" + MarksBMI.toFixed(2) + ")" + " cao hon BMI cua John (" + MarksBMI.toFixed(2) + ")")
}
else {
    console.log("BMI cua Marks (" + MarksBMI.toFixed(2) + ")" + " thap hon BMI cua John (" + MarksBMI.toFixed(2) + ")")
}

// cau 3
console.log("cau 3")
var caHeoDiem1 = 96;
var caHeoDiem2 = 108;
var caHeoDiem3 = 89;

var koalaDiem1 = 88;
var koalaDiem2 = 91;
var koalaDiem3 = 110;

var diemTbCaHeo = (caHeoDiem1 + caHeoDiem2 + caHeoDiem3) * 1.0 / 3;
var diemTbKoala = (koalaDiem1 + koalaDiem2 + koalaDiem3) * 1.0 / 3;

console.log("diem tb cua ca heo : ", diemTbCaHeo.toFixed(2))
console.log("diem tb cua koala : ", diemTbKoala.toFixed(2))

if (diemTbCaHeo >= 100 && diemTbKoala >= 100) {
    if (diemTbCaHeo > diemTbKoala) {
        console.log("ca heo thang");
    } else if (diemTbKoala > diemTbCaHeo) {
        console.log("loala thang");
    } else {
        console.log("hoa nhau");
    }
} else {
    if (diemTbCaHeo > diemTbKoala && diemTbCaHeo >= 100) {
        console.log("ca heo thang");
    } else if (diemTbKoala > diemTbCaHeo && diemTbKoala >= 100) {
        console.log("loala thang");
    } else {
        console.log("khong ai thang ca");
    }
}

