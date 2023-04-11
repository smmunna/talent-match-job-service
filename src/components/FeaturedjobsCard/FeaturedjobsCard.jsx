import React from 'react';
import Google from '../../assets/Logo/google-1-1 1-1.png';
import Location from '../../assets/Icons/Location Icon.png';
import Dollar from '../../assets/Icons/Frame.png';

const FeaturedjobsCard = ({ featurejob }) => {
    const { title, image, company, type, salary, location } = featurejob;
    return (
        <div>
            <div className='border-2 p-4 h-full'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='py-2'>
                    <h2 className='text-lg font-semibold'>{title}</h2>
                    <p>{company}</p>
                </div>
                <div className='flex gap-3 text-blue-600'>
                    <div className='border-2 border-blue-300 p-2'>{type.remote}</div>
                    <div className='border-2 p-2 border-blue-300'>{type.fullTime}</div>
                </div>
                <div className='py-2 flex gap-3'>
                    <div className='flex gap-1'>
                        <img src={Location} alt="" />
                        {location}
                    </div>
                    <div className='flex gap-1'>
                        <img src={Dollar} alt="" />
                        Salary: {salary}
                    </div>
                </div>
                <div className='py-2'>
                    <button className='px-4 py-3 rounded text-white bg-primary text-sm'>View Details</button>
                </div>
            </div>
        </div>
    );
}

export default FeaturedjobsCard;
