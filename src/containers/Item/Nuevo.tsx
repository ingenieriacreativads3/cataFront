import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
import { Drawer } from './../Drawer'
import Link from '@material-ui/core/Link';

// import { NuevoItem as ItemNuevo} from './../../components/Item'
import { OneButton } from './../../components/Dialogs'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'

import * as itemActions from './../../store/actions/item'
import * as fileActions from './../../store/actions/file'
import * as dialogActions from './../../store/actions/dialog'
import * as unidadDeMedidaActions from './../../store/actions/unidadDeMedida'

function mapStateToProps(store: {
  itemReducer: any,
  unidadDeMedidaReducer: any,
  fileReducer: any
}) {
  return {
    itemReducer: store.itemReducer,
    unidadDeMedidaReducer: store.unidadDeMedidaReducer,
    fileReducer: store.fileReducer
  };
}

class Nuevo extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
  id: string,
	nombre: string,
  precio: string,
  idMagnitud : string,
  path: string,
  caracteristicas: string,
  descripcion: string,
  displayPrice: boolean,
  photo: File[]
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.getNombre = this.getNombre.bind(this);
    this.getPrecio = this.getPrecio.bind(this);
    this.getMagnitud = this.getMagnitud.bind(this);
    this.getCaracteristicas = this.getCaracteristicas.bind(this);
    this.getDescripcion = this.getDescripcion.bind(this);
    this.getMostrarPrecio = this.getMostrarPrecio.bind(this);
    this.getFoto = this.getFoto.bind(this);
    this.save = this.save.bind(this);
    this.aceptar = this.aceptar.bind(this);
    this.state = {
      id: '',
      nombre: '',
      precio: '',
      idMagnitud: '',
      path: '',
      caracteristicas: '',
      descripcion: '',
      displayPrice: false,
      photo: []
    };
  }

  componentWillMount() {

    this.props.dispatch(itemActions.reintentar())
    if(
      !this.props.unidadDeMedidaReducer.fetched &&
      !this.props.unidadDeMedidaReducer.fetching
    ) {
      this.props.dispatch(unidadDeMedidaActions.getUnidadesDeMedida())
    }

  }

  componentDidUpdate() {

    if(this.props.itemReducer.fetched) {
      this.props.dispatch(dialogActions.openOneButton())
    } else {
      this.props.dispatch(dialogActions.closeOneButton())
    }

  }

  getNombre(e: any) {
    this.setState({ nombre: e.target.value })
  }

  getPrecio(e: any) {
    this.setState({ precio: e.target.value })
  }

  getMagnitud(e: any) {
    this.setState({ idMagnitud: e.target.value })
  }

  getCaracteristicas(e: any) {
    this.setState({ caracteristicas: e.target.value })
  }

  getDescripcion(e: any) {
    this.setState({ descripcion: e.target.value })
  }

  getMostrarPrecio(display: any) {
    this.setState({ displayPrice: display })
  }

  getFoto(e: any) {

    let files: File[] = []

    for (var i = 0; i < e.target.files.length; i++) {
      files.push(e.target.files[i])
    }

    files.map((file: File) => {
      this.props.dispatch(fileActions.upload(file))
    })

    this.setState({ photo: files })
  }

  save() {

    // this.props.dispatch(itemActions.setItem(
    //   this.props.cookies.get('empresaId'),
    //   this.state.nombre,
    //   this.state.precio,
    //   this.state.idMagnitud,
    //   this.state.descripcion,
    //   this.state.displayPrice,
    //   this.props.fileReducer.data.foto
    // ))

  }

  aceptar() {

    this.props.dispatch(dialogActions.closeOneButton())
    if(this.props.itemReducer.status !== 200) {
      this.props.dispatch(itemActions.reintentar())
    } else {
      this.props.dispatch(itemActions.setear())
      this.props.history.push('/home/catalogo')
    }

  }

  drawer() {
    return <Drawer 
      history={this.props.history}
      location={this.props.location}
      match={this.props.match}
      staticContext={this.props.staticContext}
    />
  }

  footer() {
    return <Footer 
      history={this.props.history}
      location={this.props.location}
      match={this.props.match}
      staticContext={this.props.staticContext}
    />
  }

  appBar() {
    return <AppBar 
      history={this.props.history}
      location={this.props.location}
      match={this.props.match}
      staticContext={this.props.staticContext}
      cookies={this.props.cookies}
    />
  }


  render(){

    let unidadesDeMedida: any[] = [
      {
        '_id': '',
        'nombre': '',
        'abreviatura': '',
        'updated_at': '',
        'created_at': ''
      }
    ]

    if(
      this.props.unidadDeMedidaReducer.fetched &&
      this.props.unidadDeMedidaReducer.data !== undefined
    ) {
      unidadesDeMedida = this.props.unidadDeMedidaReducer.data.unidadesDeMedida
    }

    let pathImage: string = ''

    if(
      this.props.fileReducer.fetched &&
      this.props.fileReducer.data !== undefined
    ) {
      pathImage = 'http://localhost:8000/' + this.props.fileReducer.data.foto[0]
    }

    return(
      <div>
        {/* <ItemNuevo 
          getNombre={ this.getNombre }
          getPrecio={ this.getPrecio }
          getMagnitud={ this.getMagnitud }
          getCaracteristicas={ this.getCaracteristicas }
          getDescripcion={ this.getDescripcion }
          getMostrarPrecio={ this.getMostrarPrecio }
          getFoto={ this.getFoto }
          save={ this.save }
          unidadesDeMedida={ unidadesDeMedida }
          drawer={ this.drawer() }
          footer={ this.footer() }
          pathImage={ pathImage }
          appBar={this.appBar()}
        /> */}
        <OneButton 
          title={ 'Nuevo Item' }
          text={ this.props.itemReducer.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Nuevo)