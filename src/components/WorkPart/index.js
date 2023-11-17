/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./index.css"
import Section01 from "./Section01/index"
import Section02 from "./Section02/index"
import Section03 from "./Section03/index"
import Section04 from "./Section04/index"

function index() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            pin.kill();
        };
    }, []);

    return (
        <section className="scroll-section-outer" id='project'>
            <div ref={triggerRef}>
                <div ref={sectionRef} className="scroll-section-inner">
                    <div className="scroll-section">
                        <Section01 />
                    </div>
                    <div className="scroll-section">
                        <Section02 />
                    </div>
                    <div className="scroll-section">
                        <Section03 />
                    </div>
                    <div className="scroll-section">
                        <Section04 />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index