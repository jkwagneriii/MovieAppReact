import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
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
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    // mainContainer: {
    //     // background: "#b2af97",
    //     height: "100%"
    // },
    delete: {
        display: "block",
        marginTop: "5px",
        margin: "auto auto",
        padding: "3px 8px",
        background: "#EA082E"
    }
    // button: {
    //     background: "#EA082E"
    // },
})

const MovieControls = ({ movie, type }) => {
    const classes = useStyles();

    return (
        <>
            <Box>
                {type === 'watchlist' && (
                    <>
                        <Button className={classes.delete}>
                            <DeleteIcon/>
                        </Button>
                    </>
                )}
            </Box>
        </>
    )
}

export default MovieControls
