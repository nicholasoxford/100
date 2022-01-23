import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export default function Header(props: { isBreak: boolean }) {
  const isLessThanBreakPoint = props.isBreak

  return (
    <div>
      {!isLessThanBreakPoint ? (
        <div
          style={{
            height: '100%',
            minWidth: '40px',
            position: 'fixed',
            zIndex: '1',
            top: '0',
            marginLeft: '10px',
            left: '0',
            // overflowX: 'hidden',
            paddingTop: '20px'
          }}
        >
          <h1>
            <Link href="/" passHref replace>
              <a style={{ fontSize: 'none', color: 'black', textDecoration: 'none' }}>Home</a>
            </Link>
          </h1>
        </div>
      ) : (
        <div
          style={{
            height: '100%',
            minWidth: '10px',
            position: 'fixed',
            zIndex: '1',
            top: '0',
            marginLeft: '10px',
            left: '0',
            // overflowX: 'hidden',
            paddingTop: '20px'
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      )}
    </div>
  )
}

{
  /* isLessThanBreakPoint &&  */
}
