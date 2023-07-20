import { http } from './request';

export const getToken = () => {
    return http.get('/robustness/token/');
}

// export const getUploadData = (data) => {
//     return http.post('/robustness', data)
// }

export const getIdentifyResult = (data) => {
    return http.post('/robustness/test/', data)
    }

export const getDebiasResult = (data) => {
    return http.post('/fairness/start/', data)
}