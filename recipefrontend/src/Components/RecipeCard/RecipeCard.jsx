import React from 'react'
// import { Link } from 'react-router-dom'
import formatDate from '../../utils/formatDate.js'
import NoImageLogo from '../../images/no-image.png'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import LoopIcon from '@material-ui/icons/Loop';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    flexGrow: 1,
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  card: {
    // flex: 1,
    height: '100%',
    // width : 350,
    '&:hover': {
      transform: "translateY(-0.5rem) scale(1.0125)",
      boxShadow: '0 0.5em 3rem -1rem rgba(0,0,0,0.5)',
   },
   cursor: 'pointer',
   transition: 'transform .3s',
  },
  
  cardMedia: {
    height: '0',
  },

}));


const RecipeCard = ({ recipe }) => {
  const classes = useStyles();
  const date = formatDate(recipe.date)
  const image = recipe.image ? recipe.image : NoImageLogo
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // console.log(recipe)
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {recipe.title.slice(0, 1).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" >
            <DeleteIcon style={{ color: 'red' }} />
          </IconButton>
        }
        title={recipe.title}
        subheader={date}
      />
      <Link to={`/recipes/${recipe._id}`}>
      <CardMedia
        className={classes.media}
        image={image}
        title={recipe.title}
      />
      </Link>
      <CardActionArea >
         
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {recipe.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <LoopIcon />
        </IconButton> */}
        <IconButton aria-label="edit">
          <EditIcon className={classes.light} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            {recipe.instruction}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

  )
}

export default RecipeCard