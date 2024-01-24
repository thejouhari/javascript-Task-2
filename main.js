var registerForm = document.querySelector(".registerForm");
registerForm.onsubmit = function(e){

    e.preventDefault();

    var element = e.target.elements;
    var input = element[0].value;
    var options = element[1].value;
    var result="";


    if (options == 'nis'){
        result = input;
    }
    else if (options == 'dolar'){
        result = input/3.7;
    }
    else if (options == 'dinar'){
        result = input/5;
    }

    var para = document.querySelector(".result").innerHTML=result;
    
}







