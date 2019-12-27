import React, { useState, useEffect } from "react";
import "./style.css";
import { Button, ButtonToolbar } from "react-bootstrap";
import { getUserProfile } from "../../actions/userActions";
import AddCollectionModal from "./AddCollectionModal";
import EditProfileModal from "./EditProfileModal";
import LogoutModal from "./LogoutModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faUserCog,
  faPowerOff
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

const Sidenav = props => {
  const [addCollectionModalShow, setAddCollectionModalShow] = useState(false);
  const [editProfileModalShow, setEditProfileModalShow] = useState(false);
  const [logoutModalShow, setLogoutModalShow] = useState(false);
  const profileData = useSelector(state => state.user.userProfile);
  console.log(profileData);

  return (
    <div style={{ zIndex: "1000000" }}>
      <div
        className="sidenav-container"
        onClick={props.toggleNav}
        style={{ backgroundColor: "#E9EEF4" }}
      >
        {/* <div><FontAwesomeIcon icon={faWindowClose} style={{ fontSize: "35px", position: "absolute", right: "0"}} /></div> */}
        <div className="profile-img-comtanier">
          <img src={profileData.profileImg} alt="" />
          <h5 className="" style={{ fontWeight: "bold" }}>
            {profileData.profileName}
          </h5>
        </div>
        <hr />
        <p
          className="edit-profile-link-text"
          onClick={() => setEditProfileModalShow(true)}
        >
          <p>
            <FontAwesomeIcon
              icon={faUserCog}
              style={{ fontSize: "20px", marginRight: "5px" }}
            />
            Edit Profile
          </p>
        </p>
        <hr />
        <Button
          style={{
            borderRadius: "30px",
            paddingTop: "17px",
            fontWeight: "bold"
          }}
          onClick={() => setAddCollectionModalShow(true)}
        >
          <p>
            <FontAwesomeIcon
              icon={faPlus}
              style={{ fontSize: "20px", marginRight: "5px" }}
            />
            Add Collection
          </p>
        </Button>
        <Button
          style={{
            borderRadius: "30px",
            paddingTop: "17px",
            fontWeight: "bold",
            backgroundColor: "red",
            borderColor: "red"
          }}
          onClick={() => setLogoutModalShow(true)}
        >
          <p>
            <FontAwesomeIcon
              icon={faPowerOff}
              style={{ fontSize: "20px", marginRight: "5px" }}
            />
            Logout
          </p>
        </Button>
        <ButtonToolbar>
          <AddCollectionModal
            show={addCollectionModalShow}
            onHide={() => setAddCollectionModalShow(false)}
            dialogClassName="modal-90w"
          />
        </ButtonToolbar>
        <ButtonToolbar>
          <EditProfileModal
            show={editProfileModalShow}
            onHide={() => setEditProfileModalShow(false)}
            dialogClassName="modal-90w"
          />
        </ButtonToolbar>
        <ButtonToolbar>
          <LogoutModal
            show={logoutModalShow}
            onHide={() => setLogoutModalShow(false)}
            dialogClassName="modal-90w"
          />
        </ButtonToolbar>
      </div>
    </div>
  );
};

export default Sidenav;
