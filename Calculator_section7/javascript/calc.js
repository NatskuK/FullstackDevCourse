/*
Variating exercise, instead of % calculating 
1. Sum of X and Y
2. Product of X and Y
*/

var numFieldX = document.getElementById('numFieldX');
var numFieldY = document.getElementById('numFieldY');
var resultField = document.getElementById('resultField');
var form = document.getElementById('CalculateForm');
var Selected = document.getElementById('Selected');

form.addEventListener('submit', function(event) {
    if (!numFieldX.value || !numFieldY.value){
        alert("Please enter the numbers");
    } else{
        var x = parseFloat(numFieldX.value); // parse string to be float number
        var y = parseFloat(numFieldY.value);  
        var result = 0;
        
        if(parseInt(Selected.value) === 1)
            result = x + y ; //sum if option 1 selected
        else if(parseInt(Selected.value) === 2)
            result = x * y; //product if option 2 selected
        
        resultField.innerHTML = "Result is " + result;
        event.preventDefault(); //stop refreshing page
    }  
})
