import ErrorMessage from './ErrorMessage';

export const parseError = (response) => {
    switch (response.status){
        case 400:
            switch (response.data.code){
                case 4: return new ErrorMessage('Parámetros inválidos', response.data.details); break;
            }
        break;
        case 401:
        break;
        case 403:
        break;
        case 404:
            switch (response.data.code){
                case 3: return new ErrorMessage(response.data.message); break;
            }
        break;
        default: return new ErrorMessage('Error en la operación. Intente mas tarde'); break;
    }
}