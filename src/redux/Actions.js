import { Types } from "./Types"

export const getAllData = () => {
    return {
        type: Types.GET_ALL_DATA
    }
}
export const setAllData = (data) => {
    return {
        type: Types.SET_ALL_DATA,
        payload: data,
    }
}
export const researchedData = (result) => {
    return {
        type: Types.RESEARCHED_DATA,
        payload: result,
    }
}
export const fetch = () => {
    return {
        type: Types.FETCH,
    }
}