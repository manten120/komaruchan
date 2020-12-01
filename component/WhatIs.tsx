import React, { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: '-200px',
      padding: '250px 16px 100px',
      backgroundImage: 'url(img/komaruhaikei.png)',
      backgroundPosition: 'repeat',
      backgroundColor: 'rgba(255,255,255,0.7)',
      backgroundBlendMode: 'lighten',
    },
    title: {
      textAlign: 'center',
      marginBottom: '80px',
      color: '#545454',
      textShadow: '3px 0 5px #FFF',
      fontWeight: 'bold',
    },
    squareWrapper: {
      width: '90%',
      margin: '0 auto 16px',
    },
    square: {
      width: '100%',
      paddingBottom: '100%',
      borderRadius: '8px',
      backgroundColor: '#FFF' /* 背景色 */,
      border: '4px solid #CCC',
      position: 'relative',
    },
    komaruchan: {
      width: '100%',
      block: 'display',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }),
);

const WhatIs: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography
          className={classes.title}
          variant="h5"
          component="h1"
          gutterBottom
        >
          #こまるちゃんタイマー部ってなに？
        </Typography>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={4}>
            <div className={classes.squareWrapper}>
              <div className={classes.square}>
                <img
                  className={classes.komaruchan}
                  src="img/dretec.jpg"
                  alt="タイマー"
                />
              </div>
            </div>
            <Typography
              className={classes.title}
              variant="h6"
              component="h1"
              gutterBottom
            >
              dretecの学習タイマーを
              <br />
              愛用している人たちの
              <br />
              グループです
              <br />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.squareWrapper}>
              <div className={classes.square}>
                <img
                  className={classes.komaruchan}
                  src="img/komaruchan.png"
                  alt="こまるちゃん"
                />
              </div>
            </div>
            <Typography
              className={classes.title}
              variant="h6"
              component="h1"
              gutterBottom
            >
              こまるちゃんが
              <br />
              部長です
              <br />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
          <div className={classes.squareWrapper}>
              <div className={classes.square}>
                <img
                  className={classes.komaruchan}
                  src="img/sampleTweet.PNG"
                  alt="ツイート"
                />
              </div>
            </div>
            <Typography
              className={classes.title}
              variant="h6"
              component="h1"
              gutterBottom
            >
              タイマーの画像と
              <br />
              ハッシュタグをつけて
              <br />
              ツイートしよう！
              <br />
              <br />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default WhatIs;
