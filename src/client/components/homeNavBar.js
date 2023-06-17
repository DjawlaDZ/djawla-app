import Link from 'next/link'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { GoSettings } from 'react-icons/go'
import Filter from './filter';


export default function HomeNavBar({ getUrl, getFilter }) {
    const [stat, setStat] = useState(false);
    const [color, setColor] = useState('none');
    const [url, seturl] = useState('');
    const [filter, setFilter] = useState(false);
    const setUrl = (data) => {
        // Process the data received from the child component
        seturl(data);
        getUrl(url);
    };
    const setfilter = (data) => {
        // Process the data received from the child component
        setFilter(data);
        getFilter(filter);
    };

    return (
        <>
            <header className='px-16'>
                <div className='xl:container xl:mx-auto flex flex-col items-center text-center py-6 px-3 sm:flex-row sm:justify-between'>
                    <div className='flex border rounded-xl order-2 flex-row gap-1 items-center px-2  border-slate-300 shadow-sm focus-within:border-sky-500 mt-5 sm:mt-0'>
                        <BsSearch color='#726E75' />
                        <input className='input-text bg-transparent outline-none flex-1 px-3 lg:w-60 py-2 text-sm placeholder-slate-500 ' type="text" placeholder='rechercher ici...' />
                        <GoSettings />
                        <button onClick={() => {
                            setStat(!stat);
                            setFilter(!filter);
                            if (color != '#7DADFE')
                                setColor('#7DADFE');
                            else setColor('none');
                        }} className={`bg-[${color}] rounded-xl px-2`} >filtrer</button>
                        <button className='bg-[#FFAA8B] rounded-full px-2 shadow-sm text-white'>rechercher</button>
                    </div>
                    <div className='shrink w-80 order-1 '>
                        <div className='font-bold text-3xl'>Un Tour en Algérie</div>
                    </div>

                </div>
            </header>
            {stat ? <Filter getUrl={setUrl} getfilter={setfilter}></Filter> : null}
        </>
    )
}
