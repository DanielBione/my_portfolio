import { motion } from 'framer-motion';
import './typing-text.css';
import {useState,useEffect} from 'react'

export const TypingText = ({ title, initialDelay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), initialDelay);
  }, [initialDelay]);

  return (
    <motion.p
      animate={isVisible ? "show" : "hidden"}
      initial="hidden"
      viewport={{ once: false, amount: 0.25 }}
      className={`typing`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                type: "tween",
                ease: "easeIn",
                delay: index * 0.1, 
              },
            },
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};
