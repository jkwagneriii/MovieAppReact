import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import {
AppBar,
Toolbar,
ListItem,
IconButton,
ListItemText,
ListItemIcon,
Avatar,
Divider,
List,
Typography,
Box    
} from '@material-ui/core'
import {
ArrowBack,
Home,
} from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import avatar from '../images/popcorn.jpg'

// CSS STYLING
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "black",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "#EA082E"
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <SearchIcon/>,
        listText: "Search Movies",
        listPath: "/search"
    },
    {
        listIcon: <FavoriteIcon/>,
        listText: "Top 5",
        listPath: "/topfive"
    },
    // {
    //     listIcon: <ContactMail/>,
    //     listText: "Contact",
    //     listPath: "/contact"
    // },
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open})
    }
    const classes = useStyles()

    const sideList = slider => (
        <Box 
        className={classes.menuSliderContainer} 
        component="div"
        onClick={toggleSlider(slider, false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt="Popcorn and Sodie Pop" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key)=>(
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                    <ListItemIcon className={classes.listItem}>
                        {lsItem.listIcon}
                    </ListItemIcon>
                    <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{background: 'black', opacity: 0.75}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <ArrowBack style={{color: '#EA082E'}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color: '#EA082E'}}>
                        Movie Menu
                    </Typography>
                    <MobileRightMenuSlider
                    anchor="right"
                    open={state.right}
                    onClose={toggleSlider("right", false)}
                    >
                        {sideList("right")} 
                    </MobileRightMenuSlider>
                        
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
