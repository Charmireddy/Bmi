import React, { useState } from 'react'
import './Bmi'
function Bmi() {
    const [heightValue, setHeightValue] = useState('');
    const [weightValue, setWeightValue] = useState('');
    const [bmiValue, setBmiValue] = useState('');
    const [bmiMessage, setBmiMessage] = useState('');
  
    const calculateBmi = () => {
        if (heightValue && weightValue) {
            const heightInMeters = heightValue / 100;
            const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
            
            setBmiValue(bmi);
  
            let message = '';
           
            if (bmi < 18.5)
             {
                message = 'You are Underweight';
             }else if (bmi >= 18.5 && bmi <= 25) {
                message = 'You are Normal weight';
            } else if (bmi >= 25 && bmi <= 30) {
                message = 'You are Overweight';
            } else {
                message = 'you are obese';
            }
            setBmiMessage(message);
        } else {
            setBmiValue('');
            setBmiMessage('');
        }
    

    };
  
    return (
        <div className="Main">
        <div className="container">
            <h1> BMI Calculator</h1>
            <div className="input-container">
                <label htmlFor="height">Enter Your Height (cm):</label>
                <input
                    type="number"
                    id="height"
                    value={heightValue}
                    onChange={(e) => setHeightValue(e.target.value)}
                />
            </div>
            <div className="input-container1">
                <label htmlFor="weight">Enter Your Weight (kg):</label>
                <input
                    type="number"
                    id="weight"
                    value={weightValue}
                    onChange={(e) => setWeightValue(e.target.value)}
                />
            </div>
            <button className="calculate-btn" onClick={calculateBmi}>
                Click to Calculate BMI
            </button>
            {bmiValue && bmiMessage && (
                <div className="result">
                    <p>
                        Your BMI: <span className="bmi-value">{bmiValue}</span>
                    </p>
                    <p>
                        Result: <span className="bmi-message">{bmiMessage}</span>
                    </p>
                </div>
            )}
        </div>
        </div>
    );
}
export default Bmi