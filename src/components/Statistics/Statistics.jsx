import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const data = [
        {
            name: "A1",
            marks: 60,
        },
        {
            name: "A2",
            marks: 57,
        },
        {
            name: "A3",
            marks: 60,
        },
        {
            name: "A4",
            marks: 55,
        },
        {
            name: "A5",
            marks: 56,
        },
        {
            name: "A6",
            marks: 53,
        },
        {
            name: "A7",
            marks: 60,
        },
        {
            name: "A8",
            marks: 60,
        },
    ];

    return (
        <div className='p-3 lg:px-16'>
            <h3 className='text-center font-semibold text-2xl py-5'>All of My Assignment Marks (A1-A8)</h3>
            <hr className='mb-5' />
            <ResponsiveContainer width='100%' height={200}>
                <AreaChart
                    width={500}
                    height={200}
                    data={data}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Statistics;
