import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { classNames } from './helpers/classNames/classNames';
import './styles/index.scss'
import { useTheme } from './theme/useTheme';

const About = lazy(() => import('./pages/About'));
const Main = lazy(() => import('./pages/Main'));


const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
        <div className={classNames('app', {}, [theme])}>
          <button onClick={toggleTheme}>ToggleTheme</button>
          <Link to="/">Main</Link>
          <Link to="/about">About</Link>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </div>
  )
}

export default App