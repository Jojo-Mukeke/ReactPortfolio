import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Porfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";


class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Porfolio />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
        
      </div>
      
    );
  }
}

  


export default Portfolio;
