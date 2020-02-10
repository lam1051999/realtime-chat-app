import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import onlineIcon from "../../icons/onlineIcon.png";

const ITEM_HEIGHT = 48;

export default function Users({ users }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick} style={{ marginLeft: "20px" }}>
        <span style={{ color: "White", fontSize: "13px" }}>Members</span>
        <ArrowDropDownIcon style={{ color: "White" }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 5,
            width: 200
          }
        }}
      >
        {users.map((user, i) => (
          <div>
            <div
              className="onlineIcon"
              style={{ float: "right", marginRight: "50%", marginTop: "5px" }}
            >
              <img src={onlineIcon} alt="online"></img>
            </div>
            <MenuItem key={i} onClick={handleClose}>
              {user.name}
            </MenuItem>
          </div>
        ))}
      </Menu>
    </div>
  );
}
