document.addEventListener("DOMContentLoaded", mm2rHiddenBlocks);

function mm2rHiddenBlocks() {
    document.getElementById("mm2rdownloadsw").style.display = "none";
    document.getElementById("mm2rmodlistw").style.display = "none";
    mm2rDownloadHiddenBlocks();
}

function mm2rDownloadHiddenBlocks() {
    document.getElementById("mm2radlw").style.display = "none";
}

function mm2rdownloadsf() {
    var x = document.getElementById("mm2rdownloadsw");
    if(x.style.display === "none") {
        document.getElementById("mm2rmodlistw").style.display = "none";
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function mm2rmodlistf() {
    var x = document.getElementById("mm2rmodlistw");
    if(x.style.display === "none") {
        document.getElementById("mm2rdownloadsw").style.display = "none";
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function mm2radlf() {
    var x = document.getElementById("mm2radlw");
    if(x.style.display === "none") {
        mm2rDownloadHiddenBlocks();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}