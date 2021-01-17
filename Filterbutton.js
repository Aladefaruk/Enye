import React from 'react';

const Filterbutton=({filterChange,newprofiles})=> {
    return (
        <div>
        <select id='category'  onChange={(event)=>{filterChange(event); newprofiles()}}>
            <option>Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
        </select>
        </div>
    )
}

export default Filterbutton