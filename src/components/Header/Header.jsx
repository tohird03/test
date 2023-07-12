import React,  { useContext } from 'react'
import {observer} from 'mobx-react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import './header.scss'
import { FiMessageCircle, FiHeart, FiUser } from 'react-icons/fi'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import { themeStore } from '../../store/themeStore'

export const Header = observer(() => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const handleChooseTheme = (evt) => {
    if(evt.target.value === 'light') {
      dispatch({type: 'LIGHT'})
    }else {
      dispatch({type: 'DARK'})
    }
  }

  return (
    <header className={`header ${state.theme === 'dark' ? 'dark' : ''}`}>
      <div className='container header__container'>
        <Link to='/'>
          <img className='header__logo' src="https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web-olxuz/static/img/fb/fb-image_redesign.png?t=23-02-15" alt="Olx logo" />
        </Link>

        <nav className='header__nav'>
          <ul className='header__list'>
            <li>
              <Link to="/messages" className='header__link'>
                <FiMessageCircle />
                <span>
                  Xabarlar
                </span>
              </Link>
            </li>
            <li>
              <select className='header__select'>
                <option value="uz">O'zb</option>
                <option value="ru">Ru</option>
              </select>
            </li>
            <li>
              <select onChange={handleChooseTheme} className='header__select'>
                <option value="light">
                  Light
                </option>
                <option value="dark">
                  Dark
                </option>
              </select>
            </li>
            <li>
              <a className='header__link' href='#'>
                <FiHeart />
              </a>
            </li>
            <li>
              <Link to='/auth' className='header__link'>
                <FiUser />
                <span>
                  Hisobingiz
                </span>
              </Link>
            </li>
          </ul>

          <Button buttonText={'E\'lon berish'} variant={'light'} />
        </nav>
      </div>
    </header>
  )
})
