import Button1 from "../atoms/Button1"
import diamanteVerde from "../../assets/images/decorative-green-diamond.svg";
import circuloAmarillo from "../../assets/images/decorative-yellow-circle.svg";
import movil from "../../assets/images/header-iphone.png"
import "./landingMain.css"

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
                    <Button1 button_content="DOWNLOAD"></Button1>
                    <Button1 button_content="DOWNLOAD"></Button1>
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