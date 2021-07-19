import React from 'react'
import img from '../../assets/iphonehero.jpg'
import styles from './hero.module.css'


const Hero = () => {
    return (
        <div>
            <img src={img} alt="hero" className={styles.hero}/>
        </div>
    )
}

export default Hero
