import React from 'react';
import EachWalk from '../EachWalk/EachWalk';


class WalkPen extends React.Component {
  render() {
    const { walks } = this.props;
    const walk = walks.map(dogWalk => (
      <EachWalk key={dogWalk.id} dogWalk={dogWalk} />
    ));

    return (
      <div className="WalkPen">
        <h3>Walks</h3>
        {walk}
      </div>
    );
  }
}

export default WalkPen;
