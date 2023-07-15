import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from'./footer.module.css';
import Card from "react-bootstrap/Card";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

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

    return (
            <div className="text-center p-1 bgTherd" id={styles.footer}>
                <div className={styles.cards}>

                    <Card className={styles.card}>
                        <h1 className={styles.title}>Elegance Rommanel</h1>
                        <p>Rod.Amaral Peixoto, 5223</p> 
                        <p>Centro </p> 
                        <p>Rio das Ostras - RJ, 28890-000</p>  
                    </Card>

                    <Card className={styles.card}>
                        <h1 className={styles.title}>Telefone:</h1>
                        <p>(22)998313480</p>
                        <h1 className={styles.title}>Instagram:</h1>
                        <p>@elegance.rommanel</p>
                    </Card>

                    <Card className={styles.card}>
                        <h1 className={styles.title}>Funcionamento:</h1>
                        <p>Segunda a sexta: 9:30 as 18:00</p>
                        <p>Sábado: 9:30 as 16:00</p>
                        <p>Domingo: Fechado</p>
                    </Card>

                </div>               
                
                <div className={styles.footermob}>

                    <Card className={styles.cardmob}>

                        <button className={styles.titlemob} onClick={handleClick1}>
                            Elegance Rommanel
                            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} size='xl' style={{color:'white'}}></FontAwesomeIcon>
                        </button>

                    </Card>
                    <Card id={styles.cardbutton} className={`${status1 ? styles.footer_visible : styles.footer_hidden}`}>
                        <p >Rod.Amaral Peixoto, 5223</p> 
                        <p >Centro </p> 
                        <p >Rio das Ostras - RJ, 28890-000</p> 
                    </Card>

                    <Card className={styles.cardmob}>

                        <button className={styles.titlemob} onClick={handleClick2}>
                            Telefone
                            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} size='xl' style={{color:'white'}}></FontAwesomeIcon>
                        </button>

                    </Card>
                    <Card id={styles.cardbutton} className={`${status2 ? styles.footer_visible : styles.footer_hidden}`}>
                        <p>(22)998313480</p>
                    </Card>

                    <Card className={styles.cardmob}>

                        <button className={styles.titlemob} onClick={handleClick3}>
                            Instagram
                            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} size='xl' style={{color:'white'}}></FontAwesomeIcon>
                        </button>

                    </Card>
                    <Card id={styles.cardbutton} className={`${status3 ? styles.footer_visible : styles.footer_hidden}`}>
                        <p>@elegance.rommanel</p>
                    </Card>

                    <Card className={styles.cardmob}>

                        <button className={styles.titlemob} onClick={handleClick4}>
                            Funcionamento:
                            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} size='xl' style={{color:'white'}}></FontAwesomeIcon>
                        </button>

                    </Card>
                    <Card id={styles.cardbutton} className={`${status4 ? styles.footer_visible : styles.footer_hidden}`}>
                        <p>Segunda a sexta: 9:30 as 18:00</p>
                        <p>Sábado: 9:30 as 16:00</p>
                        <p>Domingo: Fechado</p>
                    </Card>
                </div>

                <p className='mt-3' style={{ color: "white" }} id={styles.text}>
                    © Copyright 2023 Elegance - All Rights Reserved
                </p>
            </div>
    )
}