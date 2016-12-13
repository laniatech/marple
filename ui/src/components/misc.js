import React from 'react';

import { Nav, NavItem, DropdownButton, MenuItem } from 'react-bootstrap';


export const Fields = props => {
  var fieldtabs = props.fields.map(function(f, i) {
    return (<NavItem eventKey={f.name} key={f.name}>{f.name}</NavItem>);
  });
  return (
    <Nav bsStyle="pills" stacked onSelect={props.onSelect}
       activeKey={props.selected}>
       {fieldtabs}
    </Nav>
  );
};

export const Segments = props => {
  var segmenttab = props.segments.map(function(f, i) {
    var name = "Segment " + f.ord;
    var stats = "(" + f.numDocs + " docs/" + (f.maxDoc - f.numDocs) + " dels)";
    return <NavItem eventKey={i} key={i + 1}>{name}<br/>{stats}</NavItem>;
  });
  segmenttab.unshift(<NavItem eventKey={''} key={0}>All segments</NavItem>);
  return (
    <Nav bsStyle="pills" stacked onSelect={props.onSelect}
         activeKey={props.selected}>{segmenttab}</Nav>
  );
};

export const EncodingDropdown = props => {
  const types = ! props.numeric ? ['utf8', 'base64'] :
    ['utf8', 'base64', null, 'int', 'long', 'float', 'double'];

  const items = types.map((type, idx) =>
    type == null ? <MenuItem key={idx} divider /> :
      <MenuItem key={idx} eventKey={type}>{type}</MenuItem>
  );

  return <DropdownButton title={`Encoding: ${props.encoding}`}
                         id={'encoding-dropdown'}
                         onSelect={props.onSelect}>
    {items}
  </DropdownButton>;
};
