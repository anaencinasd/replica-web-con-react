import {Box} from "@mui/system";
import {List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button0 from "../atoms/Button0";
import './navBar.css';

function NavListDrawer () {
    return(
        <>
        <Box className= "ResponsiveMenu">
            <nav>
                <List disablePadding>
                        <ListItemButton>
                            <ListItemText primary="DESCRIPTION"/>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="FEATURES"/>
                        </ListItemButton>
                        <ListItemButton>
                         <ListItemText primary="SCREENS"/>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="EXTRA"/> 
                            <ListItemIcon>
                            <ArrowDropDownIcon/>
                            </ListItemIcon>                    
                        </ListItemButton>
                        <Button0 button_content={"DOWNLOAD"}></Button0>
                        
                    
                </List>
                
             
            </nav>
        </Box>
        
        </>
    )


}

export default NavListDrawer