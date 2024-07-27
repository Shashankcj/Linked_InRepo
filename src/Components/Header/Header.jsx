import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import PeopleIcon from '@mui/icons-material/People';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WorkIcon from '@mui/icons-material/Work';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';


const Header = () => {

const navigators=useNavigate()

function joinNow()
{
navigators('/signup')
}

function signIn()
{
  navigators('/signin')
}

  return (
    <div>
          <header className="linkedin-header">
            <div className="header-sections">
              <div className='header-Container'>
                <h4>Linked 
                  <span style={{backgroundColor:"#0073b1", color:"white", borderRadius:"6px"}}>in</span>
                </h4>
                
              </div>
                <a href="">{<ArticleOutlinedIcon style={{fontSize:"40px"}}/>}
                <p>Articles</p>
                </a>
                <a href="">{<PeopleIcon style={{fontSize:"40px"}}/>}
                <p>People</p>
                </a>
                <a href=""> {<LocalLibraryOutlinedIcon style={{fontSize:"40px"}}/>}
                <p>Learning</p></a>
                <a href="">{<WorkIcon style={{fontSize:"40px"}}/>} <p>Jobs</p></a>
                <a href="">{<SportsEsportsIcon style={{fontSize:"40px"}}/>} <p>Games</p></a>
                <a href="">{<LaptopMacIcon style={{fontSize:"40px"}}/>} <p>Get App</p> </a>
            </div>
            <div className="action-buttons">
                <button className="join-button" onClick={joinNow}>Join Now</button>
                <button className="header-signin-button" onClick={signIn}>Sign In</button>
            </div>
        </header>
        </div> 
  )
}

export default Header