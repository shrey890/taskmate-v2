import React, { useEffect, useState } from 'react'
import logo from '../Assets/task-logo.png'
export const Header = () => {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'light')
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
        document.documentElement.removeAttribute('class')
        document.documentElement.classList.add(theme)
    }, [theme])
    return (
        <header>
            <div className='logo'>
                <img src={ logo } alt="taskmate logo" />
                <span>Taskmate</span>
            </div>
            <div className='themeSelector'>
                <span onClick={ () => setTheme('light') } className={ theme === 'light' ? 'light activeTheme' : 'light' } title={ 'activeTheme' }></span>
                <span onClick={ () => setTheme('medium') } className={ theme === 'medium' ? 'medium activeTheme' : 'medium' } ></span>
                <span onClick={ () => setTheme('dark') } className={ theme === 'dark' ? 'dark activeTheme' : 'dark' } ></span>
                <span onClick={ () => setTheme('gradientOne') } className={ theme === 'gradientOne' ? 'gradientOne activeTheme' : 'gradientOne' } title={ 'activeTheme' }></span>
                <span onClick={ () => setTheme('gradientTwo') } className={ theme === 'gradientTwo' ? 'gradientTwo activeTheme' : 'gradientTwo' } title={ 'activeTheme' }></span>
                <span onClick={ () => setTheme('gradientThree') } className={ theme === 'gradientThree' ? ' gradientThree activeTheme' : 'gradientThree' } title={ 'activeTheme' }></span>
            </div>
        </header>
    )
}
