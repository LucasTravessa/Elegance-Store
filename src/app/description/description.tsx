import styles from './description.module.css';

export default function Description() {
    return(
        <div className={`bgPrimary ${styles.cardFather}`}>
            <div className={`bgSecundary ${styles.card}`}>
                <div className={`${styles.title}`}>
                    <h1>Sobre os nossos produtos</h1>
                </div>
                <div className={`${styles.text}`}>
                    <p>
                        Sensibilidade, delicadeza e inovação: esses são os pilares criativos que norteiam o processo de desenvolvimento das peças Rommanel. 
                        Todas as nossas joias são pensadas, desenhadas e fabricadas para transcender culturas, lugares e sobretudo eternizar momentos.
                        Produzimos joias folheadas a Ouro 18K e à Platina utilizando a técnica de galvanoplastia (técnica de eletrodeposição), 
                        além de joias em Aço e joias em Prata 925.
                    </p>
                </div>
            </div>
        </div>
    );
}