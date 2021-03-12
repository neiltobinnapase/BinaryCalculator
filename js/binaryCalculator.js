var eqlPressed = false;

function action(e){
    var btn = e.target || e.srcElement;
    
    if(btn.id == "btnEql"){
        var resultString = document.getElementById("res").innerHTML;
        
        if(resultString.length > 1){
            var nums = /(\d+)/g;
            resultString = resultString.replace(nums, function(match) {
            return parseInt(match, 2);
            })
            document.getElementById("res").innerHTML = Math.floor(eval(resultString)).toString(2);            
            eqlPressed = true;
        }

    }
    else if(btn.id == "btnClr"){
        document.getElementById("res").innerHTML = '';
    }
    else if(btn.id == "btn0" || btn.id == "btn1"){
        if(eqlPressed){
           document.getElementById("res").innerHTML = '';
           eqlPressed = false;
        }
        document.getElementById("res").innerHTML += document.getElementById(btn.id).innerHTML;
    }
    else {
        var tempstring = document.getElementById("res").innerHTML;
        if(tempstring[tempstring.length-1] == '+' || tempstring[tempstring.length-1] == '-' || tempstring[tempstring.length-1] == '*' || tempstring[tempstring.length-1] == '/'){
            tempstring = tempstring.substring(0,tempstring.length-1) + (document.getElementById(btn.id).innerHTML).toString();
            document.getElementById("res").innerHTML = tempstring;
        }
        else if (tempstring.length > 0) {
            document.getElementById("res").innerHTML += document.getElementById(btn.id).innerHTML;
        }
            
    }
}

var buttons = document.getElementsByTagName("button");

for(var button of buttons){
    button.onclick = action;
}