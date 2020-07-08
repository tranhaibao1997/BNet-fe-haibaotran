import { GET_PROFILE, GET_PROFILES, PROFILE_ERROR, PROFILE_UPDATE, CLEAR_PROFILE } from '../actions/types'

const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}

}

export default function(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_PROFILE:
        case PROFILE_UPDATE:
            return {
                ...state,
                profile: payload,
                loading: false,

            };
        case GET_PROFILES:
            return {
                ...state,
                profiles: payload,
                loading: false
            }
        case PROFILE_ERROR:
            return {...state,
                error: payload,
                loading: false,
                profile: null
            };
        case CLEAR_PROFILE:
            return {...state, profile: null, repos: [], loading: false, error: {} }
        default:
            return state;
    }
}