import styles from'./footer.module.css';


export default function Footer() {
    //! Solucionar por que a div do texto não está pegando o bg certo.

    return (
        <div className="z-1 p-1 bgTherd" id={styles.footer}>
            
            <div className='m-0 p-0'>

                <div className={styles.cards}>

                    <div className={styles.card}>
                        <p>
                           Rod.Amaral Peixoto, 5223 Centro 
                           Rio das Ostras - RJ, 28890-000
                        </p>  
                    </div>


                    <div className={styles.card}>
                        <p>
                           Segunda a sexta: 9:30 às 18:00 |
                           Sábado: 9:30 às 16:00 | Domingo: Fechado
                        </p>
                    </div>

                    <div className={styles.card}>
                        <p>Telefone: (22)998313480</p>
                    </div>

                </div>               
                
            </div>
            
                {/* footermob */}
                <div className={styles.footermob}>

                    <div className='text-center'>

                        <div className={styles.cardmob}>
                            <p>
                                Rod.Amaral Peixoto, 5223, Centro
                                Rio das Ostras - RJ, 28890-000
                            </p>     
                        </div>

                        <div className={styles.cardmob}>
                            <p>
                                Segunda a sexta: 9:30 às 18:00 | 
                                Sábado: 9:30 às 16:00 | Domingo: Fechado
                            </p>
                        </div>

                        <div className={styles.cardmob}>
                            <p>Telefone: (22)998313480</p>
                        </div>

                    </div>

                </div>

                <p className='mt-3 text-center' style={{ color: "white"}} id={styles.text}>
                    © Copyright 2023 Elegance - All Rights Reserved
                </p>
            </div>
    )
}