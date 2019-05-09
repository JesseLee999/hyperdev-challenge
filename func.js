function number(value){
    document.form1.result.value +=value;
}
function cle(value){
    document.form1.result.value =value;
}
function evalua(){
    //var evalu = eval(document.form1.result.value);
    document.form1.result.value = eval(document.form1.result.value);
};

var button = document.getElementById('button'); // Assumes element with id='button'

button.onclick = function() {
    var div = document.getElementById('content');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}
