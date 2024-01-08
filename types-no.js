function prime(){
    var a=document.getElementById("t1").value;
    var f=0;
    var c="Prime Number";
    var b="Not a Prime Number";
    var i;
    for(i=1;i<=a;i++)
    {
        if(a%i==0)
        f++;
    }
    if(f==2)
    document.getElementById("t2").value=c;
    else{
        document.getElementById("t2").value=b;
          
    }
}

function special(){
    var r,num,sp,sum=0,i;
    sp=document.getElementById("t1").value;
    num=sp;
    var c="Special Number";
    var b="Not a Special Number";

    while(sp>0){
        r=sp%10;
        sp=parseInt(sp/10);
        f=1;
        for(i=1;i<=r;i++)
        {
            f=f*i;
        }
        sum=sum+f;
    }
    if(sum==num)
    document.getElementById("t2").value=c;
    else{
        document.getElementById("t2").value=b;
}
}

function armstrom(){
    var sum=0,r,num,m;
    var a=document.getElementById("t1").value;
    var c="Armstrom Number";
    var b="Not a Armstrom Number";
    num=a;

    while(a>0)
    {
        r=a%10;
        m=r*r*r;
        sum=sum+m;
        a=parseInt(a/10);
    }
    if(sum==num)
    document.getElementById("t2").value=c;
    else{
        document.getElementById("t2").value=b;
}

}

function perfect(){
    var f=0,i;
    var a=document.getElementById("t1").value;
    var num=a;
    var c="Perfect Number";
    var b="Not a Perfect Number";
    for(i=1;i<a;i++)
    {
        if(a%i==0)
        f=f+i;
    }
    if(f==num)
    document.getElementById("t2").value=c;
    else{
        document.getElementById("t2").value=b;
}
}

function spy(){
    var sum=0,mul=1,r;
    var a=document.getElementById("t1").value;
    var c="Spy Number";
    var b="Not a Spy Number";
    while(a>0)
    {
        r=a%10;
        sum=sum+r;
        mul=mul*r;
        a=parseInt(a/10);
    }
    if(sum==mul)
    document.getElementById("t2").value=c;
    else{
        document.getElementById("t2").value=b;
}
}