function appentToDisplay(value){
    document.getElementById('display').value+=value;
}

//clearDisplay()  //backspace() calculate() calcPercent() 

function clearDisplay(){
    document.getElementById('display').value='';
}

function calculate(){
    try{
        document.getElementById('display').value=eval(document.getElementById('display').value);
    }catch(error){
        document.getElementById('display').value='Error';
    }
}

function calcPercent(){
    try{
        document.getElementById('display').value=eval(document.getElementById('display').value%=value);
    }catch(error){
        document.getElementById('display').value='Error';
    }
}
