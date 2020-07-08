import { GET_PROFILE, GET_PROFILES, PROFILE_ERROR, PROFILE_UPDATE } from '../actions/types'
import axios from 'axios'





export const updatePersonal = (formData) => async(dispatch) => {
    const config = {
        headers: {
            'Content-Type': "application/json"
        }
    }
    const body = JSON.stringify(formData);
    try {
        let res = await axios.post("https://backend-final-project-haibao.herokuapp.com/api/profile/updatePersonal", body, config)
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}


export const getCurrentProfile = () => async dispatch => {
    try {
        console.log("CHAY ZO DAYYYYYYY")
        let res = await axios.get("https://backend-final-project-haibao.herokuapp.com/api/profile/me")
        console.log(res, "CURRENT PROFILE")
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }

}

//get profile by id
export const getProfileById = (userId) => async dispatch => {
    try {
        const res = await axios.get(`https://backend-final-project-haibao.herokuapp.com/api/profile/${userId}`)
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
        console.log(res.data, "FROM PROFILE BY IDDDDDDDDDDD")
    } catch (err) {
        console.log(err)
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.data.mgs, status: err.response.status }
        })

    }
}

export const updateHobbies = (formData) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const body = JSON.stringify(formData)
    console.log(body)
    try {
        let res = await axios.post("https://backend-final-project-haibao.herokuapp.com/api/profile/updateHobbies", body, config)
        dispatch({
            type: PROFILE_UPDATE,
            payload: res.data.data
        })
    } catch (err) {
        console.log(err)
    }
}

export const createEducation = (formData, history) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const body = JSON.stringify(formData)
    try {
        let res = await axios.post("https://backend-final-project-haibao.herokuapp.com/api/profile/createEducation", body, config)
        dispatch({
            type: PROFILE_UPDATE,
            payload: res.data.data
        })
        history.push("/dashboard/carrier")

    } catch (err) {
        console.log(err)
    }
}


export const deleteEducation = (id) => async dispatch => {

    try {
        let res = await axios.delete(`https://backend-final-project-haibao.herokuapp.com/api/profile/deleteEducation/${id}`)
        console.log(res.data, "DELETEEEEE")
        dispatch({
            type: PROFILE_UPDATE,
            payload: res.data.data
        })


    } catch (err) {
        console.log(err)
    }
}