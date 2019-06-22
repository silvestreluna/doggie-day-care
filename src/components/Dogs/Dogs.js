import React from 'react';

import './Dogs.scss';

class Dogs extends React.Component {
  render() {
    const { dog } = this.props;
    return (
      <div className="Dogs col-3 card m-1">
        <div className="card-body">
          <img src={dog.imgUrl} alt="dog" />
          <h3 className="card-title">{dog.name}</h3>
          <p className="card-text">{dog.type}, {dog.color}</p>
          <p className="card-text">{dog.age}</p>
        </div>
      </div>
    );
  }
}

export default Dogs;
