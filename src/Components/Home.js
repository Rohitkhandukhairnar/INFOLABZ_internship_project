import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import arrow from './img/Arrow.png';
import logo2 from './img/logo2.png';
import Poster from './img/poster.png';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from './Contact';
import About from './About';
import Notfound from './Notfound';
import All,{Top,National,Business,Sport,World,Politics,Technology,Startup,Entertainment,Miscellaneous} from './Top';
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';

function Router(){
    return(
<>
    <BrowserRouter>
        <nav id='topnav'>
        <div style={{margin:'1rem 4rem '}}>
            <Link class="link" to='/home'>Home </Link>
            <Link class="link" to='/contact'>Contact </Link>
            <Link class="link" to='/about'>About </Link>
        </div>
        <div><img src={logo2} alt='Loading..'className='logo' style={{margin:'0 4rem ',marginTop:'10px'}}></img></div>
        <div style={{margin:'0 4rem '}}><Date/></div>
        </nav>

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path='/*' element={<Notfound/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/top' element={<Top/>}/>
        <Route path='/national' element={<National/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/sport' element={<Sport/>}/>
        <Route path='/world' element={<World/>}/>
        <Route path='/politics' element={<Politics/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/startup' element={<Startup/>}/>
        <Route path='/entertainment' element={<Entertainment/>}/>
        <Route path='/miscellaneous' element={<Miscellaneous/>}/>
    </Routes>
</BrowserRouter>
<Footer/>
    </>
    );
}

function Date(){
    const [time,settime]=useState('');
    const [date,setdate]=useState('');
    async function load(){
        const url='http://worldtimeapi.org/api/timezone/Asia/Kolkata';
        const obj=await(await fetch(url)).json();
        var wholetime=obj.datetime;
        var [mydate,t]=wholetime.split('T');
        var [mytime,waste]=t.split('.');
        settime(mytime);
        setdate(mydate);
    }

    useEffect(() => {
        const interval=setInterval(() => {
          load()
        }, 1000);
        return ()=>clearInterval(interval);
      }, []);

    return(
        <>
        <p className='time' style={{color:'white',fontWeight:'600',marginTop:'10px'}}>Date : {date} Time : {time}</p>
        </>
    );
}

function Home(){

    return(
    <div>
        <div style={{display:'flex'}}>
        <Sidebar/>
        <img className='poster' src={Poster} alt='Loading...' style={{height:'10%',margin:'10px'}}></img>
        </div>
        <All/>
    </div>
    );
}



function Sidebar(){
    return(
    <>
        <Table  bordered hover className='table'style={{width:'100%'}}>
    <tbody>
        <tr >
          <th className='th' ><Link to='/top' style={{textDecoration:"none"}} >Top News </Link>
          <img className='img' src={arrow} alt='loading...'></img>
          </th>
        </tr>
        <tr>
          <th><Link to='/national' style={{textDecoration:"none"}}>National News</Link>
          <img className='img' src={arrow} alt='loading...'></img>
          </th>
        </tr>
        <tr>
          <th><Link to='/business' style={{textDecoration:"none"}}>Business News</Link>
          <img className='img' src={arrow} alt='loading...'></img>
          </th>
        </tr>
        <tr>
          <th><Link to='/sport' style={{textDecoration:"none"}}>Sport News</Link>
          <img className='img' src={arrow} alt='loading...'></img>
          </th>
        </tr>
        <tr>
          <th><Link to='/world' style={{textDecoration:"none"}}>World News</Link>
          <img className='img' src={arrow} alt='loading...'></img>
          </th>
        </tr>
        <tr>
          <th><Link to='/politics' style={{textDecoration:"none"}}>Politics News</Link>
          <img className='img' src={arrow} alt='loading...'></img>
          </th>
        </tr>
        <tr>
          <th><Link to='/technology' style={{textDecoration:"none"}}>Technology News</Link>
          <img className='img' src={arrow} alt='loading...'></img>
          </th>
        </tr>
        <tr>
          <th><Link to='/startup' style={{textDecoration:"none"}}>Startup News</Link>
          <img className='img' src={arrow} alt='loading...'></img>
          </th>
        </tr>
        <tr>
          <th><Link to='/entertainment' style={{textDecoration:"none"}}>Entertainment News</Link>
          <img className='img' src={arrow} alt='loading...'></img>
          </th>
        </tr>
        <tr>
          <th><Link to='/miscellaneous' style={{textDecoration:"none"}}>Miscellaneous News</Link>
          <img className='img' src={arrow} alt='loading...'></img>
          </th>
        </tr>
      </tbody>
    </Table>
    </>
    );
}

function Footer(){
    return(
        <>
        <footer>
            <div class="social"><i class="fa fa-facebook" aria-hidden="true"></i></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright" style={{color:'white'}}>Realtime news portal © 2024</p>
        </footer>
        </>
    );
}

export default Home;
export {Router,Sidebar,Footer,Date}