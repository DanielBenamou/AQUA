import { AppBar, styled, Box, Toolbar, Typography } from "@mui/material"
import PetsIcon from '@mui/icons-material/Pets';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import HiveIcon from '@mui/icons-material/Hive';
import PublicIcon from '@mui/icons-material/Public';



const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "black",
})
const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    color: "#212121",
}))
const Icons = styled("Box")(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))
const UserBox = styled("Box")(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h3" fontSize={"30px"} sx={{ display: { xs: "none", sm: "block" } }}>
                    <PublicIcon fontSize="35px" />
                </Typography>
                <AccountCircleIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Input placeholder="Search for friends" />
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon color=" #FFFFFF" />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications color=" #FFFFFF" />
                    </Badge>
                    <Avatar src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
                        onClick={(e) => setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={(e) => setOpen(true)} >
                    <Avatar src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" />
                    <Typography fontFamily={"fantasy"} letterSpacing={"2px"} color={"#212121"} variant="span">Danny</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => { setOpen(false) }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                    <MenuItem>profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>



    )
}

export default NavBar 