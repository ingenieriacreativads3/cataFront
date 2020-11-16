import React from 'react';
import DrawerInicioExport from './DrawerInicio'

export function InicioDrawer(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any
}) {
	return <DrawerInicioExport
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
  />;
}