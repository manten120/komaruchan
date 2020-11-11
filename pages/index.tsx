import React, { FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ImageGridList from '../component/GridList';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundImage: 'url(img/komaru.png)',
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
    new: {
      textAlign: 'center',
      color: '#444'
    }

  }),
);

type Props = {
  imageUrls: string[];
};

const Index: FC<Props> = (props) => {
  const classes = useStyles();

  const { imageUrls } = props;

  return (
    <>
      <div className={classes.root}>
        <div className={classes.logoWrapper}>
          <img
            className={classes.logo}
            src="/img/komaruLogo.png"
            alt="#こまるちゃんタイマー部"
          />
        </div>
      </div>
      <h2 className={classes.new}>最新の投稿</h2>
      <ImageGridList imageUrls={imageUrls} />
    </>
  );
};

// This gets called on every request
const getServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch(
    `https://komaruchan.vercel.app/api/twitter?key=funfun`,
  );
  const imageUrls = await res.json();

  // Pass data to the page via props
  return { props: { imageUrls } };
};

export default Index;
export { getServerSideProps };
