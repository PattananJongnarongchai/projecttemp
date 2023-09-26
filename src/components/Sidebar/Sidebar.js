/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

var ps;

const Sidebar = (props) => {
  const [collapseOpen, setCollapseOpen] = useState();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };
  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };
  // creates the links that appear in the left menu / Sidebar
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={closeCollapse}
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };

  const { bgColor, routes, logo } = props;
  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: "_blank",
    };
  }

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        {logo ? (
          <NavbarBrand className="pt-0" {...navbarBrandProps}>
            <img
              alt={logo.imgAlt}
              className="navbar-brand-img"
              src='data:image/jpeg;base64,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'
            />
          </NavbarBrand>
        ) : null}
        {/* User */}
        <Nav className="align-items-center d-md-none">
          <UncontrolledDropdown nav>
            <DropdownToggle nav className="nav-link-icon">
              <i className="ni ni-bell-55" />
            </DropdownToggle>
            <DropdownMenu
              aria-labelledby="navbar-default_dropdown_1"
              className="dropdown-menu-arrow"
              right
            >
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="..."
                    src={require("../../assets/img/theme/team-1-800x800.jpg")}
                  />
                </span>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-settings-gear-65" />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-calendar-grid-58" />
                <span>Activity</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-support-16" />
                <span>Support</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              {logo ? (
                <Col className="collapse-brand" xs="6">
                  {logo.innerLink ? (
                    <Link to={logo.innerLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </Link>
                  ) : (
                    <a href={logo.outterLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </a>
                  )}
                </Col>
              ) : null}
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Form */}
          <Form className="mt-4 mb-3 d-md-none">
            <InputGroup className="input-group-rounded input-group-merge">
              <Input
                aria-label="Search"
                className="form-control-rounded form-control-prepended"
                placeholder="Search"
                type="search"
              />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <span className="fa fa-search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          {/* Navigation */}
          <Nav navbar>{createLinks(routes)}</Nav>
          {/* Divider */}
          <hr className="my-3" />
          {/* Heading */}
          <h6 className="navbar-heading text-muted">Documentation</h6>
          {/* Navigation */}
          <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/overview?ref=adr-admin-sidebar">
                <i className="ni ni-spaceship" />
                Getting started
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/colors?ref=adr-admin-sidebar">
                <i className="ni ni-palette" />
                Foundation
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/alerts?ref=adr-admin-sidebar">
                <i className="ni ni-ui-04" />
                Components
              </NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Container>
    </Navbar>
  );
};

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
