import {Box} from "@mui/system";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import AtomButton from "../atoms/AtomButton";
import './navBar.css';



function NavListDrawer ({navLinks}) {
    return(
        <>
        <Box>
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
                    <AtomButton variant="Outlined" className="buttonOutlined" button_content="DOWNLOAD"/>
                        
                    
                </List>
                
             
            </nav>
        </Box>
        
        </>
    )


}

export default NavListDrawer