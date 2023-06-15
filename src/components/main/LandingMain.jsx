
import diamanteVerde from "../../assets/images/decorative-green-diamond.svg";
import circuloAmarillo from "../../assets/images/decorative-yellow-circle.svg";
import movil from "../../assets/images/header-iphone.png"
import "./landingMain.css"
import AtomButton from "../atoms/AtomButton";
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';




function LandingMain(){
    return (
        <>
        <div className="mainContainer">
            <img src={diamanteVerde} alt="diamante verde" className="greenDiamond"/>
            <img src={circuloAmarillo} alt="círculo amarillo" className="yellow-cirle" />
            
            <div className="hcontainer">
                <h1>Mobile App Landing Page</h1>
                <p>Start focusing on your goals and get more things done with Sync mobile application. Its the first app to harness the power of social connections to help you stay focused and get organized</p>
                <div className="buttonsContainer">
                    <AtomButton variant="contained" className="buttonContained" button_content="DOWNLOAD" startIcon={<AppleIcon/>}  />
                    <AtomButton variant="contained" className="buttonContained" button_content="DOWNLOAD" startIcon={<ShopIcon/>} />
                    
                    
                </div>
            </div>  
            
            <div className="imageContainer">
                <img src={movil} alt="imagen de móvil" className="image"/>

            </div>  
        </div>
         
        
        </>
        
        
    )

}


export default LandingMain