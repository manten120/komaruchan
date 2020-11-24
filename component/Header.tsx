import React, { FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundImage: 'url(img/komaru.png)',
      // backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
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
      backgroundColor: 'rgba(255,255,255,0.7)',
    },
  }),
);

const Header: FC = () => {
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

export default Header;
