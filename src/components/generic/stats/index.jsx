import { useState, useEffect, useRef } from "react";

export default function Stats() {
  const [isInView, setIsInView] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(statsRef.current);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(statsRef.current);

    return () => null;
  }, []);

  return (
    <>
      <section className="section stats" ref={statsRef}>
        <div className="container d-flex justify-content-between gap-2">
          <StatItem number={15} text="Customers" isInView={isInView} />
          <StatItem number={53} text="Units" isInView={isInView} />
          <StatItem number={178} text="Visitors" isInView={isInView} />
        </div>
      </section>
    </>
  );
}

function StatItem({ number, text, isInView }) {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const interval = setInterval(() => {
        start++;
        setDisplayNumber(start);
        if (start >= number) {
          clearInterval(interval);
        }
      }, 10);
      return () => clearInterval(interval);
    }
  }, [isInView, number]);

  return (
    <div className="stats__item text-center">
      <h2 className="stats__number">{displayNumber}</h2>
      <p className="stats__text">{text}</p>
    </div>
  );
}
