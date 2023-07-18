import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from'./footer.module.css';
import Card from "react-bootstrap/Card";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';


export default function Footer() {
    const [status1, setStatus1] = useState(false);
    const [status2, setStatus2] = useState(false);
    const [status3, setStatus3] = useState(false);
    const [status4, setStatus4] = useState(false);
    
    const handleClick1 = () => {
        setStatus1(!status1);
      }

    const handleClick2 = () => {
        setStatus2(!status2);
    }

    const handleClick3 = () => {
        setStatus3(!status3);
    }

    const handleClick4 = () => {
        setStatus4(!status4);
    }

    const animationProps1 = useSpring({
        height: status1 ? 'auto' : 0,
        opacity: status1 ? 1 : 0,
      });
    
      const animationProps2 = useSpring({
        height: status2 ? 'auto' : 0,
        opacity: status2 ? 1 : 0,
      });
    
      const animationProps3 = useSpring({
        height: status3 ? 'auto' : 0,
        opacity: status3 ? 1 : 0,
      });
    
      const animationProps4 = useSpring({
        height: status4 ? 'auto' : 0,
        opacity: status4 ? 1 : 0,
      });
    

    return (
            <div className="z-1 text-center p-1 bgTherd" id={styles.footer}>
                <div className={styles.cards}>

                    <div className={styles.card}>
                        <h1 className={styles.title}>Elegance Rommanel</h1>
                        <p>Rod.Amaral Peixoto, 5223</p> 
                        <p>Centro </p> 
                        <p>Rio das Ostras - RJ, 28890-000</p>  
                    </div>

                    <div className={styles.card}>
                        <p className='fs-5'>Telefone:<p className='fs-6'>(22)998313480</p></p>
                        <p className=' fs-5'>Instagram:<p className='fs-6'>@elegance.rommanel</p></p>
                    </div>

                    <div className={styles.card}>
                        <h1 className={styles.title}>Funcionamento:</h1>
                        <p>Segunda a sexta: 9:30 as 18:00</p>
                        <p>Sábado: 9:30 as 16:00</p>
                        <p>Domingo: Fechado</p>
                    </div>

                </div>               
                
                {/* footermob */}
                <div className={styles.footermob} style={{zIndex: '1'}}>

                    <Card className={styles.cardmob}>

                        <button className={styles.titlemob} onClick={handleClick1} style={{zIndex: '1'}}>
                            Elegance Rommanel
                            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} size='xl' style={{color:'white'}}></FontAwesomeIcon>
                        </button>

                    </Card>
                    <animated.div style={animationProps1}>
                        <Card id={styles.cardbutton} className={`${status1 ? styles.footer_visible : styles.footer_hidden}`} style={{zIndex: '0'}}>
                            <p >Rod.Amaral Peixoto, 5223</p> 
                            <p >Centro </p> 
                            <p >Rio das Ostras - RJ, 28890-000</p> 
                        </Card>
                    </animated.div>

                    <Card className={styles.cardmob}>

                        <button className={styles.titlemob} onClick={handleClick2} style={{zIndex: '1'}}>
                            Telefone
                            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} size='xl' style={{color:'white'}}></FontAwesomeIcon>
                        </button>

                    </Card>
                    <animated.div style={animationProps2}>
                        <Card id={styles.cardbutton} className={`${status2 ? styles.footer_visible : styles.footer_hidden}`} style={{zIndex: '0'}}>
                            <p>(22)998313480</p>
                        </Card>
                    </animated.div>

                    <Card className={styles.cardmob}>

                        <button className={styles.titlemob} onClick={handleClick3} style={{zIndex: '1'}}>
                            Instagram
                            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} size='xl' style={{color:'white'}}></FontAwesomeIcon>
                        </button>

                    </Card>
                    <animated.div style={animationProps3}>
                        <Card id={styles.cardbutton} className={`${status3 ? styles.footer_visible : styles.footer_hidden}`} style={{zIndex: '0'}}>
                            <p>@elegance.rommanel</p>
                        </Card>
                    </animated.div>

                    <Card className={styles.cardmob}>

                        <button className={styles.titlemob} onClick={handleClick4} style={{zIndex: '1'}}>
                            Funcionamento
                            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} size='xl' style={{color:'white'}}></FontAwesomeIcon>
                        </button>

                    </Card>
                    <animated.div style={animationProps4}>
                    <Card id={styles.cardbutton} className={`${status4 ? styles.footer_visible : styles.footer_hidden}`} style={{zIndex: '0'}}>
                        <p>Segunda a sexta: 9:30 as 18:00</p>
                        <p>Sábado: 9:30 as 16:00</p>
                        <p>Domingo: Fechado</p>
                    </Card>
                    </animated.div>
                </div>

                <p className='mt-3' style={{ color: "white"}} id={styles.text}>
                    © Copyright 2023 Elegance - All Rights Reserved
                </p>
            </div>
    )
}