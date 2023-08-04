import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import style from './scroolToTop.module.css'


const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className={style.topToBtm}>
            {" "}
            {showTopBtn && (
                <FontAwesomeIcon 
                    icon={faAngleUp}
                    className= {`${style.iconPosition} ${style.iconStyle}`}
                    onClick={goToTop}
                ></FontAwesomeIcon>
            )}{" "}
        </div>
    );
};
export default ScrollToTop;