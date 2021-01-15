import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {makeStyles} from '@material-ui/core/styles'
import {
Box,
Grid,
Typography
} from '@material-ui/core'
import Navbar from './Navbar'
import MovieCard from './MovieCard';

const useStyles = makeStyles({
    movieCards: {
        // background: "#b2af97",
        display: "block",
        margin: "auto auto"
        
    },
    header: {
        color: "white",
        display: "block",
        margin: "auto auto",
        fontSize: "25px",
    }
    // button: {
    //     background: "#EA082E"
    // },
})

const Watchlist = () => {
    const classes = useStyles();

    const {watchlist} = useContext(GlobalContext);

    return (
        <>
            <Navbar />
            <Box component="div">
                <Grid container alignContent="center">
                    <Grid container direction="row" alignContent="center">
                    {/* <Box component="header" > */}
                        <Typography variant="caption" className={classes.header}>
                            TOP 5 NOMINATIONS
                        </Typography>
                    {/* </Box> */}
                    </Grid>

                    
                    {watchlist.length > 0 ? (
                    <Grid  direction="row" container item justify="center" xs={12} sm={12} md={12}>    
                    {/* <Box> */}
                        {watchlist.map(movie => (
                            <MovieCard className={classes.movieCards} movie={movie} type="watchlist" />
                        ))}
                    {/* </Box> */}
                    </Grid>
                    ) : (
                        <Typography>
                            No Nominated Movies. Add some!!!
                        </Typography>
                    )}
                </Grid>
            </Box>
        </>
    )
}

export default Watchlist
