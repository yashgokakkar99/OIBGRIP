function f1()
{
    var t1 = document.getElementById('inpt').value;
    var t2;
    if(document.getElementById('select').value == "Fahrenheit"){
        t2 = (t1-32)*(5/9);
        document.getElementById('otp').innerHTML = String(t2.toFixed(2))+"°C";
    }
    else{
        t2 = (t1*(9/5))+32;
        document.getElementById('otp').innerHTML = String(t2.toFixed(2))+"°F";
    }
   
}