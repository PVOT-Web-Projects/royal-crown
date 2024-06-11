"use client"
import { useEffect, useRef, useState } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import demoimage from '../../images/demo.jpeg';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import '../../components/InsightSlider/insightslider.scss'; // Adjust the path as needed

gsap.registerPlugin(ScrollTrigger);

const useSmoothScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if running in the browser before setting up smooth scroll
    if (typeof window !== 'undefined') {
      import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
        const scroller = new LocomotiveScroll({
          el: containerRef.current,
          smooth: true
        });

        scroller.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(containerRef.current, {
          scrollTop(value) {
            return arguments.length
              ? scroller.scrollTo(value, 0, 0)
              : scroller.scrollTo.instance.scrollTo.y;
          },
          getBoundingClientRect() {
            return {
              left: 0,
              top: 0,
              width: window.innerWidth,
              height: window.innerHeight
            };
          },
          pinType: containerRef.current.style.transform ? "transform" : "fixed"
        });

        // window.addEventListener("load", () => {
        //   ScrollTrigger.refresh();
        // });

        // return () => scroller.destroy();
      });
    }
  }, []);

  return containerRef;
};

export default function Home() {
  const containerRef = useSmoothScroll();
  const pinWrapRef = useRef(null);
  const [refreshListenerAdded, setRefreshListenerAdded] = useState(false); // Track if refresh listener is added

  useEffect(() => {
    const pinWrap = pinWrapRef.current;
    const pinWrapWidth = pinWrap.offsetWidth;

    gsap.to(pinWrap, {
      scrollTrigger: {
        scroller: containerRef.current,
        scrub: true,
        trigger: "#sectionPin",
        pin: true,
        start: "top top",
        end: () => `+=${pinWrapWidth}`
      },
      x: -pinWrapWidth, // Adjusted to use pinWrapWidth
      ease: "none"
    });

    if (!refreshListenerAdded && typeof window !== 'undefined') {
      ScrollTrigger.addEventListener("refresh", () => {
        ScrollTrigger.refresh();
      });
      setRefreshListenerAdded(true); // Set the flag to true after adding the listener
    }

    return () => {
      if (typeof window !== 'undefined') {
        ScrollTrigger.removeEventListener("refresh", () => {
          ScrollTrigger.refresh();
        });
      }
    };
  }, [containerRef, refreshListenerAdded]);

  return (
    <div className="slidermain">
      <LocomotiveScrollProvider options={{ smooth: true }} containerRef={containerRef} watch={[]}>
        <div className="container" data-scroll-container ref={containerRef}>
          <section data-bgcolor="#bcb8ad" data-textcolor="#032f35">
            <div>
              <h1 data-scroll data-scroll-speed="1">
                <span>Horizontal</span> <span>scroll</span> <span>section</span>
              </h1>
              <p data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
                with GSAP ScrollTrigger & Locomotive Scroll
              </p>
            </div>
          </section>

          <section id="sectionPin">
            <div className="pinWrap" ref={pinWrapRef}>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
              <Image src={demoimage} alt="Demo Image" className="imgsss" />
              <Image src={demoimage} alt="Demo Image" className="imgsss" />
              <Image src={demoimage} alt="Demo Image" className="imgsss" />
            </div>
          </section>
        </div>
      </LocomotiveScrollProvider>
    </div>
  );
}
