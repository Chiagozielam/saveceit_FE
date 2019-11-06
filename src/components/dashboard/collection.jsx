import React, { useState } from "react";
import { Card, Button, ButtonToolbar } from "react-bootstrap";
import CollectionModal from "./collectionModal";

const CollectionCard = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Card className="collection-card " style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn.thedesigninspiration.com/wp-content/uploads/2014/06/App-Dashboard-Design-012.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <ButtonToolbar>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            View Collection
          </Button>
          <CollectionModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            dialogClassName="modal-90w"
          />
        </ButtonToolbar>
      </Card.Body>
    </Card>
  );
};

export default CollectionCard;
