const controller = {}

controller.get = (req,res)=>{

    res.status(200).send({
        key: req.params.key,
    });
};

controller.put = (req,res)=>{
    res.status(201).send({
        key: req.params.key,
        value: req.body,
    });
};

controller.delete = (req,res)=>{
    res.status(201).send({
        deleting: req.params.key,
    });
};

export default controller;