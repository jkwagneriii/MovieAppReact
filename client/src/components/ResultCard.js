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

const useStyles = makeStyles({
    // mainContainer: {
    //     // background: "#b2af97",
    //     height: "100%"
    // },
    // cardContainer: {
    //     maxwidth: 300,
    //     padding: "3rem",
    //     margin: "5rem 2rem",
    //     background: "#efd5b6"
    // },
    // poster: {
    //     height: "100%"
    // }
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
                                height="100%"
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                className={classes.poster} />
                        ) : (
                                // FIND FILLER IMAGE 
                            <CardMedia
                                alt={`${movie.title} Poster`}
                                image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
                            )}
                        <CardContent>
                            <Typography className={classes.title} gutterBottom variant="h5">
                                {movie.title}
                            </Typography>
                            <Typography variant="body2" color="red">
                                {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
                            </Typography>
                            <Divider />
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="#758877">
                            Nominate
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default ResultCard
