import Header from './Header';
import Footer from './Footer';
const Main = ({children}) => {
  return (
    <>
    <Header />
    <div className='main'>{children}</div> 
    <Footer />
    </>
  )
}

export default Main