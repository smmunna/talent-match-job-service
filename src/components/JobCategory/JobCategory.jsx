import React from 'react';
import JobCategoryCard from '../JobCategoryCard/JobCategoryCard';
import { useLoaderData } from 'react-router-dom';

const JobCategory = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className='text-center pt-12'>
                <h1 className='text-4xl my-4 font-bold'>Job Category List</h1>
                <p className='mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-5'>
                {
                    data.map(category =>
                        <JobCategoryCard
                            key={category.id}
                            category={category}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default JobCategory;
