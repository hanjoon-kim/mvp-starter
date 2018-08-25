import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.bars.length } items.
    { props.bars.map(bar => <ListItem bar={bar}/>)}
  </div>
)

export default List;