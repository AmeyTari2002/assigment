import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ScreenCard = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc')
            .then(response => {
                setData(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Check if data is available before accessing its properties



    return (
        <div >
            {data && (
                data.map((value, index) => (
                    <div key={index}> 
                        <div className='flex flex-col md:flex md:flex-row justify-center items-center mx-auto w-min gap-10 px-10 py-10 rounded-lg mt-32 md:mt-48  border-2 border-gray-600 shadow-sm shadow-gray-400 '>
                            <div className='h-[250px] w-[250px]'>
                                <img src={value.picture.large} className='h-[100%] ww-[100%] object-fill rounded-lg shadow-sm shadow-gray-400'  alt="" />
                            </div>
                            <div className='flex flex-col gap-6 '>
                                <div className='flex gap-14 justify-start'>
                                    <div >
                                        <h1 className='text-2xl'>{value.name.first}</h1>
                                    </div>
                                    <div>
                                        <h1 className='text-2xl'>{value.name.last}</h1>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-2xl'>{value.gender}</h1>
                                </div>
                                <div>
                                    <h1 className='text-2xl'>{value.phone}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ScreenCard;
