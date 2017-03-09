import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

class About extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                <Header/>
                    About
                <Footer/>
            </div>
        )
    }
}

export default About