
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { styled } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { EmojiEmotions } from '@mui/icons-material';
import PhotoIcon from '@mui/icons-material/Photo';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "4px"
})

const Add = (props) => {
const {setItem} = props;


const initialFormData = Object.freeze({
text: "",
date: "",
});
const [formData, setFormData] = useState(initialFormData);
const handleChange = (e) => {

    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};
const handleSubmit = () => {
    const post = {text:formData.text,id:"0",date:new Date().toLocaleString().split(",").join(" / ")};
    setItem(post);
    setOpen(false);
}


    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip onClick={(e) => setOpen(true)} title="Add" sx={{ position: "fixed", bottom: 20, ml: 3, left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab bgcolor="success" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box
                    width={400}
                    height={280}
                    bgcolor={"background.default"}
                    color={"text.primary"}
                    p={3}
                    borderRadius={5}>
                    <Typography variant="h6" color="grey" textAlign="center"></Typography>
                    <UserBox>
                        <Avatar src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography
                            fontWeight={500}
                            variant="span"
                        >John Doe
                        </Typography>
                    </UserBox>
                    <TextField className='input1'
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind ?"
                        variant="standard"
                        onChange={handleChange}
                        name="text"
                    />
                    <Stack
                        direction="row"
                        gap={1}
                        mt={2}
                        mb={2}
                    >
                        <EmojiEmotions color="primary" />
                        <PhotoIcon color="secondary" />
                        <VideoCameraBackIcon color="success" />
                        <PersonAddIcon color="error" />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button onClick={handleSubmit} > Post   </Button>
                        <Button sx={{ width: "100px" }}>

                            <CalendarMonthIcon/>
                        </Button>
                    </ButtonGroup>
                    <Typography>
                    </Typography>
                </Box>
            </StyledModal>



        </>
    )
}

export default Add