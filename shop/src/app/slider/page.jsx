"use client";
import { useState } from 'react';
import styles from './slider.module.css';
import Image from 'next/image';
import { useEffect } from 'react';


const Slider = (props) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);


    const onClickArrowNext = () => {        
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };
    
    const onClickArrowPrev = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        };

return (
    <div className={styles.slider_wrap}>
        <div className={styles.slider__icons} >
            <svg onClick={onClickArrowPrev} className={styles.arrow_left}data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <title/>
            <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"/>
            <path d="M74.12,35.88a3,3,0,0,0-4.24,0l-26,26a3,3,0,0,0,0,4.24l26,26a3,3,0,0,0,4.24-4.24L50.24,64,74.12,40.12A3,3,0,0,0,74.12,35.88Z"/>
            </svg>
{props.productImg?.length > 0 && (
    <Image src={props.productImg[currentIndex]} alt="icon" className={styles.slider__main_img}/>
)}
            <svg onClick={onClickArrowNext} className={styles.arrow_right} data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <title/>
            <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"/>
            <path d="M58.12,35.88a3,3,0,0,0-4.24,4.24L77.76,64,53.88,87.88a3,3,0,1,0,4.24,4.24l26-26a3,3,0,0,0,0-4.24Z"/>
            </svg>
        </div>

    <section className={styles.slider__next}>
    
            {/* {props.productImg && props.productImg.map((img, index) => {
                let position = styles.nextSlide;
                if(index === currentIndex) {
                    position = styles.activeSlide;
                }
                if(index === currentIndex -1 || (currentIndex === 0 && index === props.productImg.length -1)) {
                    position = styles.lastSlide;
                }
            //    else {
            //     position = styles.nextSlide;
            //    }
                return (
                <div key={index} className={position}>
                    <Image src={img} alt="icon" className={styles.slider__next_img} />
                </div>
                )
            })} */}
            {props.productImg.map((img, index) => {
                let position;
                if(index === currentIndex) {
                    position = styles.activeSlide;
                }else {
                    position = styles.nextSlide;
                }
                return (
                    <div key={index} className={position}>
                    <Image src={img} alt="icon" className={styles.slider__next_img} />
                </div>
                )
            })}

    <svg onClick={onClickArrowPrev} className={styles.arrow_left_mini}data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <title/>
            <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"/>
            <path d="M74.12,35.88a3,3,0,0,0-4.24,0l-26,26a3,3,0,0,0,0,4.24l26,26a3,3,0,0,0,4.24-4.24L50.24,64,74.12,40.12A3,3,0,0,0,74.12,35.88Z"/>
            </svg>
    <svg onClick={onClickArrowNext} className={styles.arrow_right_mini} data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <title/>
            <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"/>
            <path d="M58.12,35.88a3,3,0,0,0-4.24,4.24L77.76,64,53.88,87.88a3,3,0,1,0,4.24,4.24l26-26a3,3,0,0,0,0-4.24Z"/>
            </svg>
    </section>
    </div>
)
}

export default Slider;