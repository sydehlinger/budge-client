import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default class NavigationBar extends React.Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Budge</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/ExpenseInput">Expense Input</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    };

}