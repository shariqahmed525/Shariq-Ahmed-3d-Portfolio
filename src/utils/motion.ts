interface TextVariant {
  hidden: {
    y: number;
    opacity: number;
  };
  show: {
    y: number;
    opacity: number;
    transition: {
      type: string;
      duration: number;
      delay: number;
    };
  };
}

export const textVariant = (delay?: number): TextVariant | string => {
  const isDesktop = window.innerWidth >= 600;
  if (isDesktop) {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay || 0,
        },
      },
    };
  } else {
    return "";
  }
};

interface FadeInVariant {
  hidden: {
    x: number;
    y: number;
    opacity: number;
  };
  show: {
    x: number;
    y: number;
    opacity: number;
    transition: {
      type: string;
      delay: number;
      duration: number;
      ease: string;
    };
  };
}

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
): FadeInVariant | string => {
  const isDesktop = window.innerWidth >= 600;
  if (isDesktop) {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  } else {
    return "";
  }
};

interface SlideInVariant {
  hidden: {
    x: string | number;
    y: string | number;
  };
  show: {
    x: number;
    y: number;
    transition: {
      type: string;
      delay: number;
      duration: number;
      ease: string;
    };
  };
}

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
): SlideInVariant | string => {
  const isDesktop = window.innerWidth >= 600;
  if (isDesktop) {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  } else {
    return "";
  }
};

interface StaggerContainerVariant {
  hidden: {};
  show: {
    transition: {
      staggerChildren: number;
      delayChildren: number;
    };
  };
}

export const staggerContainer = (): StaggerContainerVariant | string => {
  const isDesktop = window.innerWidth >= 600;
  if (isDesktop) {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0,
          delayChildren: 0,
        },
      },
    };
  } else {
    return "";
  }
};
