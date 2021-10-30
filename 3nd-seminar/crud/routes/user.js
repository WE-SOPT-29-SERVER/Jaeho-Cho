const express =require("express");
const responseMessage = require("../constants/responseMessage");
const router = express.Router();
const users= require("./../dbMockup/user");
const responseMessage = require("./../constants/responseMessage");
const statusCode = require("./../constants/statusCode");


//...../user/signup

router.post('/signup',(req,res) =>{
   8//email,password 
  /*
   const email=req.body.eamil;
   const name =req.body.name;
   const password =req.body.password;
*/
   //위의 코드와 같은코드 
   //비구조화 할당 ( destructuring assignment)
    const{email,name,password} =req.body;

    //request body가 잘못됐을때
    if(!email || !name || !password){
        return res.status(statusCode.BAD_REQUEST)
        .send(
            util.fail (statusCode.BAD_REQUEST,responseMessage.NULL_VALUE));
    }
    //해당 email을 가진 유저가 이미 있을때
    const alreadyUser= users.filter(obj => obj.email === email)[0]

    if(alreadyUser){
        return res
        .status(statusCode.BAD_REQUEST)
        .send(
            (statusCode.BAD_REQUEST,responseMessage.ALREADY_EMAIL)); 
    }


   const newUser= {
        id: users.length+1,
        name,
       password,
       email
    };

    res.status(200).send(newUser);
});


    router.post("/login",async(req,res)=>{
        const{email,name,password} =req.body;
        if(!email || !name || !password){
            return res.status(statusCode.BAD_REQUEST)
            .send(
                util.fail (statusCode.BAD_REQUEST,responseMessage.NULL_VALUE));
        }
        const checkUser= users.filter(obj => obj.email === email)[0]
        if(!checkUser){
            return  res.status(statusCode.BAD_REQUEST)
            .send(
                util.fail (statusCode.BAD_REQUEST,responseMessage.NO_USER));
        }
      
        if(checkUser.password !== password){
            return res.status(statusCode.BAD_REQUEST)
            .send(
                util.fail (statusCode.BAD_REQUEST,responseMessage.MISS_MATCH_PW));
        }

        if(email && name && password){
            return res.status(statusCode.OK)
        .send(
            util.fail (statusCode.OK,responseMessage.LOGIN_SUCCESS));
        }
        

        //유저 검색 히스토리 저장
        //search?keyword=principles

        //1.검색 결과 반환 
        //res.status().send()

        //2.검색 히스토리 저장 

        
    })
/*router.post('/signup',(req,res) =>{
    const something =req.query
    const something =req.params    
});
*/

//query: /user?age=30
//param: /user/4




module.exportes =router;