import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { makeStyles } from '@mui/styles'

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCameraIcon />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm" style={{marginTop:'100px'}}>
                        <Typography variant='h2' align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>

                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Hello everyone. This is a photo album and I'm trying to make this sentence as long as possible so we can see how does it look like on the screen.
                        </Typography>
                        <div>
                            <Grid container spacing={2} justifyContent={'center'}>
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default App