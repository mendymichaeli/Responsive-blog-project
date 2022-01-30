
import { Grid, makeStyles,  } from "@material-ui/core";
import AddPost from "./components/AddPost";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";

const useStyles = makeStyles((theme) => ({
  rightBar:{
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
   
  }
}))

const App = () => {

  const classes = useStyles();

  return <div>
    <Navbar />
    <Grid container >
      <Grid item sm={2} xs={2}> 
      <Leftbar/>
      </Grid>
      <Grid item sm={7} xs={10}>
        <Feed />
      </Grid>
      <Grid item sm={3} className={classes.rightBar}>
        <Rightbar/>
      </Grid>
      <AddPost/>
    </Grid>

  </div>;
};

export default App;