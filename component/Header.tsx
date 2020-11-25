import React, { FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: 'relative',
      height: '500px',
      marginBottom: '-150px',
      zIndex: -1,
      backgroundImage: 'url(img/komaru.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: '100%',
      padding: '0 20px',
    },
    logoWrapper: {
      margin: '0 auto',
      width: '92%',
      maxWidth: '400px',
      borderRadius: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      transform: 'translateY(-50px)',
    },
    fadeOut: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: 'linear-gradient(to bottom, transparent 50%, #FFF )',
    }
  }),
);

const Header: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.fadeOut}/>
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

export default Header;
