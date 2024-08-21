import Image from "next/image";
import getStripe from '@/utils/get-stripe'
import {SignedIn, SignedOut, UserButton} from '@clerk/nextjs'
import { Toolbar, Typography, Container, Head, AppBar, Button} from "@mui/material";

export default function Home() {

  return(
    <Container maxWidth="lg">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name = "description" content="Create Flashcard from your text"/>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant = "h6"> Flashcard SaaS</Typography>
          <SignedOut>
            <Button>Login</Button>
            <Button>Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </Toolbar>
      </AppBar>
    </Container>

  )




}
