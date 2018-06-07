import * as ActionTypes from './actions'

export const exampleInitialState = {
  pro_matches: null,
  leagues: null,
  matches: null,  
  players: null, 
  teams: null, 
  error: false,
  lastUpdate: 0,
  isFetching: false
}


function reducer(state = exampleInitialState, action) {
    switch (action.type) {
        case ActionTypes.PROMATCHES.REQUEST:
        case ActionTypes.LEAGUE.REQUEST:
        case ActionTypes.MATCH.REQUEST:
        case ActionTypes.PLAYER.REQUEST:
        case ActionTypes.TEAM.REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case ActionTypes.PROMATCHES.FAILURE:
        case ActionTypes.LEAGUE.FAILURE:
        case ActionTypes.MATCH.FAILURE:
        case ActionTypes.PLAYER.FAILURE:
        case ActionTypes.TEAM.FAILURE:
            return {
                ...state,
                isFetching: false,
                ...{ error: action.error }
            }
        case ActionTypes.PROMATCHES.SUCCESS:
            return {
                ...state,
                isFetching: false,
                ...{
                    pro_matches: action.response,                    
                }
            }
        case ActionTypes.LEAGUE.SUCCESS:
            return {
                ...state,
                isFetching: false,
                ...{
                    leagues: action.response,                    
                }
            }
            case ActionTypes.MATCH.SUCCESS:
            return {
                ...state,
                isFetching: false,          
                ...{                    
                    matches: action.response,                   
                }
            }
            case ActionTypes.PLAYER.SUCCESS:
            return {
                ...state,
                isFetching: false,
                ...{
                    players: action.response,                   
                }
            }
            case ActionTypes.TEAM.SUCCESS:
            return {
                ...state,
                isFetching: false,
                ...{
                    teams: action.response,                  
                }
            }
        default:
            return state
    }
}

export default reducer
