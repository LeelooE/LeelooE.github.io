import {FaGithub} from 'react-icons/fa';
import {FaPinterest} from 'react-icons/fa';
import {FaCodepen} from 'react-icons/fa';
import {FaAngellist} from 'react-icons/fa';
import React from "react";

class Icons extends React.Component {
    render() {
      return (
          <div className="nav__icons">
          <a href="https://github.com/LeelooE"><FaGithub className="icon"/></a>
          <a href="https://www.pinterest.com/leeloonita/"><FaPinterest className="icon"/></a>
          <a href="https://codepen.io/LeelooE/#"><FaCodepen className="icon"/></a>
          <a href="https://angel.co/anita-silva-2?al_content=view+your+profile&al_source=transaction_feed%2Fnetwork_sidebar"><FaAngellist className="icon"/></a>
          </div>

      );
    }
  }

  export default Icons;
