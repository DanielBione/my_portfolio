export const showFromTopVariants = (y,delay) => ({
    hidden: {
        opacity: 0,
        y: y
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: delay ?? 0.2
        }
    },
  });