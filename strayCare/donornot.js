function yes() {
    document.getElementById('sin').style.display = "block";
    document.getElementById('pw').style.display = "none";
    document.getElementById('nsin').style.display = "none";
    return "done";
}

function no() {
    document.getElementById('nsin').style.display = "block";
    document.getElementById('pw').style.display = "none";
    document.getElementById('sin').style.display = "none";
    return "done";
}