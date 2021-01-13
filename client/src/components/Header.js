import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
Typography,
Avatar,
Grid,
Box
} from "@material-ui/core"
import Typed from "react-typed"
import avatar from '../images/popcorn.png'

// CSS STYLES
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: theme.spacing(1),
    },
    title: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "45px",
    },
    subtitle: {
        color: "white",
        marginBottom: "3rem",
        fontFamily: "Arial"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))


const Header = () => {
    const classes = useStyles()
    return (
    <>
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="Jake Wagner" />
            </Grid>
            <Typography 
            className={classes.title}
            variant="overline">
                Movie Nominations
            </Typography>
            <br/>
            <Typography 
            className={classes.subtitle}
            variant="h5">
                <Typed 
                strings={
                    ["Parasite", "The Grand Budapest Hotel", "Black Panther", "Rebel Without a Cause", "Lost In Translation", "Boyz n' The Hood", "Slumdog Millionare", "Grease", "Spirited Away", "Titanic", "Casablanca", "The Farewell", "There Will Be Blood", "Jaws", "Booksmart", "Rocky", "She's the Man", "Bridesmaids", "Memento", "Coming to America", "Butch Cassidy and the Sundance Kid", "Something's Gotta Give", "Daughters of the Dust", "Sing Street", "Dreamgirls", "The Silence of the Lambs", "Dazed and Confused", "Annihilation", "Tangerine", "Selma", "The Shining", "Schindler's List"]
                } 
                typeSpeed={30}
                backSpeed={50}
                loop/>
            </Typography>
        </Box>
    </>    
    )
}

export default Header
