import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
Card,
CardActionArea,
CardMedia,
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
    title: {
        display: "block",
        margin: "auto auto",
        fontSize: "8px"
    },
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
                    </CardActionArea>
                    <MovieControls type={type} movie={movie}/>
                </Card>
        </>
    )
}

export default MovieCard
