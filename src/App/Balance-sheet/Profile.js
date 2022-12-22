import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import netflix from "../images/netflix-3.svg";
import face from "../images/facebook.svg";
// import {user-plus} from "@fortawesome/free-solid-svg-icons"

function Profile() {
  return (
    <div className="bg-light row py-2 d-flex ">
      <nav className="col-lg-6 py-4 bg-light">
        <ul className="d-flex list-unstyled justify-content-evenly"> 
          <li> HOME </li>
          <li> About </li>
          <li> Contact </li>
          <li> Portfolio </li>
          <li> Address </li>
        </ul>
      </nav>

      {/* <div className="col-lg-6">
        <div className="p-2 rounded rounded-circle">
          <AccountCircleIcon color="error" />
        </div>
      </div>
    
      </div> */}
    </div>
  );
}

export default Profile;
