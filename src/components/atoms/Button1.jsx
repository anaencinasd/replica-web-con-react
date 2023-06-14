import {Button} from "@mui/material";
import "./button1.css"


function Button1 (button_content){
    return(
    <>
      <Button variant="contained" className="button1">
        {button_content}
      </Button>
    </>
    )
}


export default Button1