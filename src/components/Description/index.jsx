import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function index() {

    const phrase = "Where  Hate  would  have  been  rare. Where  Love  would  have  been  real. Where  You  are  not  You  and  I  am  not  Me.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>SO  WHAT'S  YOUR  ESCAPE ?</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                    <p>
            <a href="https://whatabouttoday022.blogspot.com/?m=1" target="_blank" rel="noopener noreferrer">
                My Blog
            </a>
        </p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
