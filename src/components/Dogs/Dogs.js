import React from 'react';

import './Dogs.scss';

class Dogs extends React.Component {
  render() {
    const { dog } = this.props;
    const { combinedData } = this.props;

    const gettingEachWalker = combinedData.map((doggy) => {
      if (doggy.idDog === dog.id) {
        return <span key={doggy.walkId}> Walker: {doggy.walkerName} <br></br>Date: {doggy.date}</span>;
      }
      return '';
    });

    const filteringWalker = gettingEachWalker.filter(oneItem => oneItem !== '');

    const handleDogWithNoWalker = () => {
      if (filteringWalker.length === 0) {
        return <span className="text-danger">Select a Walker below</span>;
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
                {handleDogWithNoWalker()}
            </h6>
          </div>
        </div>
        {
          filteringWalker.length > 0 ? (
            <button className="btn btn-danger btn-sm mb-2" value={dog.id} onClick={this.props.deleteWalker}>Delete Walker</button>
          ) : (
            ''
          )
        }
        {
          filteringWalker.length > 0 ? (
            <button className="btn btn-secondary btn-sm" value={dog.id} onClick={this.props.editWalker}>Edit</button>
          ) : (
            ''
          )
        }
      </div>
    );
  }
}

export default Dogs;
