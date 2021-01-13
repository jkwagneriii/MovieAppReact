import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Navbar from './Navbar'
import {Box, TextField, Typography, Grid, Button } from '@material-ui/core'

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: 'white'
        },
        "& label": {
            color: 'red'
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#7A8785",
                backgroundColor: "#7A8785",
                opacity: 0.5
            },
            "&:hover fieldset": {
                borderColor: "#7A8785"
            },
            "&.Mui-focused fieldset": {
                borderColor: "#EA082E"
            }

        }
    }
})(TextField)

const useStyles = makeStyles(theme=> ({
    title: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "20px",
    },
}))

const Add = () => {
    const classes = useStyles()
    return (
        <>
            <Navbar />
            <Box component="div">
                <Grid container justify="center">
                    <Box component="form">
                        <Typography className={classes.title} variant="overline" style={{color: 'white', textAlign: 'center'}}>
                            Search 
                        </Typography>
                        <InputField
                        fullWidth={true}
                        label="Movie Name"
                        inputProps={{style:{color: 'white'}}}
                        variant="outlined"
                        margin="dense"
                        />
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default Add
