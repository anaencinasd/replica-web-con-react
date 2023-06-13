import {Button} from "@mui/material"
import "./button0.css"

function Button0 ({button_content}) {
    return(
        <>
       <Button variant="outlined" className="button0">
            {button_content}
       </Button>
        </>
    )
}



export default Button0