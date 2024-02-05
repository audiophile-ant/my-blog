import classNames from 'classnames'
import React, { useState } from "react";
import { FaArrowLeft } from 'react-icons/fa6';

import {styleChange} from '@/utils'

import styles from './index.scss'

const Login: React.FC = () => {
  const [showLogin, setShowLogin] = useState<Boolean>(false)
  const [showSignUp, setShowSignUp] = useState<Boolean>(false)

  const submit = () => {

  }

  const openForm = (way: string) => {
    if (way === 'login') {
      setShowLogin(true)
      setShowSignUp(false)
      styleChange({ className: 'loginForm', props: [['display', 'block']] });
      styleChange({ className: 'signUpForm', props: [['opacity', '0']] });
      setTimeout(() => styleChange({ className: 'loginForm', props: [['opacity', '1']] }), 400);  
      setTimeout(() => styleChange({ className: 'signUpForm', props: [['display', 'none']] }),200);  
    } else {
      setShowSignUp(true)
      setShowLogin(false)
        styleChange({ className: 'signUpForm', props: [['display', 'block']] });
        styleChange({ className: 'loginForm', props: [['opacity', '0']] });
        setTimeout(() => styleChange({ className: 'signUpForm', props: [['opacity', '1']] }), 100);  
        setTimeout(() => styleChange({ className: 'loginForm', props: [['display', 'none']] }),400);  
    }
  }

  const goBack = () => {
    setShowLogin(false)
    setShowSignUp(false)
    styleChange({ className: 'loginForm', props: [['opacity', '0']] });
    styleChange({ className: 'signUpForm', props: [['opacity', '0']] });
    setTimeout(() => {
      styleChange({ className: 'loginForm', props: [['display', 'none']] })
      styleChange({ className: 'signUpForm', props: [['display', 'none']] })
    }, 500);  
  }
  
  return (
    <div className={styles.loginPage}>
      <h1>浮生六记</h1>
      <div className={styles.loginCentrar}>
        <div className={styles.loginBox}>
          <div className={styles.loginInfo}>
            <div className={styles.infoLogin}>
              <div className={styles.opcitiy}>
                <h2>登录区</h2> 
                <p>如果不需要使用评论功能，可以直接在下方进行游客访问（仅无法评论）</p> 
                <button className={styles.loginBtn} onClick={() => openForm('login')}>
                  登录
                </button>
              </div>
            </div>
            <div className={styles.infoSignUp}>
              <div className={styles.opcitiy}>
                <h2>注册区</h2> 
                <p>在此处填写相关信息，进行账号注册，注册完成后可在左侧进行登录</p> 
                <button className={styles.signUpBtn} onClick={() => openForm('signUp')}>
                  注册
                </button>
              </div>
            </div>
          </div>
          <div className={styles.imgBox}>
            <div className={styles.background}>
               <img src={require('@/assets/images/login.webp')} alt="" /> 
            </div>
          </div>
          <div className={classNames(styles.form, {[styles.active]: showLogin, [styles.signUpActive]: showSignUp})}>
            <div className={styles.formImg}>
              <img src={require('@/assets/images/login.webp')} alt="" />
            </div>
            <div className={styles.loginForm}>
              <div className={styles.back} onClick={goBack}>
                <FaArrowLeft className={styles.goBack} />
              </div>
              <h2>登录</h2> 
              <input type="text" placeholder="邮箱" /> 
              <input type="password" placeholder="密码" /> 
              <button className={styles.loginBtn} onClick={submit}>登录</button>
            </div>
            <div className={styles.signUpForm}>
              <div className={styles.back} onClick={goBack}>
                <FaArrowLeft className={styles.goBack} />
              </div>
              <h2>注册</h2> 
              <input type="text" placeholder="邮箱" /> 
              <input type="text" placeholder="用户名" /> 
              <input type="password" placeholder="密码" /> 
              <input type="password" placeholder="确定密码" /> 
              <button className={styles.signUpBtn} onClick={submit}>注册</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.visitLogin}>
        <button className={styles.loginBtn}>
          <span/>
          <span/>
          <span/>
          <span />
          游客访问
        </button>
      </div>
    </div>
  )
}

export default Login