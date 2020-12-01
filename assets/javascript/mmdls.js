window.onload = function() {mmhiddenBlocks()};

function mmhiddenBlocks() {
  document.getElementById("mmdlw").style.display = "none";
  document.getElementById("mmsdlw").style.display = "none";
  currentYear();
}

function mmdlf() {
    var x = document.getElementById("mmdlw");
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function mmsdlf() {
    var x = document.getElementById("mmsdlw");
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}