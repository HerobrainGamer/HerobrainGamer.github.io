document.addEventListener("DOMContentLoaded", currentAge);

function currentAge() {
    var y = new Date().getFullYear();
    var m = new Date().getMonth();
    var d = new Date().getDate();
    
    if(m >= 3)
    {
        if(d >= 20)
        {
            y = y-2002;
        }
        else if(m <= 3 && d <= 20)
        {
            y = y-2003;
        }
        else
        {
            y = y-2002;
        }
    }
    else
    {
        y = y-2003;
    }

    document.getElementById("age").textContent = y;
}