import { START, SUCCESS, FAIL } from '../constants'
import { app } from '../utils/api'

export default store => next => action => {
    const {type, service, getAPI,...rest} = action

    if(!getAPI) return next(action)

    next({...rest, type: type + START})

    app.service(service).get(getAPI)
       .then(response => {
         next({...rest, type: type + SUCCESS, response})})
       .catch(error => {
         console.log(error)
         next({...rest, type: type + FAIL, error})})
}
