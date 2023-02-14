import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <section>
      <ButtonGroup gap="4">
        <Button variant="outline" colorScheme="gray">
          <NavLink to="/">Home</NavLink>
        </Button>
        <Button variant="outline" colorScheme="gray">
          <NavLink to="/about">About</NavLink>
        </Button>
        <Button variant="outline" colorScheme="gray">
          <NavLink to="/contact">Contact</NavLink>
        </Button>
      </ButtonGroup>
    </section>
  );
};

export default NavBar;
