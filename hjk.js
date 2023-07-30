function jerry(){
    var a=document.getElementById("mk").value;
    var b=document.getElementById("num1").value;
    var flag=0;
    var p;
    var c=b;
    if(a=="Binary"){
        while(b!=0){
            p=b%10;
            if(p>2){
                flag=1;
                break;
            } 
            b/=10;
        }
        if(flag==1){
            alert("Enter the valid binary number");
        }
        else{
            var d=`Decimal Value is: `;
            document.getElementById("semo").innerText= d;
            document.getElementById("demo").innerText= parseInt(c,2);
        }
    }
    if(a=="Decimal"){
        var v=`Binary Value is: `;
        var num=parseInt(c);
        var res=num.toString(2);
        document.getElementById("semo").innerText=v;
        document.getElementById("demo").innerText=res;
    }
    
}