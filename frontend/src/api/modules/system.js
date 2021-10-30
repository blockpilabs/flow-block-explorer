import http from '@/api/request';

export class SystemAPI {
  /**
   * 获取某条chain的信息
   * @param {*} chain
   * @returns
   */
  static getChainInfo(chain) {
    return http.get(`chains/${chain}`);
  }

  /**
   * 获取某个网络的统计数据
   * @param {*} chain
   * @returns
   */
  static getChainStat(chain) {
    return http.get(`charts/${chain}`);
  }

  /**
   * 获取所有chain的信息
   * @param {*} chain
   * @returns
   */
  static getChainsInfo() {
    return http.get('chains');
  }

  /**
   * 获取所有网络的统计数据
   * @param {*} chain
   * @returns
   */
  static getChainsStat() {
    return http.get('charts');
  }

  /**
   * 输入邮件获取资讯
   * @param {*} data
   * @returns
   */
  static postEmail(data) {
    return http.post('/subscribe', data);
  }
}
