'use client'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function DarkToggle(){
  const [theme, setTheme] = useState('light')
  useEffect(()=>{
    const t = localStorage.getItem('theme') || 'light'
    setTheme(t)
    document.documentElement.setAttribute('data-theme', t === 'dark' ? 'dark' : 'light')
  },[])

  function toggle(){
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.setAttribute('data-theme', next === 'dark' ? 'dark' : 'light')
  }

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded border">
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  )
}
