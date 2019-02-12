var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('CalculateForm');

form.addEventListener('submit', function(event) {
    if (!numField1.value || !numField2.value){
        alert("Please enter the numbers");
    } else{
        var x = parseFloat(numField1.value); // parse string to be float number
        var y = parseFloat(numField2.value);  
        
        var result = x / y * 100;
        resultField.innerHTML = "Result is " + result + "%";
        event.preventDefault(); //stop refreshing page
    }
    
})
