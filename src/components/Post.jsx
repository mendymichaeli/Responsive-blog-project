import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(4),
    },
    media: {
        height: 250,
        marginBottom: 10,
        [theme.breakpoints.down("sm")]: {
            height: 150,
        }
    },
    description: {
        fontSize: 18,
    }

}))


const Post = ({ item }) => {
/* console.log("post Props:", item) */
  const classes = useStyles();

    return <Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.media} title="My Post" image={item.img} />
            <CardContent>
                <Typography variant="h4" gutter="true" >{item.title}</Typography>
                <Typography className={classes.description} >
                    {item.description}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" style={{ cursor: "pointer" }} >Share</Button>
            <Button size="small" color="primary" style={{ cursor: "pointer" }} >Learn more...</Button>
        </CardActions>
    </Card>
};

export default Post;