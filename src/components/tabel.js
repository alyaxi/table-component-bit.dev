import React from 'react'
import "../App.css"
function Tabel({data}) {
    return (
        <table>
        <thead>
            <tr>  
                <th>Name</th>   
                <th>Registered Course</th>
            </tr>
        </thead>            
        <tbody>
        {data ? <RenderTableData data={data}/>: 
            <tr>
                <td>No User name avaialable</td>
                <td>No User course avaialable</td>
            </tr>}
        </tbody>
    </table>
    )
}
function RenderTableData ({data}) {
    return (
        <>
         {data.map((stdData, id) => (
             <tr>
                 <td>{stdData.name}</td>
                 <td>{stdData.course}</td>
             </tr>
             
         ))}
        </>
    )
}
export default Tabel
