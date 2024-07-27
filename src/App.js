import { useEffect } from 'react';
import { BrowserRouter, Route, Routes ,useLocation} from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import SignUp from './Components/Signup/Signup';
import Welcome from './Pages/Welcome';
import GoogleSignIn from './Components/Google/GoogleSignIn';
import SingIn from './Components/SignIn/SignIn'
import Home from './Components/Home/Home';
import Apple from './Components/Apple/Apple'

function App() {
  useEffect(() => {
    document.title = "Linkedin:Log In or Sign Up"
  }, [])

const FooterComponent=()=>
{
  const location=useLocation();
  const allowedPaths=['/','/signup','/signin'];
   const shouldRenderFooter=allowedPaths.includes(location.pathname);
   return shouldRenderFooter ?<Footer/>:null

}

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={< SingIn/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/googlesignin' element={<GoogleSignIn/>}/>
          <Route path='/applesignin' element={<Apple/>}/>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
