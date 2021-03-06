const PI = 3.14;

function getPerimeter() {
    let r = document.getElementById("radius").value;
    let perimeter = Number(r) * 2 * PI;
    document.getElementById("result").innerHTML = "Chu vi là: " + perimeter.toFixed(2);
}

function getArea() {
    let r = document.getElementById("radius").value;
    let area = Number(r) * Number(r) * PI;
    document.getElementById("result").innerHTML = "Diện tích là: " + area.toFixed(2);
}