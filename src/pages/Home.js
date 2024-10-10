import React from 'react';

import 'react-toastify/dist/ReactToastify.css';

const Homepage = () => {
    const data = [
        {
            id: 1,
            name: 'John Doe',
            location: 'USA',
            events: "September 13, 2022: Micro Frontends for Java Developers",
        },
        {
            id: 2,
            name: 'Jane Doe',
            location: 'USA',
            events: "September 14, 2022: Micro Frontends for Java Developers",
        },
        {
            id: 3,
            name: 'John Doe',
            location: 'USA',
            events: "September 15, 2022: Micro Frontends for Java Developers",
        }
    ];




    return (
        <div>
            <div className='flex justify-between p-4 items-center'>
                <h1 className="text-2xl font-bold">Homepage</h1>
                <div className=''>
                    <button className=' rounded-md bg-green-700 text-white p-2'>Add Group</button>
                </div>
            </div>

            <div className='p-4'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='border p-2'>Name</th>
                            <th className='border p-2'>Location</th>
                            <th className='border p-2'>Events</th>
                            <th className='border p-2'>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td className='border p-2'>{item.name}</td>
                                <td className='border p-2'>{item.location}</td>
                                <td className='border p-2'>{item.events}</td>
                                <td className='border p-2 rounded-md'>
                                    <button className='bg-blue-700 text-white p-2 rounded-l-lg'>Edit</button>
                                    <button className='bg-red-700 text-white p-2 rounded-r-lg'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Homepage;
