import React, { FC } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      // backgroundColor: theme.palette.background.paper,
      backgroundColor: 'FFF',
      margin: 20
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }),
);

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

type Props = {
  imageUrls: string[];
}

const ImageGridList: FC<Props> = (props) => {
  const classes = useStyles();

  const { imageUrls } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {imageUrls.map((url) => (
          <GridListTile key={url} cols={1}>
            <img src={url} alt="img"/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default ImageGridList;