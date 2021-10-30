import { Message } from 'element-ui';

/**
 * 统一处理响应拦截器
 * @param {object} response 响应数据
 */
export function handleResponse(response) {
  const { data } = response;
  if (typeof data === 'string') {
    return data;
  }
  // // 登录信息失效，返回登录界面
  // if (data.code === responseCode['ERROR_UNAUTHENTICATED']) {
  //   !notNotify && Message.error(responseMsg[data.code]);
  //   notNotify = true;
  //   await store.dispatch('user/logout');
  //   router.push(`/login?redirect=${window.location.hash.slice(1)}`);
  //   return Promise.reject(responseMsg[data.code]);
  // }

  // // code为403代表无权查看，跳转至首页
  // if (data.code === 403) {
  //   Message({
  //     message: responseMsg[data.code] || '403',
  //     type: 'error',
  //     showClose: true
  //   });
  //   router.push('/');
  //   return Promise.reject(responseMsg[data.code] || '403');
  // }

  // // 返回正常数据
  // notNotify = false;
  if (data.code === 'SUCCESS') {
    return data;
  } else {
    Message.error(data.message);
    return Promise.reject(data.message);
  }
}

/**
 * 统一处理请求拦截器
 * @param {object} config 请求数据
 */
export function handleRequest(config) {
  // do something before request is sent
  return config;
}

/**
 * 统一处理请求错误
 * @param {object} error 错误信息
 * @param {boolean} showMessage 是否通知用户错误信息
 */
export function handleError(error, showMessage) {
  if (error.message && showMessage) {
    Message({
      message: error.message,
      type: 'error',
      showClose: true
    });
  }
  return Promise.reject(error);
}
