import React, { useState } from 'react'

function Form({getData}) {
    const [Weight, setWeight] = useState('')
    const [Hight, setHight] = useState('')
    const [Alert,setAlert] = useState(false)

    const getWeight = (e) => {
        console.log(e.target.value)
        setWeight(e.target.value)
    }

    const onsubmit = (e) => {
        e.preventDefault()
        if(isNaN(Weight) || isNaN(Hight)){
            console.log("invalied number")
            setAlert(true)
        }else{
            getData(Weight,Hight)

            console.log("it is a number")
            setAlert(false)
        }
     
    }

//one methord note recomented
    // let alertMessage
    // if(Alert){
    //     alertMessage=<div className='alert alert-danger' role="alert">plz enter valid number</div>
    // }else{
    //     alertMessage=""
    // }

    return (

        <div className='col-sm-4 shadow rounded px-5'>
            <form  onSubmit={onsubmit}>
                <h1 className='text-center pt-3 text-secondary h2'> BMI calculator</h1>
                <div className='row'>
                    <div className='col col-sm-6'>
                        <div className='my-3'>
                            <label className="sr-only">Weight (kg)</label>
                            <input type="text" value={Weight} onChange={getWeight} className="form-control"   required />
                        </div>
                    </div>

                    <div className='col col-sm-6'>
                        <div className='my-3'>
                            <label for="inputPassword2" className="sr-only">Hight(m):</label>
                            <input type="text" value={Hight} onChange={(e) => setHight(e.target.value)} className="form-control"   required />

                        </div>
                    </div>
                </div>
                <input
                    type="submit"
                    className="btn btn-primary my-3"
                    value="Get BMI" />

                {/* <button type="submit" class="btn btn-primary mb-2">Confirm identity</button> */}
            </form>
            {/* {Alert===true ?<div className='alert alert-danger' role="alert">plz enter valid number</div> : null} */}
            {/* {alertMessage} */}
            {Alert &&<div className='alert alert-danger' role="alert">plz enter valid number</div> }

        </div>
    )
}

export default Form