import React from 'react';

import './Dogs.scss';

class Dogs extends React.Component {
  render() {
    const { dog } = this.props;
    const { combinedData } = this.props;

    const gettingEachWalker = combinedData.map((doggy) => {
      if (doggy.id === dog.id) {
        return <span key={doggy.walkId}> Walker: {doggy.walkerName}</span>;
      }
      return '';
    });

    const filteringWalker = gettingEachWalker.filter(oneItem => oneItem !== '');

    const anotherTest = () => {
      if (filteringWalker.length === 0) {
        return <span>Select a Walker below</span>;
      }
      return '';
    };

    return (
      <div className="Dogs col-3 card m-2">
        <div className="card-body">
          <img src={dog.imgUrl} alt="dog" />
          <h3 className="card-title">{dog.name}</h3>
          <p className="card-text">{dog.type}, {dog.color}</p>
          <p className="card-text">{dog.age}</p>
          <div className="walker text-muted">
            <h6>
                {filteringWalker}
                {anotherTest()}
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Dogs;
