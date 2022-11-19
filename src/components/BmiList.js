import React from 'react'

function BmiList({range}) {
    console.log(range)
  return (
    <div className='text-center shadow-sm rounded'>
        <ul className='list-group'>
            <li className='list-group-item'>
                <div className='row'>
                    <div className='row'>
                        <div className='col-4 fw-bold'>Type</div>
                        <div className='col-4 fw-bold'>BMI</div>
                        <div className='col-4 fw-bold'>WEIGHT</div>
                    </div>
                </div>
            </li>
            <li className='list-group-item'>
                <div className='row'>
                    <div className='col-4'>UnderWeight</div>
                    <div className='col-4'>&It; 18.5</div>
                    <div className='col-4'>{range.underWeight.low} kg </div>
                </div>
            </li>
            
            <li className='list-group-item'>
                <div className='row'>
                    <div className='col-4'>Normal</div>
                    <div className='col-4'> 18.5</div>
                    <div className='col-4'>{range.normal.low + 'kg'+range.normal.high+'kg'}</div>
                </div>
            </li>
            <li className='list-group-item'>
                <div className='row'>
                    <div className='col-4'>Over weight</div>
                    <div className='col-4'> 25-29.9</div>
                    <div className='col-4'>{range.overWeight.low + 'kg'+range.overWeight.high+'kg'}</div>
                </div>
            </li>
            <li className='list-group-item'>
                <div className='row'>
                    <div className='col-4'>Obesity class I</div>
                    <div className='col-4'> 30-34.9</div>
                    <div className='col-4'>{range.obesityOne.low + 'kg'+range.obesityOne.high+'kg'}</div>
                </div>
            </li>
            <li className='list-group-item'>
                <div className='row'>
                    <div className='col-4'>Obesity class II</div>
                    <div className='col-4'> 35-39.9</div>
                    <div className='col-4'>{range.obesityTwo.low + 'kg'+range.obesityTwo.high+'kg'}</div>
                </div>
            </li>
            <li className='list-group-item'>
                <div className='row'>
                    <div className='col-4'>Obesity class III</div>
                    <div className='col-4'>&gt;40</div>
                    <div className='col-4'>{range.obesityThree.low + 'kg'}</div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default BmiList