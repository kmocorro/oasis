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

import eforest1 from '../images/eforest1.jpg';
import eforest2 from '../images/eforest2.jpeg';
import eforest3 from '../images/eforest3.jpg';
import eforest4 from '../images/eforest4.jpg';

const tileData = [
    {
        img: eforest1,
        title: 'eforest1',
        author: 'author',
        cols: 2,
    },
    {
        img: eforest2,
        title: 'eforest2',
        author: 'author',
        cols: 1,
    },
    {
        img: eforest3,
        title: 'eforest3',
        author: 'author',
        cols: 1,
    },
    {
        img: eforest4,
        title: 'eforest4',
        author: 'author',
        cols: 2,
    },
];

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={400} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}