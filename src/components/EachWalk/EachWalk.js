import React from 'react';

import './EachWalk.scss';

class EachWalk extends React.Component {
  render() {
    const { dogWalk } = this.props;
    return (
      <div className="EachWalk">
        <table className="table">
          <tbody>
            <tr>
              <td>{dogWalk.date}</td>
              <td>{dogWalk.dogId}</td>
              <td>{dogWalk.employeeId}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default EachWalk;
