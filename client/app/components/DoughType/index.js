import React, { PropTypes } from 'react';
import styled from 'styled-components';

export const DoughWrapper = styled.li`
  border-bottom: 2px solid #000;
  border-top: 1px solid #000;
  padding: 1rem 0;
  margin-bottom: 5px;
  clear: both;
  overflow: hidden;
  display: block;
  font-size: 15px;

  img {
    float: left;
    width: 150px;
    margin-right: 1rem;
  }
`;

class DoughType extends React.Component {
  render() {
    const { Name, TypeName, Url } = this.props;
    return (
      <DoughWrapper>
        <img src={Url} alt={Name} />
        <h4>{Name}</h4>
        <p>Type: {TypeName}</p>
        <button>Choose Dough</button>
      </DoughWrapper>
    );
  }
}

export default DoughType;
