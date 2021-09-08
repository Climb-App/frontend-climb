import 'bootstrap/scss/bootstrap.scss';
import '../styles/app.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  
  return(
  <>
  <Component {...pageProps} />
  <ToastContainer/>
  </>
  )
}

export default MyApp