import React from 'react'
import { AppBar, Typography } from '@material-ui/core'
import {  Link } from 'react-router-dom'
import useStyle from './styles'
import memories from '../../images/memories.png'

const Navbar = () => {
    const classes = useStyle()
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
        <Typography 
        // component={Link} to="/"
         className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
        </div>
      </AppBar>
  )
}

export default Navbar