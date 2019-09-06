import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 900,
    height: 530,
  },
}));

import bnw1 from '../images/bnw1.jpg';
import bnw2 from '../images/bnw2.jpg';
//import bnw3 from '../images/bnw3.jpg';
import bnw4 from '../images/bnw4.jpg';

const tileData = [
    {
        img: bnw1,
        title: 'bnw1',
        author: 'author',
        cols: 2,
    },
    {
        img: bnw2,
        title: 'bnw2',
        author: 'author',
        cols: 1,
    },
    {
        img: bnw4,
        title: 'bnw4',
        author: 'author',
        cols: 3,
    },
];

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={360} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}