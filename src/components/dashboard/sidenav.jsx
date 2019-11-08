import React, { useState, useEffect } from "react";
import "./style.css";
import { Button, ButtonToolbar } from "react-bootstrap";
import { getUserProfile } from "../../actions/userActions";
import AddCollectionModal from "./AddCollectionModal";
import EditProfileModal from "./EditProfileModal";
import { useSelector, useDispatch } from "react-redux";

const Sidenav = () => {
  const [addCollectionModalShow, setAddCollectionModalShow] = useState(false);
  const [editProfileModalShow, setEditProfileModalShow] = useState(false);
  const profileData = useSelector(state => state.user.userProfile);
  console.log(profileData);

  return (
    <div>
      <div className="sidenav-container" style={{ backgroundColor: "#E9EEF4" }}>
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
          Edit Profile
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
          <p>Add Collection</p>
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
      </div>
    </div>
  );
};

export default Sidenav;
