import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {makeStyles} from '@material-ui/core/styles'
import {
Divider,
Grid,
Card,
CardActionArea,
CardActions,
CardContent,
CardMedia,
Button,
Typography
} from '@material-ui/core'
// import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import Typed from "react-typed"
import noImage from '../images/noImage.jpg'

const useStyles = makeStyles({
    full: {
        background: "#EA082E",
        height: "30px",
        justifyContent: "center",
        padding: "5px",
        boxShadow: "2px 2px"
    },
    fullTitle: {
        fontSize: "20px"
    },
    cardContainer: {
        padding: "5px",
        margin: "10px 10px",
        background: "white",
        minWidth: "300px",
        maxWidth: "300px",
    },
    button: {
        background: "#EA082E"
    },
})

// toast.configure()

const ResultCard = ({ movie }) => {
    const classes = useStyles();

    const {addMovieToWatchlist, watchlist} = useContext(GlobalContext);

    let storedMovie = watchlist.find(o => o.id === movie.id);

    const watchlistDisabled = storedMovie ? true : false;

    // const notify = () => {
    //     toast('Nominations Full!')
    // }

    return (
        <>
            <Grid item xs={12} sm={12} md={12}>
                {/* Project 1  */}
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        {movie.poster_path ? (
                            <CardMedia
                                component="img"
                                alt={`${movie.title} Poster`}
                                title={`${movie.title} Poster`}
                                height="300"
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                className={classes.poster} />
                        ) : (
                                // FIND FILLER IMAGE 
                            <CardMedia
                                alt="Missing Image"
                                image={noImage} />
                            )}
                        <CardContent>
                            <Typography className={classes.title} gutterBottom variant="h5">
                                {movie.title}
                            </Typography>
                            <Typography variant="body2">
                                {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
                            </Typography>
                            <Divider />
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {watchlist.length < 5 ? (
                        <Button 
                        size="medium" 
                        disabled={watchlistDisabled}
                        className={classes.button}
                        onClick={() => addMovieToWatchlist(movie)}
                        >
                            Nominate
                        </Button>
                        ) : (
                            <Card className={classes.full}>
                                    <Typography className={classes.fullTitle} variant="h5">
                                        <Typed
                                        strings={["nominations full"]}
                                        typeSpeed={50}
                                        backSpeed={50}
                                        loop />
                                    </Typography>
                            </Card>
                        )}
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default ResultCard
