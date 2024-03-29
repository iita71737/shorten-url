# 短網址產生器

運用 Express & MongoDB 打造的網頁，進行短網址生成。

[Demo on Heroku](https://aqueous-lowlands-99379.herokuapp.com/)

## Picture

![Screenshot](https://github.com/iita71737/shorten-url/blob/master/public/image/shorten-url-img.PNG)
![Screenshot](https://github.com/iita71737/shorten-url/blob/master/public/image/shorten-url-img2.PNG)

## Environment SetUp

- [MongoDB](https://www.mongodb.com/download-center/community) - Database
- [Node.js](https://nodejs.org/en/) - JavaScript runtime built
- [Express](https://expressjs.com/zh-tw/starter/installing.html) - Node.js web framework
- [Mongoose](https://mongoosejs.com/) - elegant mongodb object modeling for node.js

## Installing

###### 如何下載並啟動專案

打開終端機，啟動本地 MongoDB 資料庫

```
mongod --dbpath /Users/[user]/mongodb-data --bind_ip 127.0.0.1
```

再開啟另一個終端機，`Clone` 這個專案，完成後會顯示 Done 訊息

```
git clone https://github.com/iita71737/shorten-url.git
```

從終端機導入目標檔案，並下載工具包

```
npm install
```

開啟本地伺服器。

```
node app.js
```

成功連結後，瀏覽器輸入 http://localhost:3000
網頁即可運行並執行動作。

## Features

###### 功能特點

- 使用者輸入網址後，即可進行短網址生成

