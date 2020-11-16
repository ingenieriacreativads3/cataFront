import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';

import './css/styles.css'

import * as registerAction from './../../store/actions/register'
import * as loginAction from './../../store/actions/login'
import * as itemAction from './../../store/actions/item'

import { Login } from './../Login'
import { Register } from './../Register'
import { Footer } from './../Footer'
import { Header } from './../Header'

import { connect } from 'react-redux'

const casamiento = require('./img/casamientos.jpg')
const comida = require('./img/comida-vegeta.jpg')
const cumple = require('./img/cumpleaños.jpg')
const gastronomia = require('./img/gastronomia.jpg')

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function mapStateToProps(store: {
  languageReducer: any,
  itemReducer: any
}) {
  return {
    languageReducer: store. languageReducer,
    itemReducer: store. itemReducer
  };
}

class ItemList extends React.Component<{}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(itemAction.search(this.props.match.params.search))
  }

  itemRender = (item: {
    name: string,
    description: string,
    price: string
  }) => {

    console.log('asd')

    const { t } = this.props;

    return <div className="col-lg-3 md-6 sm-12 p-0"> 
      <div className="products">
        <div className="product-box pb-2">   
          <div className="content">           
            <div className="content-overlay"></div>
            <img src={ comida } alt="" className="img-product content-image" />
            <div className="content-details fadeIn-bottom d-flex align-items-center justify-content-center">
              <div>
                <h3 className="content-price">${ item.price || 0 }</h3>
                <p className="content-text">{ item.description || 'Descripcion producto' }</p>
                <button type="button" className="btn btn-primary mt-3 rounded-0 border-0">{ t('buy') }</button>
              </div>
            </div>
          </div>
          <div className="products-text">
            <span className="text-uppercase products-box-category px-2 py-2"> Gastronomía</span>
            <div className="products-description px-2 py-2">
              <a href="">
                <p>{ item.name || 'Nombre producto' }</p>
              </a>
            </div>
          </div>          
        </div>          
      </div>          
    </div>
  }

  render(){

    const { t } = this.props;

    let items: any[] = []

    if(this.props.itemReducer.fetched) {
      items = this.props.itemReducer.data
    }

    console.log(items)

    return(
      <div>
        <ScrollToTopOnMount />
        <Header {...this.props} lng={ this.props.languageReducer.lng }/>

        <div className="wrapper">
          <nav id="sidebar">
            <div className="sidebar-header">
              <h3 className="products-title text-uppercase font-weight-bold py-3">Experiencias</h3>
            </div>

            <ul className="list-unstyled components">
              <p className="products-subtitle font-weight-bold pt-3">Ordenar publicaciones</p>
              <li className="active">
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Más relevantes</a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                  <li>
                      <a href="#">Menor precio</a>
                  </li>
                  <li>
                      <a href="#">Mayor precio</a>
                  </li>
                  <li>
                      <a href="#">Últimos subidos</a>
                  </li>
                </ul>
              </li>
            

              <p className="products-subtitle font-weight-bold pt-3">Ubicación</p>
              <ul className="list-unstyled components">
                <li> <a className="nav-link" href="#">Córdoba</a> </li>
                <li> <a className="nav-link" href="#">Santa Fe</a> </li>
                <li> <a className="nav-link" href="#">Tucumán</a> </li>
                <li> <a className="nav-link" href="#">San Juan</a> </li>
              </ul>
              <p className="products-subtitle font-weight-bold pt-3">Precio</p>
              <form className="py-1 min-max">
                <div className="row">
                <div className="col ml-1">
                  <input type="text" className="form-control" placeholder="Mínimo" />
                </div>
                <div className="col ml-0 px-0">
                  <input type="text" className="form-control" placeholder="Máximo" />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary border-0 mr-2">{'>'}</button>
                </div>
                </div>    
              </form>
              <p className="products-subtitle font-weight-bold pt-3">Descuentos</p>
              <ul className="list-unstyled components">
                <li> <a className="nav-link" href="#">Desde 10% OFF</a> </li>
                <li> <a className="nav-link" href="#">Desde 20% OFF</a> </li>
                <li> <a className="nav-link" href="#">Desde 30% OFF</a> </li>
                <li> <a className="nav-link" href="#">Desde 40% OFF</a> </li>
              </ul>
              <p className="products-subtitle font-weight-bold pt-3">Subcategorías</p>
              <ul className="list-unstyled components">
                <li> <a className="nav-link" href="#">Viajes</a> </li>
                <li> <a className="nav-link" href="#">Naturaleza</a> </li>
                <li> <a className="nav-link" href="#">Educación</a> </li>
                <li> <a className="nav-link" href="#">Bienestar</a> </li>
                <li> <a className="nav-link" href="#">Entretenimiento</a> </li>
              </ul>
            </ul> 
          </nav>
          <div id="content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <button type="button" id="sidebarCollapse" className="btn btn-info border-0 rounded-0">
                  <i className="fas fa-align-left"></i>
                  <span>Filtrar</span>
                </button>       
              </div>
            </nav>
            <div className="container-fluid">
              <div className="row my-0">

                {
                  items.map((item: any) => {
                    return this.itemRender(item)
                  })
                }

              </div>

              <section className="pagination-products my-5">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex={-1}>Anterior</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">Siguiente</a>
                    </li>
                  </ul>
                </nav>
            
              </section>
            </div>
          </div>
        </div>

        <Footer {...this.props} />

      </div>
    );
  }
}

const ItemListExport = withTranslation()(ItemList)

export default connect(mapStateToProps)(ItemListExport)