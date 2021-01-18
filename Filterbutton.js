import React from 'react';

const FilterButton = ({filterChange}) => {
    return (
        <div>
            <select id='category' onChange={ event => {filterChange(event)}}>
                <option>Gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
            </select>
        </div>
    );
};

export default FilterButton;