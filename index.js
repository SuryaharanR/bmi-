const btn1 = document.getElementById('btn1');
const bminput = document.getElementById('result');

const range = document.getElementById('advice');

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);


    const bmi = weight / ((height / 100) * (height / 100));
    const roundedBmi = bmi.toFixed(2); 
    bminput.value = roundedBmi;

    if (bmi < 18.5) {
        range.textContent = "Underweight: It's important to eat a balanced diet and consult with a healthcare provider for personalized advice.";
    }

    else if (bmi >= 18.5 && bmi < 24.9) {
        range.textContent = "Normal weight: Maintain your healthy lifestyle with a balanced diet and regular exercise.";
    }


    else if (bmi >= 25 && bmi < 29.9) {
        range.textContent = "Overweight: Consider adopting a healthier diet and increasing physical activity. Consulting a healthcare provider can provide personalized guidance.";
    }

    else {
        range.textContent = "Obesity: It's advisable to seek guidance from a healthcare provider for a comprehensive plan that includes diet, exercise, and possibly medical intervention.";
    }

}

btn1.addEventListener('click', calculateBMI);