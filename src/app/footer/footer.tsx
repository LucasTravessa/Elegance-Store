import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from'./footer.module.css';
import Card from "react-bootstrap/Card";
import { faWhatsapp, faInstagram, } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
            <div className="z-1 p-1 bgTherd" id={styles.footer}>
                <div className='text-center'>
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
                
                </div>
                {/* footermob */}
                <div className={styles.footermob} style={{zIndex: '1'}}>

                    <div className='text-center'>
                        <Card className={styles.cardmob}>

                            <h1 className='fs-6'>Elegance Rommanel</h1>
                            <p >Rod.Amaral Peixoto, 5223</p> 
                            <p >Centro </p> 
                            <p >Rio das Ostras - RJ, 28890-000</p> 

                        </Card>

                        <Card className={styles.cardmob}>

                            <h1 className='fs-6'>Funcionamento</h1>
                            <p>Segunda a sexta: 9:30 as 18:00</p>
                            <p>Sábado: 9:30 as 16:00</p>
                            <p>Domingo: Fechado</p>
                        
                        </Card>
                    </div>

                    <Card className={styles.cardmob_icons}>
                        <div className={styles.cardmob_icons}>
                            <FontAwesomeIcon className={styles.icon} icon={faWhatsapp} size='xl' style={{color:'white'}}></FontAwesomeIcon>
                            <p>-(22)998313480</p>
                        </div>
                        <FontAwesomeIcon className={styles.icon} icon={faInstagram} size='xl' style={{color:'white'}}></FontAwesomeIcon>
                        <p>@elegance.rommanel</p>
                       
                    </Card>
                    
                </div>

                <p className='mt-3 text-center' style={{ color: "white"}} id={styles.text}>
                    © Copyright 2023 Elegance - All Rights Reserved
                </p>
            </div>
    )
}