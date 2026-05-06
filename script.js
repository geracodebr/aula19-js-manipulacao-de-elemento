function trocarCor()
{
    const div1 = document.getElementById("div-1");
    const div2 = document.getElementById("div-2");
    const div3 = document.getElementById("div-3");

    div1.style.backgroundColor = "Red";
    div2.style.backgroundColor = "lightGreen";
    div3.style.backgroundColor = "lightBlue";
}

function retornaCor()
{
    const div1 = document.getElementById("div-1");
    const div2 = document.getElementById("div-2");
    const div3 = document.getElementById("div-3");

    div1.style.backgroundColor = "yellow";
    div2.style.backgroundColor = "";
    div3.style.backgroundColor = "brown";
}