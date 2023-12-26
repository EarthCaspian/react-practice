import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://image.dummyjson.com/400x200/008080/ffffff?text=Hello+Peter"
        />
        <Dropdown pointing="top right">
          <Dropdown.Menu>
            <Dropdown.Item text="Info" icon="info" />
            <Dropdown.Item onClick={props.signOut} text="Logout" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
