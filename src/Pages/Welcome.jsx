import React from 'react';
import Connect from '../Components/Connect/Connect';
import Dream from '../Components/Dream/Dream';
import Explore from '../Components/Explore/Explore';
import For from '../Components/For/For';
import Games from '../Components/Games/Games';
import Hero from '../Components/Hero/Hero';
import Job from '../Components/Job/Job';
import Join from '../Components/Join/Join';
import PostJob from '../Components/PostJob/PostJob';
import Tools from '../Components/Tools/Tools';
import Work from '../Components/Work/Work';


const Welcome = () => {


  return (
    <div>
        <Hero />
        <Explore />
        <Job />
        <PostJob />
        <Tools />
        <Games />
        <Work />
        <Connect />
        <For />
        <Dream />
        <Join />
    </div>
  )
}

export default Welcome;