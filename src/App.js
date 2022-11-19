
import { useState } from 'react';
import './App.css';
import BmiList from './components/BmiList';
import BmiScore from './components/BmiScore';
import Form from './components/Form'

function App() {
  //state
  const [BMI, setBmi] = useState("00")
  const [BmiType, setBmiType] = useState("Not calculated")
  const [bmiRange,setBmiRang] = useState({
    underWeight:{low:''},
    normal:{low:'',high:''},
    overWeight:{low :'',high:''},
    obesityone:{low :'',high:''},
    obesityTwo:{low :'',high:''},
    obesityThree:{high:''},

  })
  const onFormSub = (w, h) => {
    let b=calBmi(w,h)
    setBmi(b)
    let bType= weightType(b)
    setBmiType(bType)
    console.log(w, h)
  }

  const calBmi=(w,h)=>{
    return (w /(h*h)).toFixed(2)
  }

  const weightType = (bmi)=>{
    if(bmi< 18.5){
      return "under weight"
    }else if(18.5 <bmi && bmi < 24.9){
      return "Normal"
    }else if(24.9 <bmi && bmi < 29.9){
      return "Over Weight"
    }else if(29.9 <bmi && bmi < 34.9){
      return "Obesity class I"
    }else if(34.9 <bmi && bmi < 39.9){
      return "Obesity class II"
    }else if( bmi > 39.9){
      return "Obesity class III"
    }
  }

  // userState
  // let BMI= 39

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center mt-5 mx-2 ' >
          <Form getData={onFormSub} />
        </div>

        <div className='row justify-content-center mt-5'>
          <div className='col-12 col-sm-6 mb-5'>
            <BmiScore bmiNo={BMI} BmiName={BmiType} />
          </div>

          <div className='col-12 col-sm-6'>
          <BmiList />
        </div>
        </div>
      </div>
    </>

  );
}

export default App;
