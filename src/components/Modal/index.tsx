import React from 'react';
import ModalExport from './Modal'
import Cookies from 'universal-cookie';

export function Modal(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies,
  showHideClassName: string,
  handleClose: any,
  children: any
}) {
	return <ModalExport
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
    cookies={props.cookies}
    showHideClassName={props.showHideClassName}
    handleClose={props.handleClose}
    children={props.children}
  />;
}