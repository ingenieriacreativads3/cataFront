import React from 'react';
import { connect } from 'react-redux'

// import { Detail as DetailExport } from './../../../components/Detail'
// import * as requestActions from './../../../store/actions/request'
import { SideBarInicio } from './../../components/SideBarInicio'

function mapStateToProps(store: {
  requestReducer: any,
  login: any
}) {
  return {
    requestReducer: store.requestReducer,
    login: store.login
  };
}

class SideBar extends React.Component<{
  history: any,
  location: any,
  match: any,
	staticContext?: any,
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
		super(props);
		this.link = this.link.bind(this)
    this.state = {};
	}
	
	link() {
		this.props.history.push('/home/catalogo')
	}

  render(){

    return(
      <div>
        <SideBarInicio
          //link={this.link}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(SideBar)