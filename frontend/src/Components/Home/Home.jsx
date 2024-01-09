import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div className='home'>
        <div className='search_container'>
            <input type='text' placeholder='Search...' className='input_search'/>
        </div>
        <table className='fl-table'>
            <thead>
                <tr>
                    <th></th>
                    <th>Job Name</th>
                    <th>Link</th>
                    <th>Salaries</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>test 1</td>
                    <td>lskdjfklsj</td>
                    <td>slaskldjf</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Home