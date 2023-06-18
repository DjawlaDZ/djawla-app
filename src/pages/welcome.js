import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import styles from './styles.module.css'

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
    return (

        <div className={styles.container}>
            <div className={styles.topbar}>
                <div className={styles.logintext} style={popins}>Login</div>
                <div className={styles.Button}>
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

    )
}
/*<div style={popinsbold.style} className={styles.title}>Trouver des lieux populaires</div>*/