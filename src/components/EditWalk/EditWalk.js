import React from 'react';

class EditWalk extends React.Component {
  render() {
    return (
      <div className="EditWalk">
        <label>Name:
          <input type="text"
          value={this.props.editWalkerName}
          onChange={this.props.walkNameChangeDuringEdit}/>
        </label>
        <label>Date:
          <input type="text" value={this.props.editWalkDate} onChange={this.props.walkDateChangeDuringEdit} />
        </label>
        <button className="btn btn-primary" onClick={this.props.saveEditChangeToFirebase}>Save Change</button>
      </div>
    );
  }
}

export default EditWalk;
