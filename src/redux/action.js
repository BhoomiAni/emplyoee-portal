import { GET_EMP_LIST } from "./action-types";

export const getEmpList = (payload) => {
    console.log("pa",payload);
    return { type: GET_EMP_LIST, data: payload }
};