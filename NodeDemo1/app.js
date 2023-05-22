var i = 5
var s = 4
s = s + i
console.log(s)

var message = "hello world"
console.log("Hello world co: " + message.length + " ky tu")
console.log(message.toUpperCase())

function max2So(a,b){
    let max = b
    if (a > b)
        max = a
    return max 
}
var k = max2So(23, 45)
console.log("Max 2 so la: " + k)

function soSanh(n1,n2){
    let max = n1;
    if(n2.length > n1.length)
        max = n2;
    return max;
}

var n1 = "Ngoc Linh"
var n2 = "Ha noi"
var max2 = soSanh(n1,n2)
console.log(max2)

var studentName = "Tran;Thu;Do";
var nameParts = studentName.split(";");
console.log(nameParts);
var ho = nameParts[0];
var tenDem = nameParts[1];
var ten = nameParts[2];