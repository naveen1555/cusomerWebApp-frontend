import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { Button, Dialog, DialogTitle, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./Sidebar.css";
import "./style.css";

const Sidebar = () => {
  const [addUser, setAddUser] = useState(false);
  const [addresDialogScreen, setAddresDialogScreen] = useState(false);
  const [customarInfo, setCustomarInfo] = useState("");
  const [customarInfoBackup, setCustomarInfoBackup] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getCustomar();
  }, []);

  const getCustomar = async () => {
    const url = "http://localhost:5000/selectCustomers";
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    setCustomarInfo(data);
    setCustomarInfoBackup(data);
  };

  const gotoUserDetails = (id) => {
    //     navigate("/", { state: { id: 1, name: "sabaoon" } });
    navigate(`custumor/${id}`);
  };

  const LoginForm = () => {
    setAddUser(true);
  };
  const handleClose = () => {
    setAddUser(false);
    setAddresDialogScreen(false);
  };

  const nextPage = () => {
    setAddresDialogScreen(true);
  };

  const enableSearch = () => {
    setOpenSearch(true);
  };

  const onEnterSearchText = (value) => {
    const allData = customarInfoBackup;
    const temp = customarInfoBackup;
    console.log("values", value);
    if (value.length == 0) {
      setCustomarInfoBackup(customarInfo);
    } else {
      let data = customarInfoBackup.filter((item) => {
        return item.userName.toLowerCase().includes(value.toLowerCase());
      });
      setCustomarInfoBackup(data);
    }
  };

  const closeHandler = () => {
    setOpenSearch(false);
  };

  return (
    <div>
      <div className="container">
        <div className="input-conatiner">
          <div style={{ fontWeight: 500 }}> Customers </div>
          {openSearch ? (
            <div style={{ display: "flex", alignItem: "center" }}>
              <input
                type="text"
                placeholder="search here..."
                onChange={(event) => {
                  setSearchInput(event.target.value);
                  onEnterSearchText(event.target.value);
                }}
              />
              <CloseIcon onClick={closeHandler} />
            </div>
          ) : (
            <div>
              <SearchIcon
                style={{ marginRight: "10px" }}
                onClick={enableSearch}
              />
              <LocalHospitalOutlinedIcon onClick={LoginForm} />
            </div>
          )}
        </div>
        <div style={{ textAlign: "right" }}>Sort by</div>

        {openSearch ? (
          <div>
            {customarInfoBackup.map((customar) => (
              <div
                key={customar.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "10px 0",
                }}
                onClick={() => {
                  gotoUserDetails(customar.customerid);
                }}
              >
                <div style={{ marginRight: "5px" }}>
                  {" "}
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
                <div>
                  <div style={{ fontWeight: 500 }}>{customar.userName}</div>
                  <div>{customar.email}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {customarInfo.length !== 0 &&
              customarInfo !== undefined &&
              customarInfo.map((customar) => (
                <div
                  key={customar.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px 0",
                  }}
                  onClick={() => {
                    gotoUserDetails(customar.customerid);
                  }}
                >
                  <div style={{ marginRight: "5px" }}>
                    {" "}
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </div>
                  <div>
                    <div style={{ fontWeight: 500 }}>{customar.userName}</div>
                    <div>{customar.email}</div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      <Dialog
        // style={{width:"500px"}}
        onClose={handleClose}
        open={addUser}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "10px",
          }}
        >
          <div className="activeScreen">&nbsp;</div>
          <div
            className={addresDialogScreen ? "activeScreen" : "non-activeScreen"}
          >
            &nbsp;
          </div>
        </div>
        <DialogTitle>Add User | Login Details</DialogTitle>

        {addresDialogScreen ? (
          <div style={{ padding: "20px", width: "397px" }}>
            <TextField
              style={{ marginBottom: "10px", width: "400px" }}
              fullWidth
              id="outlined-basic"
              placeholder="Address Line 1*"
              variant="outlined"
            />
            <TextField
              style={{ marginBottom: "10px", width: "400px" }}
              fullWidth
              id="outlined-basic"
              placeholder="Country*"
              variant="outlined"
            />
            <TextField
              style={{ marginBottom: "10px", width: "400px" }}
              fullWidth
              id="outlined-basic"
              placeholder="State*"
              variant="outlined"
            />
            <TextField
              style={{ marginBottom: "10px", width: "400px" }}
              fullWidth
              id="outlined-basic"
              placeholder="City*"
              variant="outlined"
            />
            <TextField
              style={{ marginBottom: "10px", width: "400px" }}
              fullWidth
              id="outlined-basic"
              placeholder="Zip Code*"
              variant="outlined"
            />
            <Button variant="outlined" onClick={handleClose} className="buttonStyle">
              Cancel
            </Button>
            <Button variant="outlined" onClick={nextPage}>
              Save
            </Button>
          </div>
        ) : (
          <div style={{ padding: "20px", width: "397px" }}>
            <TextField
              style={{ marginBottom: "10px", width: "400px" }}
              fullWidth
              id="outlined-basic"
              placeholder="User Name*"
              variant="outlined"
            />
            <TextField
              style={{ marginBottom: "10px", width: "400px" }}
              fullWidth
              id="outlined-basic"
              placeholder="First Name*"
              variant="outlined"
            />
            <TextField
              style={{ marginBottom: "10px", width: "400px" }}
              fullWidth
              id="outlined-basic"
              placeholder="Last Name*"
              variant="outlined"
            />
            <TextField
              style={{ marginBottom: "10px", width: "400px" }}
              fullWidth
              id="outlined-basic"
              placeholder="Password*"
              variant="outlined"
            />
            <TextField
              style={{ marginBottom: "10px", width: "400px" }}
              fullWidth
              id="outlined-basic"
              placeholder="Confirm Password*"
              variant="outlined"
            />
            <Button variant="outlined" onClick={handleClose} className="buttonStyle">
              Cancel
            </Button>
            <Button variant="outlined" onClick={nextPage}>
              Proceed
            </Button>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default Sidebar;
