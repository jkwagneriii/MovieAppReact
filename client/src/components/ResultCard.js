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
import noImage from '../images/noImage.jpg'

const useStyles = makeStyles({
    // mainContainer: {
    //     // background: "#b2af97",
    //     height: "100%"
    // },
    cardContainer: {
        padding: "5px",
        margin: "10px 10px",
        background: "white"
    },
    button: {
        background: "#EA082E"
    },
})

const ResultCard = ({ movie }) => {
    const classes = useStyles()

    return (
        <>
            <Grid item xs={12} sm={8} md={6}>
                {/* Project 1  */}
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
                        <Button size="medium" className={classes.button}>
                            Nominate
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default ResultCard
