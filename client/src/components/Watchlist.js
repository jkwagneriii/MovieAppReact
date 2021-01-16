import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { makeStyles } from '@material-ui/core/styles'
import {
    Box,
    Grid,
    Typography
} from '@material-ui/core'
import Navbar from './Navbar'
import MovieCard from './MovieCard';
import Typed from "react-typed"

const useStyles = makeStyles({
    movieCards: {
        // background: "#b2af97",
        display: "block",
        margin: "auto auto"

    },
    header: {
        color: "white",
        display: "block",
        marginTop: "30px",
        margin: "auto auto",
        fontSize: "25px",
    },
    noNom: {
        color: "black",
        display: "block",
        margin: "auto auto",
        padding: "7px",
        fontSize: "25px",
        backgroundColor: "#EA082E",
        borderRadius: "30px"
    },
})

const Watchlist = () => {
    const classes = useStyles();

    const { watchlist } = useContext(GlobalContext);

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
                        <Grid direction="row" container item justify="center" xs={12} sm={12} md={12}>
                            {/* <Box> */}
                            {watchlist.map(movie => (
                                <MovieCard className={classes.movieCards} movie={movie} type="watchlist" />
                            ))}
                            {/* </Box> */}
                        </Grid>
                    ) : (
                            <Typography variant="caption" className={classes.noNom}>
                                <Typed
                                    strings={["no nominated movies. add some!!!"]}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop />
                            </Typography>
                        )}
                </Grid>
            </Box>
        </>
    )
}

export default Watchlist
