import 'bootstrap/scss/bootstrap.scss'
import '../styles/app.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  
  return(
  <>
  <Component {...pageProps} />
  <ToastContainer/>
  </>
  )
}

export default MyApp