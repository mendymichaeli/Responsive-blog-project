import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core"
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons"
import { useState } from "react";

const useStyles = makeStyles((theme) => ({

    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            display: (props)=>(props.open ? "flex" : "none"),
            width:"70%",
            justifyContent:"space-between"
        }
    },
    searchButton:{
        
        [theme.breakpoints.up("sm")]: {
            display: "none"
        },
        marginRight: theme.spacing(3)
    },
    cancel:{
        [theme.breakpoints.up("sm")]:{
            display:"none"
        },
        float: "right"
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(1)
    },
    icons: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            display: (props)=>(props.open ? "none" : "flex")
        }
        
    },
    iconsItems: {
        marginRight: theme.spacing(3),
        cursor:"pointer"
        
    }

}))


const Navbar = () => {

    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });
    console.log("open: ", open)

    return <div>
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>
                    Mendy Michaeli
                </Typography>
                <Typography variant="h6" className={classes.logoSm}>
                    MENDY
                </Typography>
                <div className={classes.search}>
                    <Search />
                    <InputBase placeholder="Search..." className={classes.input} />
                    <Cancel className={classes.cancel} onClick={()=>setOpen(false)} />
                </div>
                <div className={classes.icons}>
                    <Search className={classes.searchButton} onClick={()=>setOpen(true)} />
                    <Badge badgeContent={2} color="secondary" className={classes.iconsItems}>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="secondary" className={classes.iconsItems}>
                        <Notifications />
                    </Badge>
                    <Avatar className={classes.iconsItems} alt="Cindy Baker" src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" />
                </div>
            </Toolbar>
        </AppBar>
    </div>;
};

export default Navbar;