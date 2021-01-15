import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import Navbar from './Navbar'
import MovieCard from './MovieCard';

const Watchlist = () => {
    const {watchlist} = useContext(GlobalContext);

    return (
        <>
            <Navbar />
            <div className="movie-page">
                <div className="container">
                    <div className="header">
                        <h1 className="heading">My Nominations</h1>
                    </div>
                    
                    {watchlist.length > 0 ? (
                    <div className="movie-grid">
                        {watchlist.map(movie => (
                            <MovieCard movie={movie} type="watchlist" />
                        ))}
                    </div>
                    ) : (
                        <h2>No Nominated Movies. Add some!!!</h2>
                    )}
                </div>
            </div>
        </>
    )
}

export default Watchlist
