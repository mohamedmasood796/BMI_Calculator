import React from 'react'

function BmiScore(props) {
    
    const { bmiNo, BmiName } = props
    return (
        <div className='rounded text-center shadow p-4'>
            <div>Your BMI Score </div>
            <div className='row justify-content-md-center'>
                <div className='p-3 my-2 alert fs-1 alert-primary col-sm-4 '>{bmiNo}</div>
            </div>
            <div className='fs-3 fw-bold text-primary'>{BmiName}</div>
        </div>
        // <div>

        //     BmiScore{bmiNo} <br/>
        //     Bmi type{BmiName}
        // </div> 
    )
}

export default BmiScore