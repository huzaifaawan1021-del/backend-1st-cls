const exp = require('express');
const app = exp();

app.use(exp.json());
const Arr = [];

app.get('/',(req,res)=>{
    res.status(200).json({'message': 'Server is running' , Data: Arr});
})

app.post('/Data',(req,res)=>{
   const Data = req.body;
   Arr.push(Data);
    res.status(200).json({'message': 'Data added successfully' , data: Arr});
    console.log(Arr);
})

app.delete('/Data/:index' , (req,res)=>{
    const ind = req.params.index;
    Arr.splice(ind,1);
    res.status(200).json({'message': 'Data deleted successfully' , data: Arr});
    console.log(Arr);

})

app.patch('/Data/:index', (req,res)=>{
    const ind = req.params.index;
    const Data = req.body;
    Arr[ind] = Data;    
    res.status(200).json({'msg': 'Data updated successfully' , data: Arr});

})

app.put('/Data/:index', (req,res)=>{
    const ind = req.params.index;
    const Data = req.body;
    Arr[ind] = Data;    
    res.status(200).json({'msg': 'Data updated successfully' , data: Arr});

}
)

module.exports = app;