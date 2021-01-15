import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
Box,
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
import MovieControls from './MovieControls'
import noImage from '../images/noImage.jpg'

const useStyles = makeStyles({
    // mainContainer: {
    //     // background: "#b2af97",
    //     height: "100%"
    // },
    cardContainer: {
        padding: "10px",
        margin: "10px 10px",
        background: "white",
        maxWidth: "225px"
    },
    // button: {
    //     background: "#EA082E"
    // },
})

const MovieCard = ({ movie, type }) => {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.cardContainer}>
                    <CardActionArea>
                        {movie.poster_path ? (
                            <CardMedia
                                component="img"
                                alt={`${movie.title} Poster`}
                                title={`${movie.title} Poster`}
                                height="200"
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                className={classes.poster} />
                        ) : (
                                // FIND FILLER IMAGE 
                            <CardMedia
                                alt="Missing Image"
                                image={noImage} />
                            )}
                        {/* <CardContent>
                            <Typography className={classes.title} gutterBottom variant="h5">
                                {movie.title}
                            </Typography>
                            <Typography variant="body2">
                                {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
                            </Typography>
                            <Divider />
                        </CardContent> */}
                    </CardActionArea>
                    <MovieControls type={type} movie={movie}/>
                    {/* <CardActions>
                        <Button 
                        size="medium" 
                        disabled={watchlistDisabled}
                        className={classes.button}
                        onClick={() => addMovieToWatchlist(movie)}
                        >
                            Nominate
                        </Button>
                    </CardActions> */}
                </Card>
        </>
    )
}

export default MovieCard
