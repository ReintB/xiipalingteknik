"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  animation?:
    | "fadeIn"
    | "fadeInUp"
    | "fadeInDown"
    | "fadeInLeft"
    | "fadeInRight"
    | "zoomIn"
    | "bounce";
  once?: boolean;
  threshold?: number;
}

export default function MotionWrapper({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  animation = "fadeIn",
  once = true,
  threshold = 0.1,
}: MotionWrapperProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  });

  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    bounce: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 10,
        },
      },
    },
  };

  const selectedAnimation = animations[animation];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={selectedAnimation}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}