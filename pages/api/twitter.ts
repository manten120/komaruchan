import { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';
import Twitter from 'twitter';

// .envから環境変数を読み込む
dotenv.config();

// new Twitter()での型エラーを回避するため
const env = {
  CONSUMER_KEY: process.env.CONSUMER_KEY || 'undefined',
  CONSUMER_SECRET: process.env.CONSUMER_SECRET || 'undefined',
  ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY || 'undefined',
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'undefined',
};

const client = new Twitter({
  consumer_key: env.CONSUMER_KEY,
  consumer_secret: env.CONSUMER_SECRET,
  access_token_key: env.ACCESS_TOKEN_KEY,
  access_token_secret: env.ACCESS_TOKEN_SECRET,
});

const params = { screen_name: 'Manten2nd', count: 200, exclude_replies: true };

type Hashtag = { text: string; indices: number[] };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.key !== process.env.API_ROUTE_KEY) {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Forbidden');
    return;
  }

  const imageUrls: string[] = [];
  const tweets = await client.get('statuses/user_timeline', params);

  for (let i = 0; i < 200; i += 1) {
    const retweetHashtags: Hashtag[] | undefined =
      tweets[i]?.retweeted_status?.entities?.hashtags;

    let retweetHasValidHashtag: Hashtag | undefined;

    if (retweetHashtags) {
      retweetHasValidHashtag = retweetHashtags.find((hashtag: Hashtag) => {
        return hashtag.text === 'こまるちゃんタイマー部';
      });
    }

    if (retweetHasValidHashtag && tweets[i]?.retweeted_status?.entities.media) {
      imageUrls.push(
        tweets[i].retweeted_status.entities.media[0].media_url_https,
      );
    }
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(imageUrls));
};

export default handler;
