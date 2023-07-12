import styles from'./footer.module.css';

export default function Footer() {
    return (
            <div className="text-center p-1 bgTherd" id={styles.footer}>
            <p className='mt-3' style={{ color: "white" }} id={styles.text}>
                © Copyright 2023 Elegance - All Rights Reserved
            </p>
        </div>
    )
}