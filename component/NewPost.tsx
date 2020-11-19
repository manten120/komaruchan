import React, { FC, useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import ImageDialog from './ImageDialog';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '50px 16px',
    },
    title: {
      color: '#545454',
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: '40px',
    },
    square: {
      backgroundColor: 'red',
      paddingBottom: '100%',
      backgroundImage: 'url(https://pbs.twimg.com/media/ElgoTqeVMAAwU92.jpg)',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      margin: '2px',
      borderRadius: '8px',
    },
  }),
);

type Props = {
  imageUrls: string[];
};

const NewPost: FC<Props> = (props) => {
  const { imageUrls } = props;
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <Typography
        className={classes.title}
        variant="h5"
        component="h1"
        gutterBottom
      >
        最新の投稿
      </Typography>
      <Grid container spacing={0}>
        {imageUrls.map((imageUrl) => {
          return (
            <Grid item xs={4}>
              <ImageDialog imageUrl={imageUrl} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default NewPost;
