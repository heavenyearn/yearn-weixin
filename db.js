/*
 * @Author: your name
 * @Date: 2022-03-10 15:48:59
 * @LastEditTime: 2022-03-10 16:19:56
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yearn-weixin/db.js
 */
const { Sequelize, DataTypes } = require("sequelize");

// 从环境变量中读取数据库配置
const { MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_ADDRESS = "" } = process.env;

const [host, port] = MYSQL_ADDRESS.split(":");

const sequelize = new Sequelize("nodejs_demo", MYSQL_USERNAME, MYSQL_PASSWORD, {
  host,
  port,
  dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

const Location = sequelize.define("Location", {
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0.00,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0.00,
  }
})

// 数据库初始化方法
async function init() {
  await Location.sync({ alter: true });
}

// 导出初始化方法和模型
module.exports = {
  init,
  Location,
};
