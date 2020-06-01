var express = require('express');
var router = express.Router();
var db=require('../../database/db');

router.get("/",function (request,response,next) {
  //  response.header("Access-Control-Allow-Origin", "*");
  //   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var data={};
    var sql ="select * from article limit 0,6";
    db.query(sql,function (error,results) {
       if (!error && results.length>0){
          data.article1=results;
       }
       var sql ="select * from article limit 6,6";
     db.query(sql,function (error,result) {
         if (!error && result.length>0){
             data.article2=result;
         }
         response.json(data);
     })
    })
  })

router.get("/jiangs",function (request,response,next) {
    var data={};
    var sql ="select * from user";
    db.query(sql,function (error,result) {
        if (!error && result.length>0){
            data.jiangs=result;
            response.json(data);
        }
    })
});
router.get("/con_one",function (request,response,next) {
  var data={};
  var sql ="select * from classfiy";
  db.query(sql,function (error,result) {
      if (!error && result.length>0){
          data.classfiy=result;
          response.json(data);
      }
  })
});
router.get("/con_one2",function (request,response,next) {
  var data={};
  var c_id=request.query.c_id;
//  console.log(c_id);
  var sql ="select * from classfication where c_id="+c_id;
  db.query(sql,function (error,result) {
      if (!error && result.length>0){
          data.classfiyxx=result;
      }
  var sql ="select * from article where class_id="+c_id;
  db.query(sql,function(error,result){
     if (!error && result.length>0){
    data.card=result;
    response.json(data);
}
  })
 
  })
});  

router.get("/leixx",function (request,response,next) {
  var data={};
  var c_id=request.query.c_id;
  var sql ="select * from classfication ";
  db.query(sql,function (error,result) {
      if (!error && result.length>0){
          data.leixx=result;
      }
  var sql ="select * from article where classxx_id="+c_id;
  db.query(sql,function(error,result){
    if (!error && result.length>0){
      data.card=result;
  }
  response.json(data);
  })
      
  })
}); 
router.get("/cardall",function (request,response,next) {
    var data={};
    var sql ="select * from article ";
    db.query(sql,function (error,results) {
       if (!error && results.length>0){
          data.article=results;
       }
         response.json(data);
    })
  });
//搜索
router.get('/search',function(request,response){
    var data={};
    var shuju=request.query.keyword;
    var sql="select * from article where  title  like '%"+shuju+"%' or author like '%"+shuju+"%'";
    db.query(sql,(error,result)=>{
        if (!error &&result.length>0  ){
            data.search_con=result;
            data.lengths=result.length;
            data.keywords=shuju;
            response.json(data);
        }else {
            data.keywords=shuju;
            response.json(data);
        }

    })
});
//用户登录验证
router.get("/login", function (req, res, next) {
    var data={};
    var username =req.query.name;
    var userpwd =req.query.password;
    var sql = "select * from users where name='" + username + "' and password='" + userpwd + "'";
    db.query(sql, function (error, results) {
        if (!error && results.length>0) {
            data.error=200;
            data.users = results[0];
            res.json(data)
        }else {
            data.error=500;
            res.json(data)
        }
    })
});
//用户注册信息提交数据库
router.post('/registor', function(req, res, next) {
    var  data={}
    var username =req.query.name;
    var password=req.query.password;
    var password1 =req.query.password1;
    var email=req.query.email;
        var sql = "insert into users(name,password,email)values(?,?,?)";
        var params = [username,password,email];
        db.query(sql,params,function (error,result) {
            if (!error ) {
                data.error=200;
                res.json(data)
            }else {
                data.error=500;
                res.json(data)
            }
        })
    });

router.get("/xiangq", function (req, res, next) {
    var data={};
    var c_id =req.query.c_id;
    var jiangs_id =req.query.jiangs;
    var sql = "select * from article where c_id="+c_id;
    db.query(sql, function (error, results) {
        if (!error && results.length>0) {
            data.article=results;
        }
        var sql="select * from user where id="+jiangs_id;
        db.query(sql,function (error,results) {
            if (!error && results.length>0){
                data.jiangs=results;
            }
            res.json(data);
        })
    })
});
router.get("/jiacart", function (req, res, next) {
    var data={};
    var users_id=req.query.users_id;
    var lesson_id=req.query.lesson_id;
    var price=req.query.price;
    var name=req.query.name;
    var pic=req.query.pic;

    var sql = "select * from shopcart where users_id="+users_id+"' and lesson_id='"+lesson_id+" 'and price='"+price+"'and name='"+name+"'pic='"+pic;
    db.query(sql, function (error, results) {
        if (!error && results.length>0) {
            var sql="update shopcart set num=num+1"
            db.query(sql,function (error,results) {
                if (!error ) {
                    data.error=200;
                    res.json(data)
                }
            })
        }else {
            var sql="insert into shopcart(users_id,lesson_id,price,name,pic) values (?,?,?,?,?)"
            var params=[users_id,lesson_id,price,name,pic];
            console.log(params)
            console.log(sql)
            db.query(sql,params,function (error,results) {
                if (!error ) {
                    data.error=200;
                    res.json(data)
                }else {
                    console.log(666);
                    // data.error=500;
                    // res.json(data)
                }
            })
        }

    })
});
router.get("/cart_con", function (req, res, next) {
    var data={};
    var users_id=req.query.users_id;
    var sql = "select * from shopcart where users_id="+users_id;
    db.query(sql, function (error, results) {
        if (!error && results.length>0) {
            data.cart_con=results;
            res.json(data);
        }
    })
});
//删除购物车的东西
router.get("/cart_del", function (req, res, next) {
    var data={};
    var lesson_id=req.query.lesson_id;
    var sql = "delete from shopcart where lesson_id="+lesson_id;
    db.query(sql, function (error, results) {
        if (!error) {
            data.error=200;
            res.json(data);
        }else{
            data.error=500;
            res.json(data);
        }
    })
});

router.get("/lesson_con", function (req, res, next) {

    var data={};
    var lesson_id=req.query.lesson_id;
    var price=req.query.price;
    var name=req.query.name;
    var pic=req.query.pic;
    // console.log(lesson_id,price)
    var sql = "select * from lessons where lesson_id="+lesson_id;
    db.query(sql, function (error, results) {
        if (!error && results.length>0) {
            data.info="数据已存在"
        }else {
            var sql="insert into lessons (id,price,name,pic) values (?,?,?,?)";
            var params=[lesson_id,price,name,pic];
            db.query(sql,params,function (error,results) {
                if (!error ) {
                    data.error=200;
                    res.json(data)
                }else {
                    data.error=500;
                    res.json(data)
                }
            })
        }

    })
});
router.get("/lessoninfo", function (req, res, next) {
    var data={};
    var sql = "select * from  lessons";
    db.query(sql, function (error, results) {
        if (!error && results.length>0) {
            data.lessoninfo=results;
            res.json(data);
        }
    })
});
router.get("/getinfo", function (req, res, next) {
    var data={};
    var users_id=req.query.users_id;
    var sql = "select * from users  where id="+users_id;
    db.query(sql, function (error, results) {
        if (!error && results.length>0) {
            data.getinfo=results;
            res.json(data);
        }
    })
});
module.exports = router;