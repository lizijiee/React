import React from 'react';
import { useState, useEffect } from 'react';
// import logo from './logo.svg';
import { Icon } from 'antd';
import './App.less';

function App() {
  const [count, setCount] = useState(0);

  return (
    <header className="common-basic-bar">
      <div className="common-topbar-logo">
        <a href="/">
          <img src={require('./assets/favicon.png')} alt="logo" />
        </a>
        <span>中国石油工业互联网平台</span>
      </div>
      <div className="common-all-nav">
        <img src={require('./assets/menu.png')} alt="menu-icon" className="menu-icon" />
        <ul className="common-navs-collected">
          <li>管理菜单</li>
          <li>工业应用</li>
          <li>应用管理</li>
          <li>开发者中心</li>
          <li>技术支撑工具</li>
        </ul>
      </div>
      <div className="common-topbar-right">
        <a href="http://11.11.78.160:9090/api/fs/download?group=group1&amp;path=M00/00/00/CwtOoF1eNDuABbW3ACgGbtxc0-M16.docx&amp;fileName=%E9%97%A8%E6%88%B7%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C.docx" download="test">
          <img src={require('./assets/question.png')} alt="logo" />
          {/* <Icon type="question-circle" /> */}
        </a>
        <div className="common-topbar-notice">
          <Icon type="sound" />
          <div className="common-topbar-dot" />
          <div className="common-notice-content" >
            <div className="common-notice-head">
              <span>站内消息通知</span>
              <a href="https://notifications.console.aliyun.com/#/subscribeMsg">消息接收管理</a>
            </div>
            <div className="common-notice-body">
              <ul className="common-notice-list">
                <li>
                  <a target="_blank" className="clearfix" rel="noopener noreferrer" href="https://notifications.console.aliyun.com/#/innerMsg/allDetail/7907359712">
                    <p>【邀您报名】第五届中间件性能挑战赛正式开战！20万现金大奖等你拿</p>
                    <p className="topbar-notice-item-time">2019-07-01 09:47</p>
                  </a>
                </li>
                <li>
                  <a target="_blank" className="clearfix" rel="noopener noreferrer" data-spm-anchor-id="5176.12818093.aliyun_topbar.34" href="https://notifications.console.aliyun.com/#/innerMsg/allDetail/7907359712">
                    <p className="topbar-notice-item-name" title="【邀您报名】第五届中间件性能挑战赛正式开战！20万现金大奖等你拿">【邀您报名】第五届中间件性能挑战赛正式开战！20万现金大奖等你拿</p>
                    <p className="topbar-notice-item-time">2019-07-01 09:47</p>
                  </a>
                </li>
                <li>
                  <a target="_blank" className="clearfix" rel="noopener noreferrer" data-spm-anchor-id="5176.12818093.aliyun_topbar.34" href="https://notifications.console.aliyun.com/#/innerMsg/allDetail/7907359712">
                    <p className="topbar-notice-item-name" title="【邀您报名】第五届中间件性能挑战赛正式开战！20万现金大奖等你拿">【邀您报名】第五届中间件性能挑战赛正式开战！20万现金大奖等你拿</p>
                    <p className="topbar-notice-item-time">2019-07-01 09:47</p>
                  </a>
                </li>
                <li>
                  <a target="_blank" className="clearfix" rel="noopener noreferrer" data-spm-anchor-id="5176.12818093.aliyun_topbar.34" href="https://notifications.console.aliyun.com/#/innerMsg/allDetail/7907359712">
                    <p className="topbar-notice-item-name" title="【邀您报名】第五届中间件性能挑战赛正式开战！20万现金大奖等你拿">【邀您报名】第五届中间件性能挑战赛正式开战！20万现金大奖等你拿</p>
                    <p className="topbar-notice-item-time">2019-07-01 09:47</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="common-notice-foot">
              <a target="_blank" rel="noopener noreferrer" className="common-notice-more" href="https://msc.console.aliyun.com/#/innerMsg/unread/0">查看更多</a>
            </div>
          </div>
        </div>
        <div className="common-topbar-official">
          <a href="/" target="_self">
            <img src={require('./assets/home.png')} alt="logo" />
            {/* <Icon type="home" /> */}
          </a>
        </div>
        <div className="common-topbar-user" >
          <img src={require("./assets/user.png")} alt="user-profile" />
          <ul className="common-user-list">
            <div className="nav-trangle">
            </div>
            <li>
              <Icon type="user" style={{ fontSize: '16px', marginRight: '8px' }} />
              <span>个人中心</span>
            </li>
            <li>
              <Icon type="setting" style={{ fontSize: '16px', marginRight: '8px' }} />
              <span>个人设置</span>
            </li>
            <li className="common-divider">
            </li>
            <li>
              <Icon type="logout" style={{ fontSize: '16px', marginRight: '8px' }} />
              <span>退出登录</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="common-navs-menus">111111</div>
    </header>
  );
}

export default App;