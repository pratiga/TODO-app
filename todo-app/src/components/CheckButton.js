// import { motion } from 'framer-motion';
import React from 'react';
import styles from '../styles/modules/todoitem.module.scss';

const checkVariants = {
  initial: {
    color: '#fff',
  },
  checked: {
    pathLength:1,
  },
  unchecked: {
    pathLength: 0,
  },
};

const boxVariant = {
  checked: {
    background: 'var(--primaryPurple)',
    transition: { duration: 0.1},
  },
  unchecked: {
    background:'var(--gray-1)',
    transition: {
      duration: 0.1,
    }
  }
}

function CheckButton({checked, setChecked }) {
  return (
    <div
    className={styles.svgBox}
    variants = {boxVariant}
    animate = {checked ? 'checked': 'unchecked'}
    onClick = {() => {
      console.log('checked clicked')
    }}
    >
      <svg
        className={styles.svg}
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
         variants = {checkVariants}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default CheckButton