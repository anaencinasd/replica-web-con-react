import { Container } from "@mui/material"
import NavBar from "../components/navBar/NavBar"
import Button1 from "../components/atoms/Button0"





function LandingPage(){
    return(
        <>
        <NavBar/>
        <Container>
            <h1>Syncs App Feature</h1>
            <p>Start focusing on your goals and get more things done with Sync mobile application. Its the first app to harness the power of social connections to help you stay focused and get organized</p>
            <Button1 button_content="DOWNLOAD"></Button1>
            
        </Container>
        
       

    
        
        
        
        </>
    )

}

export default LandingPage