
// import "./featuresMain.css"
// //import { FaUsers } from "react-icons/fa6"
// //import FaUsers from "react-icons/fa6/FaUsers"
// import Icons from "../atoms/Icons"
// //FaCode, FaCog, FaComments, FaRocket
// import { FiArrowLeftCircle } from "react-icons/fi";




// export default function FeaturesMain() {
//   return (
//     <div className="mainContainer">
//         <div className="circlesContainer">

//          <Icons style="circle-purple">
         
//         </Icons>   

            

//         </div>

//     </div>
//   )
// }

import { FaUsers } from "react-icons/fa";
import Icons from "../atoms/Icons";

export default function FeaturesMain() {
  return (
    <div className="mainContainer">
      <div className="circlesContainer">
        <Icons style="purple-circle" icon="fas fa-users" />
      </div>
    </div>
  );
}
