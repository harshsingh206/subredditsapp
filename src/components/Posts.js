import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import Comments from '@material-ui/icons/InsertComment'
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'


const styles = theme => ({
    card: {
      maxWidth: 1500,
      marginLeft:'20%',
      marginRight:'20%',
      marginTop:20,
      marginBottom:20,
    },
    media: {
      height: 0,
      paddingTop: '70.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  });

class Posts extends Component {
    state = { expanded: false };

    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };
    
  render() {
    const { classes } = this.props;
    return (
      <div>
      {this.props.posts.map((post, i) => (
        <Card className={classes.card} key={i}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={post.title}
          subheader={post.author_fullname}
        />
        <CardMedia
          className={classes.media}
          image={post.url}
          title={post.title}
        />
        <CardContent>
          
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton>
            <ThumbUp />{post.ups}
          </IconButton>
          <IconButton>
            <ThumbDown />{post.downs}
          </IconButton>
          <IconButton
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <Comments/>{post.num_comments}
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Comments:</Typography>    
          </CardContent>
        </Collapse>
      </Card>
      ))}
      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Posts);