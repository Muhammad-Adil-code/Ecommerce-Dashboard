import React, { Fragment, useEffect } from "react";
import { Badge, Card, Col, ListGroup, Row, Tab } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import PageTitle_ from "../../src/components/PageTitle";
import { moodChange, pageTitle } from "../../src/redux/action/utils";

const UiListGroup = () => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("List Group");
  }, []);
  const listItem = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
    "Vestibulum at eros",
  ];
  return (
    <Fragment>
      <PageTitle_ mother="Bootstrap" active="List Group" />
      <Row>
        <Col xl="4">
          <Card>
            <Card.Header>
              <Card.Title>Basic List Group</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="basic-list-group">
                <ListGroup as="ul">
                  {listItem.map((list, i) => (
                    <Fragment key={i}>
                      <ListGroup.Item as="li">{list}</ListGroup.Item>
                    </Fragment>
                  ))}
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl="4">
          <Card>
            <Card.Header>
              <Card.Title>List Active items</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="basic-list-group">
                <ListGroup as="ul">
                  {listItem.map((list, i) => (
                    <Fragment key={i}>
                      {i === 0 ? (
                        <ListGroup.Item as="li" active>
                          {list}
                        </ListGroup.Item>
                      ) : (
                        <ListGroup.Item as="li">{list}</ListGroup.Item>
                      )}
                    </Fragment>
                  ))}
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl="4">
          <Card>
            <Card.Header>
              <Card.Title>List Disabled items</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="basic-list-group">
                <ListGroup as="ul">
                  {listItem.map((list, i) => (
                    <Fragment key={i}>
                      {i === 0 ? (
                        <ListGroup.Item as="li" disabled>
                          {list}
                        </ListGroup.Item>
                      ) : (
                        <ListGroup.Item as="li">{list}</ListGroup.Item>
                      )}
                    </Fragment>
                  ))}
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl="4">
          <Card>
            <Card.Header>
              <Card.Title>Links and buttons items</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="basic-list-group">
                <ListGroup>
                  {listItem.map((list, i) => (
                    <Fragment key={i}>
                      {i === 0 ? (
                        <ListGroup.Item action active>
                          {list}
                        </ListGroup.Item>
                      ) : i === listItem.length - 1 ? (
                        <ListGroup.Item
                          action
                          className="list-group-item-action disabled"
                        >
                          {list}
                        </ListGroup.Item>
                      ) : (
                        <ListGroup.Item action>{list}</ListGroup.Item>
                      )}
                    </Fragment>
                  ))}
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl="4">
          <Card>
            <Card.Header>
              <Card.Title>Flush</Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup as="ul" variant="flush">
                {listItem.map((list, i) => (
                  <Fragment key={i}>
                    <ListGroup.Item as="li">{list}</ListGroup.Item>
                  </Fragment>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col xl="4">
          <Card>
            <Card.Header>
              <Card.Title>With badges</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="basic-list-group">
                <ListGroup>
                  {listItem.map((list, i) => (
                    <ListGroup.Item
                      className="d-flex justify-content-between align-items-center"
                      key={i}
                    >
                      {list}
                      <Badge variant="primary" pill>
                        {i + 1}
                      </Badge>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl="6">
          <Card>
            <Card.Header>
              <Card.Title>Custom content</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="basic-list-group">
                <ListGroup>
                  <ListGroup.Item
                    action
                    active
                    className="flex-column align-items-start"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-3 text-white">
                        List group item heading
                      </h5>
                      <small>3 days ago</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small>Donec id elit non mi porta.</small>
                  </ListGroup.Item>
                  <ListGroup.Item action className="flex-column">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-3">List group item heading</h5>
                      <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-muted">
                      Donec id elit non mi porta.
                    </small>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    className="flex-column align-items-start"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-3">List group item heading</h5>
                      <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-muted">
                      Donec id elit non mi porta.
                    </small>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl="6">
          <Card>
            <Card.Header>
              <Card.Title>Contextual</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="basic-list-group">
                <ListGroup as="ul">
                  <ListGroup.Item variant="">
                    Dapibus ac facilisis in
                  </ListGroup.Item>
                  <ListGroup.Item variant="primary">
                    This is a primary list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="secondary">
                    This is a secondary list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="success">
                    This is a success list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="danger">
                    This is a danger list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="warning">
                    This is a warning list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="info">
                    This is a info list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="light">
                    This is a light list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark">
                    This is a dark list group item
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <div className="col-lg-12">
          <Card>
            <Card.Header>
              <Card.Title>List Tab</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="basic-list-group">
                <Row>
                  <Tab.Container defaultActiveKey="#home">
                    <Col lg="6" xl="2">
                      <ListGroup className="mb-4" id="list-tab">
                        <ListGroup.Item action href="#home">
                          Home
                        </ListGroup.Item>
                        <ListGroup.Item action href="#profile">
                          Profile
                        </ListGroup.Item>
                        <ListGroup.Item action href="#messages">
                          Messages
                        </ListGroup.Item>
                        <ListGroup.Item action href="#settings">
                          Settings
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col lg="6" xl="10">
                      <Tab.Content>
                        <Tab.Pane eventKey="#home">
                          <h4 className="mb-4">Home Tab Content</h4>
                          <p>
                            This is the content for the Home tab. It displays general information about the selected item or category. You can customize this section to show relevant details, summary statistics, or a welcome message for the user.
                            Everything here is designed to be responsive and accessible.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#profile">
                          <h4 className="mb-4">Profile Tab Content</h4>
                          <p>
                            Here you can view the profile details. This section is ideal for displaying user information, bio, contact details, or specific settings related to the user profile.
                            Modify this content to suit your application&apos;s user management interface.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#messages">
                          <h4 className="mb-4">Messages Tab Content</h4>
                          <p>
                            This tab displays your recent messages and notifications. You can communicate with other users or receive system alerts here.
                            Keep your users engaged by providing real-time updates and an easy-to-use messaging interface.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#settings">
                          <h4 className="mb-4">Settings Tab Content</h4>
                          <p>
                            Configure your application settings here. You can toggle various options, manage preferences, and customize your experience.
                            Ensure your settings are saved to apply changes across the platform.
                          </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Tab.Container>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Fragment>
  );
};

export default connect(null, { pageTitle })(UiListGroup);
