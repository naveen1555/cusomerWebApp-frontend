import React, { useEffect, useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { Avatar, Button } from "@mui/material";
import "./style.css";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [userInfo, setUserInfo] = useState(0);
  const { id } = useParams();

  console.log("id", id);
  useEffect(() => {
    getCustomar();
  }, []);

  useEffect(() => {
    getCustomar();
  }, [id]);

  const getCustomar = async () => {
    const userId = 1;
    const url = `http://localhost:5000/selectCustomers/${id}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("setUserInfo", data);
    setUserInfo(data);
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        background: "#FFF3EC",
      }}
    >
      {userInfo.length !== 0 && userInfo !== undefined && (
        <div
          style={{
            width: "100%",
            background: "#fff",
            borderRadius: "5px",
          }}
        >
          <div style={{ padding: "25px", display: "flex" }}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              style={{ marginRight: "10px" }}
            />

            <div>
              <div className="userNameStyle">
                {userInfo.firstName} {userInfo.lastName}
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ display: "flex", marginRight: "20px" }}>
                  <PersonOutlineOutlinedIcon />
                  <div>{userInfo.userName}</div>
                </div>
                <div style={{ display: "flex", marginRight: "20px" }}>
                  <LocalPostOfficeOutlinedIcon />
                  <div>{userInfo.email}</div>
                </div>
                <div style={{ display: "flex" }}>
                  <CallOutlinedIcon />
                  <div> {userInfo.phone}</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ padding: "10px 75px", display: "flex" }}>
            <Button variant="outlined" style={{ marginRight: "10px" }}>
              Edit
            </Button>
            <Button variant="outlined">Delete Customar</Button>
          </div>
          <hr />
          <div style={{ padding: "10px 25px" }}>
            <h3>Personal Details</h3>
            <div
              style={{
                display: "flex",
                padding: "10px",
                margin: "20px 0",
                borderRadius: "10px",

                display: "grid",
                gridGap: "20px",
                gridTemplateColumns: "24% 24% 24% 24%",
              }}
            >
              <div className="labelContainer">
                <div className="labelName">First Name</div>
                <div className="labelValue">{userInfo.firstName}</div>
              </div>
              <div  className="labelContainer">
                <div className="labelName">Last Name</div>
                <div className="labelValue">{userInfo.lastName}</div>
              </div>
              <div  className="labelContainer">
                <div className="labelName">Gender</div>
                <div className="labelValue">{userInfo.gender}</div>
              </div>
              <div  className="labelContainer">
                <div className="labelValue">Date of Birth</div>

                <div>{userInfo.dob}</div>
              </div>
            </div>

            <h3>Address</h3>
            <div className="addressContainer">
              <div
                className="row"
              >
                <div> Address line 1</div>
                <div>{userInfo.address}</div>
              </div>
              <div
                className="row"
              >
                <div>LandMark</div>

                <div>{userInfo.landmark}</div>
              </div>
              <div
                className="row"
              >
                <div>City</div>
                <div>{userInfo.city}</div>
              </div>
              <div
                className="row"
              >
                <div>State</div>
                <div>{userInfo.state}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
