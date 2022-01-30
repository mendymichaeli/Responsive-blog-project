import { Container, Fab, makeStyles, Modal, Tooltip } from "@material-ui/core"
import { Add } from "@material-ui/icons";
import { Alert, Button, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Snackbar } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import {published} from "../domoDB"

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: "16px",
        right: "16px",
    },
    container: {
        width: 500,
        height: 600,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto",
        padding: 30,
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh"
        }

    },
    item: {
     
        marginBottom:[theme.spacing(2)]
    },
    TextField: {
        width: "100%"
    }

}))


const AddPost = () => {

    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const handleClose = (event, reason) => {
        console.log("hleooe", event, reason)
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnackbar(false);
        setOpen(false)
        
      };
      console.log("openSnackbar:" ,openSnackbar)

    return <>
        <Tooltip title="Add" placement="top">
            <Fab className={classes.fab} aria-label="add" color="primary" onClick={() => setOpen(true)}>
                <Add />
            </Fab>
        </Tooltip>

        <Modal open={open} >
            <Container className={classes.container}>
                <form className={classes.form}>
                    <div className={classes.item}>
                        <TextField  className={classes.TextField} required id="outlined-required" label="Required" defaultValue="Title" />
                    </div>
                    <div className={classes.item}>
                        <TextField  className={classes.TextField} id="outlined-multiline-static" label="Description" multiline rows={4} defaultValue="Write description"
                        />
                    </div>
                    <div className={classes.item}>
                        <TextField
                            className={classes.TextField}
                            id="outlined-select-currency" select label="Share group" placeholder="Insert your choice">
                            {published.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className={classes.item}>
                        <FormLabel id="demo-radio-buttons-group-label">Who can comment?</FormLabel>
                        <RadioGroup  className={classes.TextField} >
                            <FormControlLabel value="My friends" control={<Radio />} label="My friends" />
                            <FormControlLabel value="Everybody" control={<Radio />} label="Everybody" />
                            <FormControlLabel value="Custom" control={<Radio />} label="Custom (Premuim Only)" disabled />
                        </RadioGroup>
                    </div>
                    <div className={classes.item} >
                       <Button variant="outlined" color="primary" style={{marginRight:20}} onClick={()=>setOpenSnackbar(true)}>Create</Button>
                       <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)}>cancel</Button>
                    </div>
                </form>
            </Container>
        </Modal>
        <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleClose}>
        <Alert  severity="success" sm={{ width: '100%' }}>
          Post created successfully!
        </Alert>
      </Snackbar>
    </>


};

export default AddPost;