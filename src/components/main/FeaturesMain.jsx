import IconsCard from "../atoms/IconsCard"
import "./featuresMain.css"
import { FaUsers, FaCode, FaCog, FaComments, FaRocket } from "react-icons/fa"
import Icons from "../atoms/Icons"



export default function FeaturesMain() {
  return (
    <div className="mainContainer">
        <div className="circlesContainer">
            <IconsCard>

            </IconsCard>

            <Icons className="circle-purple" icon={<FaUsers />} />

        </div>

    </div>
  )
}
