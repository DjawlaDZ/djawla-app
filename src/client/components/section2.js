import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart, } from 'react-icons/ai'
import { BsPin, BsPinMap, BsPinMapFill } from 'react-icons/bs'
import { FiMapPin } from 'react-icons/fi'
import { MdFavorite, MdPin, } from 'react-icons/md'

export default function Section2({lieux}) {
    

    return (
        <div className='container mx-auto md:px-20 py-10 px-16'>
            <h1 className='font-bold text-4xl text-center pb-4'>Les lieux les plus populaires</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
                {lieux && lieux.map((lieu)=>{return(<Post key={lieu.id} data={lieu} />)})}
            </div>
        </div>
    )
}
function Post({data}) {
    const [stat,setStat]=useState(false);
    return (
        <div className='item'>
            <div className='image'>
                <Link href={"/"}><img src={data.imagesUrl[0]} className='rounded' width={500} height={350} /></Link>
            </div>
            <div className='info flex justify-center flex-col py-4 '>
                <div className='cat flex gap-2'>
                    <div className=''>
                    <div className='title flex gap-2'>
                            <Link href={"/"}><div className='text-xl font-bold'>{data.nom}</div></Link>
                            
                        </div>
                        {data.wilaya && <div className='title flex gap-2' >
                            <FiMapPin size={20}
                        color='#7DADFE'/>
                            <div>{data.wilaya}</div></div>}
                        {data.categorie && <div className='cat flex gap-2'>
                        <label>Catégorie:</label>
                            {data.categorie
                            &&data.categorie.map((value, index)=>{return(<div key={index} className='bg-[#FFAA8B] text-white rounded-xl px-2'>{value}</div>)})}
                        </div>}
                        {data.theme && <div className='cat flex gap-2'>
                        <label>Thème :</label>
                            {data.theme
                            &&data.theme.map((value, index)=>{return(<div key={index} className='bg-[#7DADFE] text-white rounded-xl px-2'>{value}</div>)})}
                        </div>}
                    </div>
                    <div >
                        {!stat ?
                        <AiOutlineHeart
                        size={40}
                        color='#FFAA8B'
                        className='cursor-pointer'
                        onClick={()=>setStat(!stat)}/>
                        :
                        <MdFavorite
                        size={40}
                        color='#FFAA8B'
                        className='cursor-pointer'
                        onClick={()=>setStat(!stat)}
                        />}
                    </div>
                </div>
            </div>
        </div>
    )
}
