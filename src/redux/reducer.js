import { updateObject } from "../lib/utility";
import * as actionTypes from "./action-types";

const initialState = {
    empList: []
};

const storeEmpData = (state, action) => {
    return updateObject(state, { empList: [...action.data] });
};

const rootReducer = (state = initialState, action) => {
    if (action.type === actionTypes.GET_EMP_LIST) {
        return storeEmpData(state, action);
    }
    return state;
};

export default rootReducer;