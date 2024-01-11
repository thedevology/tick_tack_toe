function checkin(){
    if(document.getElementById("input").value < 3 && document.getElementById("input").value !="" || document.getElementById("input").value>9){
        alert("اندازه جدول نمی تواند کم تر از 3 و بیشتر از 9 باشد")
        document.getElementById("input").value = 3;
    }
}
var size;
function start(){
    document.getElementById("d1").style="display:none";
    document.getElementById("h1").style="display:block";
    size = Number(document.getElementById("input").value);
    for(var i = 1 ; i<=size;i++){
        var code = "<tr>";
        for(var i2 = 0 ; i2<size ; i2++){
            code =  code+"<td id=\""+String(i)+i2+"\" onclick=\"mark("+String(i)+i2+")\"></td>";
        }
        code = code + "</tr>";
        document.getElementById("table").innerHTML += code;
    }
}
var markv = "X";
var tddb = new Set();
var xdb = new Set();
var odb = new Set();
function mark(id){
    if(tddb.has(String(id)) == false){
        document.getElementById(String(id)).innerHTML=markv;
        if(markv=="X"){
            xdb.add(String(id));
            markv="O";
        }else{
            markv="X";
            odb.add(String(id));
        }
        document.getElementById("span").innerHTML=markv
        tddb.add(String(id));
        checkwin();
    }
}
var x = 0;
var o = 0;
function checkwin(){
    var iv = 10;
    for(var i = 0; i<size ; i++){
        iv = 10+i;
        for(var i2 = iv ; i2<size*12 ; i2+=10){
            if(xdb.has(String(i2))){
                x++;
                if(x == size){
                    alert("x is wine");
                }
            }else{
                x = 0;
            }
            if(odb.has(String(i2))){
                o++;
                if(o == size){
                    alert("o is wine");
                }
            }else{
                o = 0;
            }
        }
        x = 0;
        o = 0;
    }
    iv = 10;
    var d = false;
    for(var i = 0; i<size ; i++){
        for(var i2 = iv ; i2<size*12 ; i2++){
            if(d==false){
                if(xdb.has(String(i2))){
                    x++;
                    if(x == size){
                        alert("x is wine");
                        d = true;
                    }
                }else{
                    x = 0;
                }
                if(odb.has(String(i2))){
                    o++;
                    if(o == size){
                        alert("o is wine");
                        d = true;
                    }
                }else{
                    o = 0;
                }
            }
        }
        x = 0;
        o = 0;
    }
    for(var i = 10 ; i<=size*12 ; i+=11){
        if(xdb.has(String(i))){
            x++;
            if(x == size){
                alert("x is wine");
            }
        }else{
            x = 0;
        }
        if(odb.has(String(i))){
            o++;
            if(o == size){
                alert("o is wine");
            }
        }else{
            o = 0;
        }
    }
    x = 0;
    o = 0;
    var lid = 10+size-1;
    for(var i = 0 ; i<size ; i++){
        if(xdb.has(String(lid))){
            x++;
            if(x == size){
                alert("x is wine");
            }
        }else{
            x = 0;
        }
        if(odb.has(String(lid))){
            o++;
            if(o == size){
                alert("o is wine");
            }
        }else{
            o = 0;
        }
    lid = lid-1+10
    }
    x = 0;
    o = 0;
}
