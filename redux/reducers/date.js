import { CHANGE_DATE, CHANGE_DAY, CHANGE_POPAP, CHANGE_SHOW } from "../types";

const initialDateState = {
    currentYear: new Date().getFullYear(),
    currentMonth: new Date().getMonth(),
    currentDate: new Date().getDate(),
    currentDay: new Date().getDay(),
    showDate: new Date().getDay(),
    isPopap: false
}

export const changeDate = (state = initialDateState, action) => {
    switch (action.type) {
        case CHANGE_DATE:
            return {
                ...state,
                currentYear: action.currentDate.getFullYear(),
                currentMonth: action.currentDate.getMonth(),
                currentDate: action.currentDate.getDate(),
                currentDay: action.currentDate.getDay(),
                popap: !state.isPopap
            }
        case CHANGE_POPAP:
            return { ...state, isPopap: !state.isPopap }
        case CHANGE_SHOW:
            return { ...state, showDate: action.date, currentDay: action.currentDay }
        case CHANGE_DAY:
            return { ...state, currentDay: action.day }

        default:
            return { ...state };
    }
}