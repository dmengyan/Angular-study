
// auth 身份验证 ------------ 路由守卫知识点
// implements 执行
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

export class AuthService implements CanActivate {

  constructor(  ) { }
  canActivate() {
    // 这里判断登录状态, 返回 true 或 false
    console.log('AuthGuard#canActivate called');
    return true;
  }

}
