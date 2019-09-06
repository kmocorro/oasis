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

import cirq1 from '../images/cirq1.jpg';
import cirq2 from '../images/cirq2.jpg';
import cirq3 from '../images/cirq3.jpg';
import cirq4 from '../images/cirq4.jpg';

const tileData = [
    {
        img: cirq1,
        title: 'cirq1',
        author: 'author',
        cols: 2,
    },
    {
        img: cirq2,
        title: 'cirq2',
        author: 'author',
        cols: 1,
    },
    {
        img: cirq3,
        title: 'cirq3',
        author: 'author',
        cols: 1,
    },
    {
        img: cirq4,
        title: 'cirq4',
        author: 'author',
        cols: 2,
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