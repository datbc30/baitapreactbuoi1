import React, { Component } from "react";

export default class DemoState extends Component {
  usename = "dat ga";
  statetus = false;
  state = {
    //this.state là thuộc tính có sẵn được kế thừ tư class compunentcủa thư viện reactjs, các giá trị thay đổi trên giao diện sẽ dược chứa trong this.state
    statetus : false 

  }

  // nếu có return thì không cần else
  renderLogin = () => {
      if(this.state.statetus){
          return <span className="text-white">{this.usename}</span>
      }
      return <button className="btn btn-danger text-white" onClick={(e) => {
          //chặn sự kiện reload browser

          e.preventDefault();
          this.dangNhap();
      }}>Dang nhap</button>
  }

  dangNhap = () => {
    console.log('dawng nhap');
    // this.statetus = true ;
    // this.render();
    // let newState = {statetus: true}
    this.setState({statetus: true},
        () => {
            console.log('state', this.state);
        })
  }

  render() {
    return (
      <div className="container">
        <h3>DemoState</h3>
        <nav
          className="navbar navbar-expand-sm navbar-dark bg-dark"
        >
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              {/* {this.statetus? <span className=" text-white">{this.usename}</span> : <button className="btn btn-success text-white">dang nhap</button>} */}

              {this.renderLogin()}
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
