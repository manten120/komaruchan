import React, { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '50px 16px 16px',
      height: '800px',
    },
    title: {
      textAlign: 'center',
      marginBottom: '40px',
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
      backgroundColor: 'skyblue' /* 背景色 */,
    },
  }),
);

const WhatIs: FC = () => {
  const classes = useStyles();

  return (
    <div className="root">
      <Container className={classes.root} maxWidth="md">
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
              <div className={classes.square} />
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
              <div className={classes.square} />
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
              <div className={classes.square} />
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
