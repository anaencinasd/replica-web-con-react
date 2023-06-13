
import { Drawer, Button } from '@mui/material'
import './navBar.css'
import NavListDrawer from './NavBarDrawer'
import {useState} from "react"




const NavBar = () => {
const [open, setOpen] = useState(false);
   
return (
    <>
    <Button 
    variant="contained"
    onClick={()=> setOpen(true)}
    >
        HOLA
    </Button>

    <Drawer
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
        >
            <NavListDrawer />

    </Drawer>
    </>
   )
}
    
    

    

export default NavBar



 