import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from'./footer.module.css';
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
                         <p className='fs-5'>Telefone:</p>
                         <p className='fs-6'>(22)998313480</p>
                         <p className=' fs-5'>Instagram:</p>
                         <p className='fs-6'>@elegance.rommanel</p>
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
                <div className={styles.footermob}>

                    <div className='text-center'>
                        <div className={styles.cardmob}>

                            <h1 className='fs-6'>Elegance Rommanel</h1>
                            <p >Rod.Amaral Peixoto, 5223, Centro</p> 
                            <p >Rio das Ostras - RJ, 28890-000</p> 

                        </div>

                        <div className={styles.cardmob}>

                            <h1 className='fs-6'>Funcionamento</h1>
                            <p>Segunda a sexta: 9:30 as 18:00</p>
                            <p>Sábado: 9:30 as 16:00</p>
                            <p>Domingo: Fechado</p>
                        
                        </div>
                    </div>

                    <div className={styles.cardmob_icons}>
                        <div className={styles.cardmob_iconsindividual}>
                            <FontAwesomeIcon className={styles.icon} icon={faWhatsapp} size='xl' style={{color:'white'}}></FontAwesomeIcon>
                            <p className='px-1'>(22)998313480</p>
                        </div>
                        <div className={styles.cardmob_iconsindividual}>
                            <FontAwesomeIcon className={styles.icon} icon={faInstagram} size='xl' style={{color:'white'}}></FontAwesomeIcon>
                            <p className='px-1'>@elegance.rommanel</p>
                        </div>
                       
                    </div>
                    
                </div>

                <p className='mt-3 text-center' style={{ color: "white"}} id={styles.text}>
                    © Copyright 2023 Elegance - All Rights Reserved
                </p>
            </div>
    )
}