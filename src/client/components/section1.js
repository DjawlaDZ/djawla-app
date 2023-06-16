import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from './images/Wilaya-dAlger.jpg'

export default function Section1() {
    return (
        <section className='py-16'>
            <div className='container mx-a md:px-20'>
                <div className='grid md:grid-cols-2'>
                    <div className='image px-2'>
                        <Link href={"/"}><Image src={img} width={600} height={600} /></Link>
                    </div>
                    <div className='info flex justify-center flex-col px-2 md:pt-2'>
                        <div className='title'>
                            <Link href={"/"}><div className='text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600'>MÉMORIAL DU MARTYR</div></Link>
                        </div>
                        <p className='text-gray-500 py-3'>
                        est un monument aux morts surplombant la ville d'Alger, érigé en 1982 à l'occasion du 20e anniversaire de l'indépendance de l'Algérie (5 juillet 1962), en mémoire des chahids, les combattants de la guerre d'indépendance algérienne morts pour la libération du pays.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
