
function Menu_show()
{
    
    document.getElementById("strips_box").style.display = "none";
    document.getElementById("CoNtEnT").style.justifyContent = "center";

    document.getElementById("menu").style.display ="block";
}

function Menu_hide()
{
    
    document.getElementById("strips_box").style.display = "flex";
    document.getElementById("CoNtEnT").style.justifyContent = "space-between";

    document.getElementById("menu").style.display ="none";
    
}