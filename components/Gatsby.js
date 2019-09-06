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

import gatsby1 from '../images/gatsby1.jpg';
import gatsby2 from '../images/gatsby2.jpg';
import gatsby3 from '../images/gatsby3.jpg';
import gatsby4 from '../images/gatsby4.jpg';

const tileData = [
    {
        img: gatsby1,
        title: 'gatsby1',
        author: 'author',
        cols: 2,
    },
    {
        img: gatsby2,
        title: 'gatsby2',
        author: 'author',
        cols: 1,
    },
    {
        img: gatsby3,
        title: 'gatsby3',
        author: 'author',
        cols: 1,
    },
    {
        img: gatsby4,
        title: 'gatsby4',
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