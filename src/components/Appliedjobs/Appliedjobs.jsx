import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../fakedb';

const Appliedjobs = () => {
    const [mydata, setMydata] = useState([]);
    const [localId, setLocalId] = useState();
    const [newData, setNewdata] = useState([]);

    let localData = getShoppingCart();

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setMydata(data))
    }, [])

    useEffect(() => {
        const filteredData = [];
        for (const id in localData) {
          const job = mydata.find(data => data.id === id);
          if (job) {
            filteredData.push(job);
          }
        }
        setNewdata(filteredData);
      }, [localData]);

    return (
        <div className='p-5 md:px-16 mt-5'>
            <h3 className='text-center font-bold py-5 text-3xl'>Applied Jobs</h3>
            <hr />

            {newData.map(data => (
                <div key={data.id}>
                    <div className='border-2 p-4 m-2 grid grid-cols-1 md:grid-cols-3  items-center'>
                        <div>
                            <img src={data.image} alt="" />
                        </div>
                        <div>
                            <h2>{data.title}</h2>
                            <h2>{data.company}</h2>
                            <div className='flex gap-3'>
                                <div>{data.type.remote}</div>
                                <div>{data.type.fullTime}</div>
                            </div>
                            <div className='flex gap-3'>
                                <div>{data.location}</div>
                                <div>{data.salary}</div>
                            </div>
                        </div>
                        <div>
                            <button disabled className='px-4 py-3 rounded text-white bg-primary text-sm w-52 mt-4'>Apply Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Appliedjobs;
