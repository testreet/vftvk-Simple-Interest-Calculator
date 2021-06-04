
function compute()
{
    // getting each element from the html
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("numy").value;
    
    if (p <= 0){
        window.alert("Please enter a positive non-zero number for principal amount");
        document.getElementById("principal").focus()
    }

    // calculating the interest amount
    result = p*r/100*y;

    date = new Date().getFullYear();
    dnew = Number(date) + Number(y);
    console.log(date);
    
    document.getElementById("result").innerHTML = result;
    document.getElementById("principalout").innerHTML = p;
    document.getElementById("rateour").innerHTML = r + "%" ;
    document.getElementById("yearout").innerHTML = dnew;
}

function numy()
{
    var select ='';
    for(i=1;i<=100;i++){
        select += '<option value=' + i + '>' + i + '</option>';
    }
    document.getElementById("numy").innerHTML = select;
    
}

function slider(val)
{
    document.getElementById("te").innerText = val + '%';

}
