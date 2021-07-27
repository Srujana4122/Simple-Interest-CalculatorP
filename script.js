function compute()
{
    p = document.getElementById("principal").value;
    t = document.getElementById("years").value;
    r = document.getElementById("rate").value;
    result = (p*t*r)/100;
    document.write("If you deposit %d",p);
    document.write("<br>"at an interest rate of %d%",r</br>");
    document.write("<br>"You will receive an amount of %d",result</br>");
    document.write("in the year %d",+new Date().getFullYear()+t);
    
}
        
