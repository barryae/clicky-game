import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function NavBar() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h2" color="inherit">
                        Clicky Game
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;