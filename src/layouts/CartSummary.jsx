import React from "react";
import { NavLink } from "react-router-dom";
import {Dropdown} from "semantic-ui-react"

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Cart">
        <Dropdown.Menu>
          <Dropdown.Item>Iphone</Dropdown.Item>
          <Dropdown.Item>Samsung</Dropdown.Item>
          <Dropdown.Item>Google</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item as={NavLink} to="/cart">Go to Cart</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
