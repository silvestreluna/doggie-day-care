import React from 'react';
import PropTypes from 'prop-types';

import Dogs from '../Dogs/Dogs';
import DogShape from '../../helpers/propz/dogShape';

class DogPen extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(DogShape.dogShape),
  }

  render() {
    const { dogs } = this.props;
    const { combinedData } = this.props;

    const makeDogsCard = dogs.map(dog => (
      <Dogs key={dog.id} dog={dog} combinedData={combinedData} deleteWalker={this.props.deleteWalker}/>
    ));

    return (
      <div className="Dogs">
        <div className=" d-flex flex-wrap">
          {makeDogsCard}
        </div>
      </div>
    );
  }
}

export default DogPen;
