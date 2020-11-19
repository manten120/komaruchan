import React, { FC } from 'react';
import {
  createStyles,
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
    imageButton: {
      backgroundColor: 'red',
      paddingBottom: '100%',
      backgroundImage: 'url(https://pbs.twimg.com/media/ElgoTqeVMAAwU92.jpg)',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      margin: '2px',
      borderRadius: '8px',
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

type Props = {
  imageUrl: string;
};

const ImageDialog: FC<Props> = ({ imageUrl }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div style={{ width: '100%' }}>
        <div
          onClick={handleClickOpen}
          aria-hidden="true"
          style={{
            paddingBottom: '100%',
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            margin: '2px',
            borderRadius: '8px',
          }}
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
            style={{ width: '100%', verticalAlign: 'top' }}
            src={imageUrl}
            alt=""
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageDialog;
