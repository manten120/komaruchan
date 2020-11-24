import React, { FC } from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(2),
      top: theme.spacing(0),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { classes, onClose, ...other } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiDialogContent);

const useStyles = makeStyles(() =>
  createStyles({
    thumbnailWrapper: {
      width: '100%',
    },
    thumbnail: ({ imageUrl }: { imageUrl: string }) => ({
      paddingBottom: '100%',
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      margin: '2px',
      borderRadius: '8px',
      transition: 'all 0.2s ease-out',
      transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      willChange: 'transform',
      '&:hover': {
        transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0,0, 0, 1, 0, 0, 0, 0, 1.05)',
        opacity: '0.8',
      },
    }),
    dialogImage: { width: '100%', verticalAlign: 'top' },
  }),
);

type Props = {
  imageUrl: string;
};

const ImageDialog: FC<Props> = (props) => {
  const { imageUrl } = props;
  const classes = useStyles({ imageUrl });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.thumbnailWrapper}>
        <div
          className={classes.thumbnail}
          onClick={handleClickOpen}
          aria-hidden="true"
        />
      </div>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} />
        <DialogContent>
          <img
            className={classes.dialogImage}
            src={imageUrl}
            alt="タイマーの画像"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageDialog;
