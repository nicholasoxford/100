import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Home.module.css'
export default function Header(props: { isBreak: boolean }) {
  const isLessThanBreakPoint = props.isBreak
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div className={isOpen ? styles.fadeIn : styles.fadeOut}>Hello World</div>
      {!isLessThanBreakPoint ? (
        <div
          style={{
            float: 'left',
            clear: 'none',
            width: '20vw',
            height: '100vh'
          }}
        >
          <div
            style={{
              minWidth: '40px',
              position: 'fixed',
              zIndex: '1',
              top: '0',
              width: 'inherit',
              marginLeft: '10px',
              left: '0',
              // overflowX: 'hidden',
              paddingTop: '20px',
              fontFamily: 'IBM Plex Sans',
              textAlign: 'right'
            }}
          >
            <h1
              style={{
                fontSize: '2em'
              }}
            >
              Nick O.
            </h1>
            {headerLink('Home', '/')}
            {headerLink('About', '/about')}
            {headerLink('100 Days', '/100days')}
          </div>
          <div
            style={{
              width: '23vw',
              height: 'inherit',
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <div
              style={{
                borderLeft: '4px solid black',
                height: '100vh'
              }}
            ></div>
          </div>
        </div>
      ) : (
        <div
          style={{
            height: '10vh',
            minWidth: '10px',
            position: 'absolute',
            top: '0',
            right: '0',
            marginRight: '5vw',
            paddingTop: '5px'
          }}
        >
          <div>
            {' '}
            <FontAwesomeIcon
              onClick={() => {
                setIsOpen(!isOpen)
              }}
              style={{
                cursor: 'pointer',
                paddingTop: '20px',
                paddingLeft: '10px',
                fontSize: '1.9em'
              }}
              icon={faBars}
            />
          </div>
        </div>
      )}
    </div>
  )

  function headerLink(text: string, href: string) {
    return (
      <h2>
        <Link href={href} passHref replace>
          <a style={{ fontSize: '1em', color: 'black', textDecoration: 'none' }}>{text}</a>
        </Link>
      </h2>
    )
  }
}
