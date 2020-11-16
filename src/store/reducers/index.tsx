import { combineReducers } from 'redux';

import apiWork from './apiWorkReducer';
import loginReducer from './login'
import dialogReducer from './dialogReducer'
import drawerReducer from './drawerReducer'
import registerReducer from './registerReducer'
import solicitudDeValidacionReducer from './solicitudDeValidacionReducer'
import requestReducer from './requestReducer'
import presupuestoReducer from './presupuestoReducer'
import itemReducer from './itemReducer'
import unidadDeMedidaReducer from './unidadDeMedidaReducer'
import ubicacionReducer from './ubicacionReducer'
import fileReducer from './fileReducer'
import empresaReducer from './empresaReducer'
import actividadEconomicaReducer from './actividadEconomicaReducer'
import languageReducer from './languageReducer'
import proposalReducer from './proposalReducer'
import profileReducer from './profileReducer'

export default combineReducers({
    apiWork,
    loginReducer,
    dialogReducer,
    drawerReducer,
    registerReducer,
    solicitudDeValidacionReducer,
    requestReducer,
    presupuestoReducer,
    itemReducer,
    unidadDeMedidaReducer,
    ubicacionReducer,
    fileReducer,
    empresaReducer,
    actividadEconomicaReducer,
    languageReducer,
    proposalReducer,
    profileReducer
})