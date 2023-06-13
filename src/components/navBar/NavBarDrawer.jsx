import {Box} from "@mui/system";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import Button0 from "../atoms/Button0";
import './navBar.css';


function NavListDrawer ({navLinks}) {
    return(
        <>
        <Box className= "ResponsiveMenu">
            <nav>
                <List>
                    {
                        navLinks.map(item => (
                            <ListItem disablePadding key={item.title}>
                                
                            <ListItemButton component="a" href={item.path}>
                                <ListItemText>{item.title}</ListItemText>
                                <ListItemIcon>
                                    {item.icon}   
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        ))
                    }
                    <Button0 button_content={"DOWNLOAD"}></Button0>
                        
                    
                </List>
                
             
            </nav>
        </Box>
        
        </>
    )


}

export default NavListDrawer