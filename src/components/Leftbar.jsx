import { Container, makeStyles, Typography } from "@material-ui/core"
import { CameraAlt, CollectionsBookmark, FormatListBulleted, Home, People, PhoneIphone, Settings, SlowMotionVideo, Storefront } from "@material-ui/icons"


const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        position: "sticky",
        top: 0,
        color: "white",
        paddingTop: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "white",
            color: "#555",
            border: "1px solid #dcdcdc",
        },
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(4),
            cursor: "pointer",
        },
        [theme.breakpoints.down("sm")]: {
            justifyContent: "space-around",
        },
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: "20px",
        },
    },
    text: {
        fontWeight: 500,
        fontSize: "18px",
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
    }
}))


  





const Leftbar = () => {

    const classes = useStyles();

    return <Container className={classes.container}>
        <div className={classes.item}>
            <Home className={classes.icon} />
            <Typography className={classes.text}>Hompage</Typography>
        </div>
        <div className={classes.item}>
            <FormatListBulleted className={classes.icon} />
            <Typography className={classes.text}>Lists</Typography>
        </div>
        <div className={classes.item}>
            <People className={classes.icon} />
            <Typography className={classes.text}>Friends</Typography>
        </div>
        <div className={classes.item}>
            <CameraAlt className={classes.icon} />
            <Typography className={classes.text}>Carmera</Typography>
        </div>
        <div className={classes.item}>
            <SlowMotionVideo className={classes.icon} />
            <Typography className={classes.text}>videos</Typography>
        </div>
        <div className={classes.item}>
            <PhoneIphone className={classes.icon} />
            <Typography className={classes.text}>Apps</Typography>
        </div>
        <div className={classes.item}>
            <CollectionsBookmark className={classes.icon} />
            <Typography className={classes.text}>Collections</Typography>
        </div>
        <div className={classes.item}>
            <Storefront className={classes.icon} />
            <Typography className={classes.text}>Market Place</Typography>
        </div>
        <div className={classes.item}>
            <Settings className={classes.icon} />
            <Typography className={classes.text}>Settings</Typography>
        </div>
    </Container>
};

export default Leftbar;