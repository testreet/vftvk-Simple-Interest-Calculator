
function compute()
{
    // getting each element from the html
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("numy").value;
    
    // calculating the interest amount
    result = p*r/100*y;

    document.getElementById("result").innerHTML = result;
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