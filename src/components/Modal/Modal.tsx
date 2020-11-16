import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';

import { makeStyles } from '@material-ui/core/styles';
import ModalLib from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';

import './css/index.css'

function mapStateToProps(store: {
  login: any,
}) {
  return {
    login: store.login,
  };
}

class Modal extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies,
  showHideClassName: string,
  handleClose: any,
  children: any
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render(){

    return(
      // <div className={this.props.showHideClassName}>
      //   <section className="modal-main">
      //     {this.props.children}
      //     <button onClick={this.props.handleClose}>close</button>
      //   </section>
      // </div>
      <div></div>
    );
  }
}

export default connect(mapStateToProps)(Modal)