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
import noImage from '../images/noImage.jpg'

const useStyles = makeStyles({
    // mainContainer: {
    //     // background: "#b2af97",
    //     height: "100%"
    // },
    cardContainer: {
        padding: "5px",
        margin: "10px 10px",
        background: "white",
        minWidth: "300px"
    },
    button: {
        background: "#EA082E"
    },
})

const ResultCard = ({ movie }) => {
    const classes = useStyles();

    const {addMovieToWatchlist, watchlist} = useContext(GlobalContext);

    let storedMovie = watchlist.find(o => o.id === movie.id);

    const watchlistDisabled = storedMovie ? true : false;

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
                        <Button 
                        size="medium" 
                        disabled={watchlistDisabled}
                        className={classes.button}
                        onClick={() => addMovieToWatchlist(movie)}
                        >
                            Nominate
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default ResultCard
