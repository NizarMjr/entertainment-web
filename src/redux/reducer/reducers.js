import { Types } from "../Types"
const data = [];

export const reducerData = (state = data, { type, payload }) => {
    switch (type) {
        case Types.SET_ALL_DATA: {
            state = payload;
            return state;
        }
        case Types.GET_ALL_DATA: {
            return state;
        }
        case Types.RESEARCHED_DATA: {
            const filter = state.filter((ele) => {
                return Object.values(ele.title).join('').toLowerCase().includes(payload.toLowerCase());
            })
            return filter;
        }
        default: return state;
    }
}
