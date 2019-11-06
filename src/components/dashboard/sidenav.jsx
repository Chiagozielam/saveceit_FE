import React, {useState} from "react";
import "./style.css";
import { Button, ButtonToolbar } from "react-bootstrap";
import AddCollectionModal from "./AddCollectionModal";

const Sidenav = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <div className="sidenav-container" style={{ backgroundColor: "#E9EEF4" }}>
        <div className="profile-img-comtanier">
          <img
            src="https://www.celebritynews.wiki/wp-content/uploads/2018/11/Kaylee-Bryant-Age-Birthday-Height-Net-Worth-Family-Salary.jpg"
            alt=""
          />
          <h5 className="user-name">Kaylee Bryant</h5>
        </div>
        <Button>
          <p>Hello, welcome Here</p>
        </Button>
        <Button>
          <p>Hello, welcome Here</p>
        </Button>
        <Button
            style={{
              borderRadius: "30px",
              paddingTop: "17px",
              fontWeight: "bold"
            }}
            onClick={() => setModalShow(true)}
          >
            <p>Add Collection</p>
          </Button>
        <ButtonToolbar>
          <AddCollectionModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            dialogClassName="modal-90w"
          />
        </ButtonToolbar>
      </div>
    </div>
  );
};

export default Sidenav;
