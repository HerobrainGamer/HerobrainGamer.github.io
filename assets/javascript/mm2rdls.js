window.onload = function() {mm2rhiddenBlocks()};

function mm2rhiddenBlocks() {
  document.getElementById("mm2rdlw").style.display = "none";
  currentYear();
}

function mm2rdlf() {
    var x = document.getElementById("mm2rdlw");
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}