import React from "react";


export class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            SignUp
          </button>
        </div>
      </div>
    );
  }
}