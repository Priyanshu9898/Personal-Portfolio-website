import React from 'react'
import Link from "next/link";
import { motion } from 'framer-motion';

function Logo() {
  return (
    <>
      <div>
        <Link href="/">
          <motion.img
            src="https://i.postimg.cc/rFNCP74G/HB-LOGO3.png"
            className="logoImg"
            alt="Logo"
            whileHover={{ scale: 1.2 }}
          />
        </Link>
      </div>
    </>
  )
}

export default Logo;
