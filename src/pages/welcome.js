import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import styles from './styles.module.css'
import { useRouter } from 'next/router';
import Section2 from '../client/components/section2';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

const popinsbold = Poppins({
    subsets: ['latin'],
    weight: '700',

});
const popins = Poppins({
    subsets: ['latin'],
    weight: '300',

});


export default function welcomepage() {
    const router = useRouter();
    const [lieux, setLieux] = useState([]);
    const getLieux = async () => {
        try {
          const response = await fetch('/api/lieux', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          return data;
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        const fetchData = async () => {
          try {
            const lieuxData = await getLieux();
            setLieux(lieuxData.data);
            console.log(lieuxData);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);
    return (
        <div>
        <div className={styles.container}>
            <div className={styles.topbar}>
                <div className={styles.logintext} style={popins} onClick={()=>router.push('/login')}>Login</div>
                <div className={styles.Button} onClick={()=>router.push('/register')}>
                    Register
                </div>
            </div>
            <div style={popinsbold.style} className={styles.title}>Découvrez la beauté
                d'Algérie</div>
            <div className={styles.description} style={popins.style}>Découvrez les merveilles de l'Algérie sur JAWLA !
                De ses plages immaculées aux déserts majestueux,
                en passant par ses sites archéologiques et sa riche culture,
                l'Algérie offre une destination touristique authentique et
                captivante.
                Rejoignez-nous sur JAWLA et préparez-vous à une expérience inoubliable en Algérie
            </div>
        </div>
        <Section2 lieux={lieux} link={"/welcome"}></Section2>
        </div>

    )
}
/*<div style={popinsbold.style} className={styles.title}>Trouver des lieux populaires</div>*/