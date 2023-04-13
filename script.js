function Menu_show()
{
    //document.getElementById("menu").style.display = "flex";
    document.getElementById("strips_box").style.display = "none";
    document.getElementById("CoNtEnT").style.justifyContent = "center";

    document.getElementById("menu").style.display ="block";
}

/*
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

*/
function Menu_hide()
{
    //document.getElementById("menu").style.display = "none";
    document.getElementById("strips_box").style.display = "flex";
    document.getElementById("CoNtEnT").style.justifyContent = "space-between";

    document.getElementById("menu").style.display ="none";
    
}