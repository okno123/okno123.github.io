window.addEventListener('DOMContentLoaded', function (event) {
  let s = document.getElementsByName("myselect");
  s[0].addEventListener("change", function(event) {
    let select = event.target;
    let radios = document.getElementById("myradios");
    let svost = document.getElementById("svostva");
    console.log(select.value);
  
    if (select.value == "1") {
      radios.style.display = "none";
      svost.style.display = "none";
    }
    if(select.value == "2") 
    {
        radios.style.display = "none";
        svost.style.display = "block";
    }
    if(select.value == "3") 
    {
        svost.style.display = "none";
        radios.style.display = "block";
    }

  });
  
  let r = document.querySelectorAll(".myradios input[type=radio]");
  r.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      console.log(r.value);
    });    
  });
  
});

function func() 
{
    var result=0;
    var x=1;
    var num2 = Number(document.getElementById("num2").value);
    if(isNaN(num2)==true){
        result = "Некорректное количество товара";
        x=0;
    }
    if(num2!=0)
    {
        var f=0;
        var result2=num2*1000;
        var sum=document.getElementsByName('svo');
        for (var i=0; i<sum.length; i++) 
        {
            if (sum[i].checked) 
            {
                f=1;
                result2+=100;
            }
        }
        if(f==1)
        {
            document.getElementById("result").innerHTML = result2;
        }
        else
        {
            var f2=0;
            var result1=num2*2000;
            var rad=document.getElementsByName('myradio');
            for (var i=0; i<rad.length; i++) 
            {
                if (rad[i].checked) 
                {
                    f2=1;
                    result1+=(i+1)*20;
                    break;
                }
            }
            if(f2==1)
            {
                document.getElementById("result").innerHTML = result1;
            }
            else
            {
                result="Выберите опции";
                document.getElementById("result").innerHTML = result;
            }
        }
  
    }
    else 
    {
        document.getElementById("result").innerHTML = result;
    }
}

