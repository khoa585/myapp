import * as taskConstants from './../constants/index';
export const actFetchProducts = () => ({
    type: taskConstants.FETCH_TASK
});
export const actFetchProductsSucccess = (data) => ({
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
        data
    }
});
export const actFetchProductsFailed = (error) => ({
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
        error
    }
});

export const showloading = () => ({
    type: taskConstants.SHOWLOADING
});
export const hideloading = () => ({
    type: taskConstants.HIDELOADING
});