document.addEventListener("DOMContentLoaded", mmHiddenBlocks);

function mmHiddenBlocks() {
    document.getElementById("mmdownloadsw").style.display = "none";
    document.getElementById("mmmodlistw").style.display = "none";
    mmDownloadHiddenBlocks();
}

function mmDownloadHiddenBlocks() {
    document.getElementById("mmbdlw").style.display = "none";
    document.getElementById("mmbsdlw").style.display = "none";
}

function mmdownloadsf() {
    var x = document.getElementById("mmdownloadsw");
    if(x.style.display === "none") {
        document.getElementById("mmmodlistw").style.display = "none";
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function mmmodlistf() {
    var x = document.getElementById("mmmodlistw");
    if(x.style.display === "none") {
        document.getElementById("mmdownloadsw").style.display = "none";
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function mmbdlf() {
    var x = document.getElementById("mmbdlw");
    if(x.style.display === "none") {
        mmDownloadHiddenBlocks();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function mmbsdlf() {
    var x = document.getElementById("mmbsdlw");
    if(x.style.display === "none") {
        mmDownloadHiddenBlocks();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}