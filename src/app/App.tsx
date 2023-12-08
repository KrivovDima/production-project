import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/providers/ThemeProvider/useTheme';
import { Header } from 'widgets/Header';
import { AppRouter } from './router';
import './styles/index.scss'

const App = () => {
  const {theme} = useTheme()

  return (
        <div className={classNames('app', {}, [theme])}>
          <Header />
          <AppRouter />
        </div>
  )
}

export default App