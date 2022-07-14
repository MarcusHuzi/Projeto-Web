import mongoose from "mongoose";

const Client = mongoose.model('Client')

const controller = {}

controller.post = async (req, res) => {
    const client = new Client(req.body)
    try{
        await client.save()
        res.status(200).send({
            message: "Cadastrado efetuado"
        });
    } catch(e){
        res.status(400).send({
            message: "Falha no cadastro"
        });
    }

};

controller.get = async (req,res)=>{
    try{
        const data = await Client.find({active: true}, 'nome cpf email tel cep num nasc')
        res.status(200).send(data)
    } catch (e){
        res.status(400).send(e)
    }
};

controller.getByCPF = async (req,res)=>{
    try{
        const data = await Client.findOne({active: true, cpf: req.params.cpf}, 'nome email tel cep num nasc')
        res.status(200).send(data)
    } catch (e){
        res.status(400).send(e)
    }
};

controller.getById = async (req,res)=>{
    try{
        const data = await Client.findById({active: true, cpf: req.params.id}, 'nome email tel cep num nasc')
        res.status(200).send(data)
    } catch (e){
        res.status(400).send(e)
    }
};

controller.put = async (req,res)=>{
    try{
        await Client.findByIdAndUpdate(req.params.id,{
            $set:{
                nome: req.body.nome,
                email: req.body.email,
                tel: req.body.tel,
                senha: req.body.senha,
                cep: req.body.cep,
                num: req.body.num,
                comp: req.body.comp
            }
        });
        res.status(201).send({
            message: 'Cliente atualizado com sucesso'
        });
    } catch(e){
        res.status(400).send({
            message: 'Falha na atualização de dados',
            data: e
        });
    }
};

controller.delete = async (req,res)=>{
    try{
        await Client.findOneAndRemove({_id: req.params.id});
        res.status(201).send({
            message: 'Cliente deletado com sucesso'
        });
    } catch(e){
        res.status(400).send({
            message: 'Falha no delete',
            data: e
        });
    }
};

export default controller;