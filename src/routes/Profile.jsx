import React from "react";
import { useHistory } from "react-router";
import { authService } from "../myFirebase";

const Profile = () => {
  const history = useHistory();

  const handleLogOut = () => {
    authService.signOut();
    history.push("/");
  };

  return (
    <span aria-label="Log Out Button">
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </span>
  );
};

export default Profile;
