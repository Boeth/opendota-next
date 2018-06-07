const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
    return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`
        return acc
    }, {})
}

export const PROMATCHES = createRequestTypes('PROMATCHES')
export const LEAGUE = createRequestTypes('LEAGUE')
export const MATCH = createRequestTypes('MATCH')
export const TEAM = createRequestTypes('TEAM')
export const PLAYER = createRequestTypes('PLAYER')

function action(type, payload = {}) {
    return { type, ...payload }
}

export const promatches = {
    request: () => action(PROMATCHES[REQUEST]),
    success: (response) => action(PROMATCHES[SUCCESS], { response }),
    failure: (error) => action(PROMATCHES[FAILURE], { error }),
}

export const league = {
    request: () => action(LEAGUE[REQUEST]),
    success: (response) => action(LEAGUE[SUCCESS], { response }),
    failure: (error) => action(LEAGUE[FAILURE], { error }),
}

export const match = {
    request: id => action(MATCH[REQUEST], { id }),
    success: (response) => action(MATCH[SUCCESS], { response }),
    failure: (error) => action(MATCH[FAILURE], { error }),
}

export const team = {
    request: id => action(TEAM[REQUEST], { id }),
    success: (response) => action(TEAM[SUCCESS], { response }),
    failure: (error) => action(TEAM[FAILURE], { error }),
}

export const player = {
    request: id => action(PLAYER[REQUEST], { id }),
    success: (response) => action(PLAYER[SUCCESS], { response }),
    failure: (error) => action(PLAYER[FAILURE], { error }),
}



