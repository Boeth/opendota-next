import { call, put, all, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import 'isomorphic-unfetch'
import { LEAGUE } from './actions';


// each entity defines 3 creators { request, success, failure }
const { promatches, league, match, team, player } = actions

const OPENDOTA_URL = 'https://api.opendota.com/api'
const PROMATCHES = OPENDOTA_URL + '/proMatches'
const MATCHES = OPENDOTA_URL + '/matches/' // /{match_id}
const PLAYERS = OPENDOTA_URL + '/players/' // /{account_id}
const LEAGUES = OPENDOTA_URL + '/leagues'
const TEAMS = OPENDOTA_URL + '/teams/' // /{team_id}

function* fetchApi(apiUrl, actionType, error) {
  try {   
    const res = yield fetch(apiUrl)
    const result = yield res.json()
    yield put(actionType.success(result) )
  } catch (e) {
     yield put(actionType.failure(error));
  }
} 

const fetchProMatches = () => fetchApi(PROMATCHES, actions.promatches, 'Could not load pro matches')

function* promatchesSaga() {
  yield takeEvery(actions.PROMATCHES.REQUEST, fetchProMatches);
}


const fetchMatch = (action) => fetchApi(MATCHES+action.id, actions.match, 'Could not load  matches')

function* matchSaga() {
 yield takeEvery(actions.MATCH.REQUEST, fetchMatch);
}


const fetchPlayer = (action) => fetchApi(PLAYERS+action.id, actions.player, 'Could not load  player')

function* playerSaga() {
 yield takeEvery(actions.PLAYER.REQUEST, fetchPlayer);
}

const fetchTeam = (action) => fetchApi(TEAMS+action.id, actions.team, 'Could not load  team')

function* teamSaga() {
 yield takeEvery(actions.TEAM.REQUEST, fetchTeam);
}

const fetchLeague = () => fetchApi(LEAGUES, actions.league, 'Could not load  league')

function* leagueSaga() {
 yield takeEvery(actions.LEAGUE.REQUEST, fetchLeague);
}

 function* rootSaga() {
  yield all([
    promatchesSaga(),
    matchSaga(),
    playerSaga(),
    teamSaga(),
    leagueSaga()  
  ])
}

 export default rootSaga;