import React, { FC, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ImageDialog from './ImageDialog';

const useStyles = makeStyles(() =>
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
    showMoreImageButton: {
      color: '#666',
      display: 'block',
      margin: '30px auto',
    },
  }),
);

type Props = {
  imageUrls: string[];
};

const NewPost: FC<Props> = (props) => {
  const classes = useStyles();
  const { imageUrls } = props;
  const [numberOfThumbnail, setNumberOfThumbnail] = useState(16);

  const showMoreImage = () => {
    setNumberOfThumbnail((prevState) => prevState + 12);
  };

  return (
    <Container className={classes.root} maxWidth="md">
      <Typography
        className={classes.title}
        variant="h5"
        component="h1"
        gutterBottom
      >
        最新の投稿
      </Typography>

      <Grid container spacing={0}>
        {imageUrls
          .map((imageUrl) => {
            return (
              <Grid item xs={3} key={imageUrl}>
                <ImageDialog imageUrl={imageUrl} />
              </Grid>
            );
          })
          .slice(0, numberOfThumbnail)}
      </Grid>

      <Button
        className={classes.showMoreImageButton}
        variant="outlined"
        onClick={showMoreImage}
        disabled={numberOfThumbnail >= imageUrls.length}
      >
        もっと見る
      </Button>
    </Container>
  );
};

export default NewPost;
