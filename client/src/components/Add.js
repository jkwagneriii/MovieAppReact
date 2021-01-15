import React, { useState } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Navbar from './Navbar'
import ResultCard from './ResultCard'
import {Box, TextField, Typography, Grid, Button, List, ListItem } from '@material-ui/core'

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
    cleaning: {
        margin: "2rem 8rem"
    }
}))



const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = (e) => {
        e.preventDefault();

        setQuery(e.target.value);

        fetch({
            protocol: "https",
            hostname: "//api.themoviedb.org",
            path: `/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`,
            toString: function () {
                return `${this.protocol}://${this.hostname}${this.path}`;
            }
        })
        .then((res) => res.json())
        .then(data => {
            if(!data.errors){
                setResults(data.results)
            } else {
                setResults([])
            }
        });
    }

    const classes = useStyles()
    return (
        <>
            <Navbar />
            <Box component="div">
                <Grid container item justify="center" xs={12} sm={12} md={12}>
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
                        value={query}
                        onChange={onChange}
                        />
                    </Box>

                </Grid>
                <Grid className={classes.cleaning} container item justify="center" xs={6} sm={11} md={12}>
                   {results.length > 0 && (
                       <Box>
                           {results.map(movie => (
                              <Box key={movie.id}>
                                  <ResultCard movie={movie}/>
                              </Box> 
                           ))}
                       </Box>
                   )}
                </Grid>
            </Box>
        </>
    )
}

export default Add
