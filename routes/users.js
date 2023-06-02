
const {Router}  = require('express');
const router = Router();

const mysqlConnection = require('../db');
router.get('/',(req,res)=>{
    res.status(200).json('Server on port 25060');

});
router.get('/users',(req,res)=>{
mysqlConnection.query('select * from mainTable;',(error, rows, fields)=>{
    if(!error)
    {
        res.json(rows);
    }
    else
    {
        console.log(error);
    }
})
});
router.post('/createNewUser',(req,res)=>{
    const{phone,name,email,gender,image,token,passenger,pilot,total}=req.body;
    mysqlConnection.query('insert into mainTable values(?,?,?,?,?,?,?,?,?);',[phone,name,email,gender,image,token,passenger,pilot,total],(error,rows,fields)=>
    {
        if(!error)
        {
            res.json({Status:'New User Created'});
        }
        else
        {
            console.log(error);
        }
    });
});
router.get('/users/user',(req,res)=>{
    const {phone} = req.query;
    mysqlConnection.query('select * from mainTable where phone = ?',[phone],(error,rows,fields)=>{
        if(!error)
        {
            console.log('error');
            res.json(rows);
           
        }
        else
        {
            console.log('errorw');
            console.log(error);
        }
    });

});
router.post('/users',(req,res)=>{
    const{phone, name,  email,gender,univ}=req.body;
     console.log(req.body);
     mysqlConnection.query('insert into mainTable(phone,name,email,gender,univ) values(?,?,?,?,?);',[
        phone, name,  email,gender,univ
     ],(error,rows,fields)=>{
        if(!error)
        { 
            res.json({Status:'User Saved'});       
        }
        else
    {
          console.log(error);
    }

     });
 
});
router.put('/:users/:id',(req,res)=>{
    const{phone, name,  email,gender,univ}=req.body;
    console.log(req.body);
    mysqlConnection.query('update mainTable set name =?, email=?,gender=?, univ = ?, where id=?;',[
         name, email,gender,univ,phone
     ],(error,rows,fields)=>{
        if(!error)
        {
            res.json({Status:'User Updated'});
        }
        else{
            console.log(error);
        }
     });
});
router.get('/users/updateToken',(req,res)=>{
    const {phone,token}=req.query;
     
    mysqlConnection.query('update mainTable set token =? where phone=?;',[
        token,phone
            ],(error,rows,fields)=>{

  if(!error)
        {
             res.json(phone);
        }
        else{
            console.log(error);
        }
     });
});

router.get('/users/updatePilotRide',(req,res)=>{
    const {phone}=req.query;

    mysqlConnection.query('update mainTable set pilot =pilot+1 where phone=?;',[
        phone
            ],(error,rows,fields)=>{

  if(!error)
        {
             res.json(phone);
        }
        else{
            console.log(error);
        }
     });
});




router.get('/users/updatePassengerRide',(req,res)=>{
    const {phone}=req.query;

    mysqlConnection.query('update mainTable set passenger =passenger+1 where phone=?;',[
        phone
            ],(error,rows,fields)=>{

  if(!error)
        {
             res.json(phone);
        }
        else{
            console.log(error);
        }
     });
});


router.get('/users/updateTotalRide',(req,res)=>{
    const {phone}=req.query;

    mysqlConnection.query('update mainTable set total =total+1 where phone=?;',[
        phone
            ],(error,rows,fields)=>{
if(!error)
        {
             res.json(phone);
        }
        else{
            console.log(error);
        }
     });
});

router.get('/users/getPilotRides',(req,res)=>{
    const {phone,valueof}=req.query;

    mysqlConnection.query('select pilot from mainTable where phone =?',[
phone
            ],(error,rows,fields)=>{

  if(!error)
        {
             res.json(rows);
        }
        else{
            console.log(error);
        }
     });
});
router.get('/users/getPassengerRides',(req,res)=>{
    const {phone,valueof}=req.query;

    mysqlConnection.query('select passenger from mainTable where phone =?',[
phone
            ],(error,rows,fields)=>{

  if(!error)
        {
             res.json(rows);
        }
        else{
            console.log(error);
        }
     });
});


router.get('/users/getTotalRides',(req,res)=>{
    const {phone,valueof}=req.query;

    mysqlConnection.query('select total from mainTable where phone =?',[
phone
            ],(error,rows,fields)=>{

  if(!error)
        {
             res.json(rows);
        }
        else{
            console.log(error);
        }
     });
});
router.delete('/:users/:id',(req,res)=>{
    const {phone} = req.params;
    mysqlConnection.query('delete from mainTable where id = ?;',[phone],(error,rows,fields)=>{
        if(!error)
        {
            res.json({Status:'User deleted'});

        }
        else{
            console.log(error);
        }
    });
});
module.exports=router;
