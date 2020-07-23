// cargamos la función para crear un store
import { createStore } from 'redux';
// cargamos nuestros reducers (ya combinados)
import reducers from '../reducers';
// definimos el estado inicial
const initialState = {
    account: {
        isUser: false,
        isAuthenticated: false
    },
    todos: [],
};
// creamos el store
const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default store;