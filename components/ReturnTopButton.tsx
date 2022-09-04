import { useEffect, useState } from 'react'
import * as Icon from 'react-feather';
import styles from '../styles/components/ReturnTopButton.module.scss';
const ReturnTopButton = () => {
  const [isButtonActive, setIsButtonActive] = useState(false)

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow)
    return () => {
      window.removeEventListener('scroll', scrollWindow)
    }
  }, [])

  const scrollWindow = () => {
    const top = 100  //ボタンを表示させたい位置
    let scroll = 0
    scroll = window.scrollY
    if (top <= scroll) {
      setIsButtonActive(true)
    } else {
      setIsButtonActive(false)
    }
  }

  const normalStyle = {
    opacity: 0,
    transition: '1s',
    pointerEvents: 'none'
  }
  const activeStyle = {
    opacity: 1,
    transition: '1s'
  }
  const style = isButtonActive ? activeStyle : normalStyle

  return (
    <button style={style} onClick={returnTop} className={styles.topButton}>
        <Icon.ArrowUp className='text-white' />
    </button>
  )
}

export default ReturnTopButton