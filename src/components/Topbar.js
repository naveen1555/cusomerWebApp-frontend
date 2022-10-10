import React from "react";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";
const Topbar = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 25px 10px 10px",
          background: "#75320B",
          alignItems: "center",
          color: "white",
        }}
      >
        <div style={{ display: "flex" }}>
          <HomeIcon />
          <div>Customer Web App</div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ paddingRight: "20px" }}>Customar Admin</div>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <div style={{ paddingLeft: "10px" }}>user</div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
