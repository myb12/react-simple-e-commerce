import React, { useEffect, useState } from "react";
import './ScrollToTop.css';
import TopArrow from '../../images/top.png'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(true);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top" title="Move to top">
            {isVisible && (
                <div onClick={scrollToTop}>
                    <img
                        src={TopArrow}
                        alt="Go to top"
                    />
                </div>
            )}
        </div>
    );
}

export default ScrollToTop;