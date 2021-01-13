import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    particlesCanvas: {
        position: 'absolute',
        opacity: 0.5
    }
})

const Home = () => {

    const classes = useStyles()

    return (
        <>
            <Navbar />
            <Header />
            <Particles 
                canvasClassName={classes.particlesCanvas}
               params={{
                particles: {
                    number: {
                        value: 400,
                        density: {
                            enable: true,
                            value_area: 1000
                        }
                    },
                    color: {
                        value: '#fff'
                    },
                    opacity: {
                        value: 0.5,
                        anim: {
                            enable: true
                        }
                    },
                    size: {
                        value: 7,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 3
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        speed: 0.2
                    }
                 }    
            }}    
            />
        </>
    )
}

export default Home
