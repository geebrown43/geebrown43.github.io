import React from 'react'
import '../App.css'

export default class Tech extends React.Component{
    render(){
        return (
            <div className="tech-wrapper">
                    <h1 className='body_head'>Technologies</h1>
                    <div className="contain">
                        <div className={this.props.className}>
                            <img src={require( '../assets/image/HTML5.png')} alt="html logo" width={ '150px'} height={ '150px'}/>
                            <img src={require( '../assets/image/CSS3.png')} alt="css logo" width={ '100px'} height={ '150px'}/>
                            <img src={require( '../assets/image/Javascript.png')} alt="javascript logo" width={ '160px'} height={ '160px'}/>
                        </div>
                        <div className={this.props.secondName}>
                            <img src={require('../assets/image/express.png')} alt="express" width={ '140px'} height={ '80px'}/>
                            <img src={require('../assets/image/react.png')} alt="react" width={ '200px'} height={ '180px'}/>
                            <img src={require('../assets/image/nodejs.png')} alt="nodejs" width={ '150px'} height={ '150px'}/>

                        </div>
                        <div className={this.props.thirdName}>
                            <img src={require('../assets/image/postgresql.svg')} alt="postgresql" width={'150px'} height={'150px'}/>
                            <img src={require('../assets/image/handlebars.svg')} alt="handlebars" width={'150px'} height={'150px'}/>
                            <img src={require('../assets/image/heroku.svg')} alt="heroku" width={'150px'} height={'150px'}/>
                        </div>
                    </div>
                
            </div>
        )
    }
}