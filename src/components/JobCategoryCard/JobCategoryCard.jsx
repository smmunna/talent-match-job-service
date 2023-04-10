import React from 'react';
import Account from '../../assets/Icons/accounts 1.png'
const JobCategoryCard = ({ category }) => {
    const { jobCategoryName, totalJobAvailable, imageLink } = category;
    return (
        <div className='border-2 p-4 leading-normal'>
            <img src={imageLink} alt='' />
            <h3>{jobCategoryName}</h3>
            <p>{totalJobAvailable}+ Jobs Available</p>
        </div>
    );
}

export default JobCategoryCard;
