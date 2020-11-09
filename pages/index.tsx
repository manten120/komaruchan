import React, { FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundImage: 'url(/img/komaru.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: '100%',
      padding: '0 20px',
    },
    logoWrapper: {
      width: '90%',
      maxWidth: '600px',
      borderRadius: '20px',
      backgroundColor: 'rgba(255,255,255,0.7)',
    },
  }),
);

const Index: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logoWrapper}>
        <img
          className={classes.logo}
          src="/img/komaruLogo.png"
          alt="#こまるちゃんタイマー部"
        />
      </div>
    </div>
  );
};

export default Index;
