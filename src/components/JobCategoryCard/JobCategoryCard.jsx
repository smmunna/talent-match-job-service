import React from 'react';
const JobCategoryCard = ({ category }) => {
    const { jobCategoryName, totalJobAvailable, imageLink } = category;
    return (
        <div className='border-2 p-4 '>
            <img src={imageLink} alt='' />
            <h3 className='font-bold my-2'>{jobCategoryName}</h3>
            <p>{totalJobAvailable} Jobs Available</p>
        </div>
    );
}

export default JobCategoryCard;
