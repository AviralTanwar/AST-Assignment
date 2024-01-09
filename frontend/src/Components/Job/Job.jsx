import React from 'react'
import "./job.css"

const Job = () => {
  return (
    <div className='job_pg'>
        <h1>Job Name</h1>
        <form>
            <div className='input_holder'>
                <div>
                    <label>Job Name:</label>
                    <input type='text' placeholder='Job Name'/>
                </div>
                <div>
                    <label>Link:</label>
                    <input type='text' placeholder='Link'/>
                </div>
            </div>
             <div className='input_holder'>
                <div>
                    <label>Salary:</label>
                    <input type='text' placeholder='Salary'/>
                </div>
                <div>
                    <label>Company:</label>
                    <input type='text' placeholder='Company'/>
                </div>
            </div>
            <div className='btn_holder'>
                <button className='btn_update'>Update</button>
                <button className='btn_delete'>Delete</button>
            </div>
        </form> 
    </div>
  )
}

export default Job