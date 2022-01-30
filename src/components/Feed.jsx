import { Container, makeStyles } from "@material-ui/core"
import Post from "./Post"
import { postDetails } from "../domoDB";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    minWidth:200,
  }

}))

const Feed = () => {

  const classes = useStyles();


  return <Container className={classes.container}>
    {
      postDetails.map(item => {
        /* console.log("item:", item) */
        return <Post item={item} key={item.id} />

      })
    }


  </Container>;
};

export default Feed;