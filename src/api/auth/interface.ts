export interface LoginResponse {
  /**
   * 签发凭证
   */
  token: string;
  /**
   * 凭证到期时间，如果为null则代表此凭证未设置到期时间。格式为ISO-8601
   */
  tokenExpireAt?: null | string;
  /**
   * 凭证生效所在版本，当用户进行一些可能会递增版本的操作时（例如更新密码）凭证版本便会与实际版本存在出入，继而失效
   */
  tokenVersion: number;
  user: User;

  [property: string]: any;
}

export interface User {
  /**
   * 创建时间，ISO8601日期
   */
  createdDate: string;
  /**
   * 注册邮箱
   */
  email: string;
  id: number;
  permissions?: PermissionView[];
  resources?: ResourceView[];
  roles?: RoleView[];
  /**
   * 状态，- -2：停用
   * - -1：删除
   * - 0：正常
   */
  status: number;
  /**
   * 用户昵称
   */
  username: string;

  [property: string]: any;
}

/**
 * 权限信息视图
 */
export interface PermissionView {
  /**
   * 分组，普通的分组字符串
   */
  category: string;
  /**
   * 创建时间
   */
  createdDate: string;
  id: number;
  /**
   * 权限标识，权限唯一标识，建议用小写+冒号分隔的方式（类似于redis）
   */
  key: string;
  /**
   * 权限名称，权限名称
   */
  name: string;
  /**
   * 权限状态，- -1：禁用
   * - 0：正常
   */
  status: number;

  [property: string]: any;
}

/**
 * 资源信息视图
 */
export interface ResourceView {
  /**
   * 分组，普通的单层分组字符串
   */
  category: string;
  /**
   * 创建日期，格式：ISO8601
   */
  createdDate: Date | null;
  id: number;
  /**
   * 备注
   */
  remark: string;
  /**
   * 状态，- -1: 停用
   * - 0: 正常
   */
  status: number;
  /**
   * 资源类型，目前已知类型：
   * - 1: 后端接口路径资源
   * - 2: 前端路由等资源
   */
  type: number;
  /**
   * 资源路径，对于后端接口资源，是一个支持PathPattern匹配的路径
   */
  value: string;

  [property: string]: any;
}

/**
 * 角色信息视图
 */
export interface RoleView {
  /**
   * 分类，普通的分类字符串
   */
  category: string;
  createdDate: string;
  /**
   * 默认角色，系统默认角色不可删除
   */
  default: boolean;
  id: number;
  /**
   * 初始化角色，初始化角色会在每一个用户新建出来的时候默认追加上
   */
  init: boolean;
  /**
   * 角色标识，唯一标识
   */
  key: string;
  /**
   * 角色名
   */
  name: string;
  /**
   * 状态，- -1：禁用
   * - 0：正常
   */
  status: number;

  [property: string]: any;
}
