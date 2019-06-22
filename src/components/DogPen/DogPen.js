import React from 'react';

import Dogs from '../Dogs/Dogs';

class DogPen extends React.Component {
  render() {
    const { dogs } = this.props;
    const makeDogsCard = dogs.map(dog => (
      <Dogs key={dog.id} dog={dog} />
    ));
    return (
      <div className="Dogs d-flex flex-wrap">
        { makeDogsCard }
      </div>
    );
  }
}

export default DogPen;
