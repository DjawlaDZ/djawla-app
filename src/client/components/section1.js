import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from './images/Wilaya-dAlger.jpg'
import img2 from './images/9349371lpaw-9349412-jpg_4432963.jpg'
import img3 from './images/0e39332954658f0ca0db5744c87ff384.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore,{Autoplay} from 'swiper'
import 'swiper/css'

export default function Section1() {
    SwiperCore.use([Autoplay]);
    const data=[{image:img,titre:'MÉMORIAL DU MARTYR',text:" est un monument aux morts surplombant la ville d'Alger, érigé en 1982 à l'occasion du 20e anniversaire de l'indépendance de l'Algérie (5 juillet 1962), en mémoire des chahids, les combattants de la guerre d'indépendance algérienne morts pour la libération du pays."},
    {image:img2,titre:"JARDIN D'ESSAI",text:"Le jardin d'essai du Hammaa, situé dans le quartier du Belouizdad à Alger, est un jardin luxuriant, qui s'étend en amphithéâtre, au pied du musée national des Beaux-Arts, de la rue Mohamed-Belouizdad à la rue Hassiba-Ben-Bouali.Créé en 1832, il est considéré comme l'un des jardins d'essai et d'acclimatation les plus importants au monde."},
    {image:img3,titre:"HOGGAR",text:"Le Hoggar est un massif ancien formé de plateaux étagés de granites et de gneiss, et dominés par des crêtes ou des pitons. La partie culminante, la Koudiat, au-dessus de Tamanrasset, est constituée par un massif volcanique démantelé, composé de coulées basaltiques et d'étranges pitons (le Tahat atteint 2 918 m). Le massif est limité par les escarpements et les plateaux des tassili."}];
    return (
        <section className='py-16'>
            <div className='container mx-a md:px-20'>
            <Swiper 
                    slidesPerView={1}
                    pagination={{clickable:true}}
                    autoplay={{delay:10000}}
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {data.map((d)=>{return(<SwiperSlide><Slide image={d.image} text={d.text} titre={d.titre}></Slide></SwiperSlide>)})}
                </Swiper>
            </div>
        </section>
    )
}
function Slide({titre,image,text})
{
    return(
        <div className='grid md:grid-cols-2'>
                    <div className='image px-2'>
                        <Link href={"/home"}><Image src={image} width={600} height={600} /></Link>
                    </div>
                    <div className='info flex justify-center flex-col px-2 md:pt-2'>
                        <div className='title'>
                            <Link href={"/home"}><div className='text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600'>{titre}</div></Link>
                        </div>
                        <p className='text-gray-500 py-3'>{text}
                        </p>
                    </div>
                </div>
    );
}
