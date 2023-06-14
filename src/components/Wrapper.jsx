import React from 'react'
import { motion } from 'framer-motion';

export default function Wrapper({children}) {
  return (
    <motion.div initial={{opacity: 0, y: -500}} animate={{opacity: 1, y: 0}} transition={{duration: 1}}>
        {children}
    </motion.div>
  )
}
