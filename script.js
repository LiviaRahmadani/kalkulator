function insert(num){
    document.form.textarea.value = document.form.textarea.value + num;
}

function equal(){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = eval(hasil);
}


function clean(){
    document.form.textarea.value = "";
}


function back(){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = hasil.substring(0,hasil.length-1);
}

function ValidateInput (value) {
    let last_input = input.slice(-1);
    let operators = ["+","-","*","+"];

    if (value == "." && last_input == ".") {
        return false;
    }

    if (operators.includes(value)) {
        if (operators.includes(last_input)) {
            return false;
        } else {
            return true;
        }
    }

    return true
}