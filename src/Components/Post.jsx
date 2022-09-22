import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import Add from "../Components/Add"
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
} from "@mui/material";



const Post = (props) => { 
      const {item} = props;
      const {item2} = props;
    return (
        <Card  sx={{ margin: 5 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "black" }} aria-label="recipe">
                        
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="John Doe"
                subheader="September 14, 2022"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                        {item}
                </Typography>
                <Typography variant="body3" fontSize={"15px"} mt={"15px"} position={"absolute"} color="text.secondary">
                        {item2}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite sx={{ color: "red" }} />}
                    />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    )
}
    


export default Post;