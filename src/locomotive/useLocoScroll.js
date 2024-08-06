import LocomotiveScroll from "locomotive-scroll";
import "../../node_modules/locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
    useEffect(() => {
        if (!start) return;

        const elElement = document.querySelector(".main");

        const locoScroll = new LocomotiveScroll({
            el: elElement,
            smooth: true,
            multiplier: 1,
            class: "is-reveal",
        });

        // Synchronize LocomotiveScroll with ScrollTrigger
        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(elElement, {
            scrollTop(value) {
                return arguments.length
                    ? locoScroll.scrollTo(value, 0, 0)
                    : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            pinType: elElement.style.transform ? "transform" : "fixed",
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();

        return () => {
            locoScroll.destroy();
        };
    }, [start]);
}
