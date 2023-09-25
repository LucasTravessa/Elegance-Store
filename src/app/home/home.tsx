import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <div className={`bgPrimary mw-100 pt-5 ${styles.containerFather}`}>
        <div className={`pt-4 d-flex flex-row ${styles.container}`}>
          <div className={`${styles.left}`}>
            <div className={`${styles.text}`}>
              <p>
                Somos uma loja especializada em joias de prata e Rommanel,
                oferecendo uma ampla variedade de produtos elegantes e
                sofisticados para quem busca qualidade e beleza em suas peças.
                <br></br>
                Com uma seleção cuidadosa de itens, nossos clientes podem
                encontrar desde colares e brincos até pulseiras e anéis, sempre
                com um acabamento impecável e design exclusivo.<br></br>
                Além disso, nossa equipe está sempre pronta para oferecer um
                atendimento personalizado e ajudar a escolher a peça perfeita
                para cada ocasião.
              </p>
              <p>
                Venha conhecer a Elegance e se encantar com nossas joias de alta
                qualidade e bom gosto.
              </p>
            </div>

            <div
              className={`bgButton d-flex justify-content-center ${styles.buttom}`}
            >
              <h4 className={`${styles.buttomText}`}>ACESSE NOSSA LOJA</h4>
            </div>
          </div>
          <div className={`${styles.right}`}></div>
        </div>
      </div>
    </>
  );
}
