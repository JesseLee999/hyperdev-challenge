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

function myFunction() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
       }
    }
