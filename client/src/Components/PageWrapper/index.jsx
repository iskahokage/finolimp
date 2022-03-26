import React from 'react'
import Menu from '../Navigation'
import './style.scss'
function PageWrapper({ children }) {
    return (
        <>
            <header className='header-style'>
                <Menu />
            </header>
            {children}
        </>
    )
}


export default PageWrapper
