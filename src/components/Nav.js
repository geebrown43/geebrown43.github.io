import React from 'react'
import * as FontAwesome from 'react-icons/lib/fa'
import '../App.css'

export default class Nav extends React.Component {
    render(){
        return(
            <div className="menu">
                <div className="menu_brand">
               Gavin E. Brown
                </div>
               <div className="links">
                    <a href="https://www.linkedin.com/in/geebrown43/" target='_blank' rel='noopener noreferrer'><FontAwesome.FaLinkedinSquare/></a>
                    <a href="https://github.com/geebrown43" target='_blank' rel='noopener noreferrer'><FontAwesome.FaGithubSquare/></a>
               </div>
            </div>
        )
    }
}