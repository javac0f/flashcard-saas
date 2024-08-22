'use client'

import Image from "next/image";
import {getStripe, checkoutSession, checkoutSessionJson} from '@/utils/get-stripe'
import {SignedIn, SignedOut, UserButton} from '@clerk/nextjs'
import {Toolbar, Typography, Container, AppBar, Button, Box, Grid} from "@mui/material"
import Head from 'next/head'


export default function Home() {


  const handleSubmit = async()=>{
    const checkoutSession = await fetch('/app/checkout_session', {
      method: 'POST',
      headers: {
        origin: 'http://localhost:3000',
      },
    })
    const checkoutSessionJson = await checkoutSession.json()

    if(checkoutSession.statusCode === 500){
      console.error(checkoutSession.message)
      return
    }
  
    const stripe = await getStripe()
    const {error} = await stripe.redirectToCheckout({
      sessionId: checkout
    })
  
    if(error){
      console.warn(error.message)
    }
  }




  return(
    <Container maxWidth="lg">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name = "description" content="Create Flashcard from your text"/>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant = "h6" style = {{flexGrow: 1}}> Flashcard SaaS</Typography>
          <SignedOut>
            <Button color = "inherit" href = "/sign-in">Login</Button>
            <Button color = "inherit" href = "sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </Toolbar>
      </AppBar>


      {/* HERO SECTION */}
      <Box sx={{textAlign: 'center', my: 4}}>
        <Typography variant="h2" component="h1" gutterBottom>Welcome to Flashcard SaaS</Typography>
        <Typography variant="h5" gutterBottom>
          {' '}
          The easiest way to create flashcards from your text
        </Typography>
        <Button variant="contained" color="primary" sx={{mt: 2, mr: 2}} href="/generate">Get Started</Button>
        <Button variant="outlined" color="primary" sx={{mt: 2}}>Learn More</Button>
      </Box>

      {/* FEATURE SECTION */}
      <Box sx={{my: 6, textAlign:'center'}}>
        <Typography variant="h4" gutterBottom>Features</Typography>
        <Grid container spacing={4}>

          <Grid item xs = {12} md = {4}>
            <Box sx = {{
                  p: 3,
                  border: '1px solid',
                  borderColor: 'grey.300',
                  borderRadius: 2
                  }}>

              <Typography variant = "h6"> Easy Text Input </Typography>
              <Typography gutterBottom>
                {' '}
                Creating Stuff has never been easier!
              </Typography> 
            </Box>
          </Grid>

          <Grid item xs = {12} md = {4}>
            <Box sx = {{
                  p: 3,
                  border: '1px solid',
                  borderColor: 'grey.300',
                  borderRadius: 2
                  }}>

              <Typography variant = "h6"> Easy Text Input </Typography>
              <Typography gutterBottom>
                {' '}
                Creating Stuff has never been easier!
              </Typography> 
            </Box>
          </Grid>
          <Grid item xs = {12} md = {4}>
            <Box sx = {{
                  p: 3,
                  border: '1px solid',
                  borderColor: 'grey.300',
                  borderRadius: 2
                  }}>

              <Typography variant = "h6"> Easy Text Input </Typography>
              <Typography gutterBottom>
                {' '}
                Creating Stuff has never been easier!
              </Typography> 
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* PRICING SECTION */}
      <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4" gutterBottom>Pricing</Typography>
        <Grid container spacing={4}>

          <Grid item xs = {12} md = {6}>
            <Box sx = {{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2
            }}>
              <Typography variant = "h6"> Basic </Typography>
              <Typography variant = "h5" gutterBottom> $5.00/month </Typography>
              <Typography gutterBottom>
                {' '}
                Basic functionality and limited storage
              </Typography>  
              <Button variant = "contained" color = "primary" sx = {{mt:2}}>Choose Basic</Button> 
            </Box>  
          </Grid>        

          <Grid item xs = {12} md = {6}>
            <Box sx = {{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2
            }}>
              <Typography variant = "h6"> Pro </Typography>
              <Typography variant = "h5"> $15.00/month </Typography>
              <Typography gutterBottom>
                {' '}
                All functionality and Unlimited Storage
              </Typography> 
              <Button variant = "contained" color = "primary" sx = {{mt:2}} onClick = {handleSubmit}>Choose Pro</Button> 
  
            </Box>  
          </Grid>
          
        </Grid>
      </Box>





    </Container>

  )




}
