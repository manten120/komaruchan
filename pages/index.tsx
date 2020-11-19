import React, { FC } from 'react';
import Header from '../component/Header';
import NewPost from '../component/NewPost';

type Props = {
  imageUrls: string[];
};

const Index: FC<Props> = (props) => {
  const { imageUrls } = props;

  return (
    <>
      <Header />
      <NewPost imageUrls={imageUrls} />
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
