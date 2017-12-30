import React from 'react'
import ReactPlayer from 'react-player'
import '../App.css'


export default class Header extends React.Component{

    render(){
        return (
            <div className="vid">
            
            <ReactPlayer url={require('../assets/video/redsmoke.mov')}  width={'100%'} height={'100%'} playing loop/>
            <div className="nav">
                <div className="brand">
                Full Stack | Mobile | React | React-Native
                </div>
                <div className="header">
                    
                </div>
            </div> 
           
            </div>            
        )
    }
}