var express = require('express');
var router = express.Router();

var cors = require('cors');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/getToken', cors(), function (req, res, next) {
    var qiniu = require("qiniu");
    
    //需要填写你的 Access Key 和 Secret Key
    qiniu.conf.ACCESS_KEY = 'puYC662LgrabQINIUnxsxoBSdquje7bGeue2rVIU';
    qiniu.conf.SECRET_KEY = 'FPGeY-q0--Uzw8t4OeNzFMw2jr8M9_nV0WYHijpA';
    
    //要上传的空间
    bucket = 'error';
    
    //生成上传 Token
    token = new qiniu.rs.PutPolicy(bucket).token();
    
    res.json({ token: token });

});

module.exports = router;
