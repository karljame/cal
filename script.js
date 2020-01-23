function Calculate(operator){
    var A = parseInt(formXD.first.value);
    var B = parseInt(formXD.second.value);
    var result;

    switch(operator)
    {
        case '+':
            result=A+B;
            break;
        case '-':
            result=A-B;
            break;
        case '*':
            result=A*B;
            break;
        case '/':
            if(B==0){
                alert('HAHAHAHAHH SO SMART XDDDDD');
            }
            else{
            result=A/B;
            break;
            }
    }
    formXD.answer.value = result;
}
