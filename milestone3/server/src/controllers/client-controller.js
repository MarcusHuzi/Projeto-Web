import mongoose from "mongoose";

const Client = mongoose.model('Client')

const controller = {}

controller.newClient = async (req, res) => {
    const client = new Client(req.body)
    try{
        await client.save()
        res.status(201).send({
            message: "Cadastrado efetuado",
            id: client._id
        });
    } catch(e){
        res.status(400).send({
            message: "Falha no cadastro",
            data: e
        });
    }
};

controller.getAllClients = async (req,res)=>{
    try{
        const data = await Client
            .find({active: true}, 'nome cpf email tel nasc cep endereco')
        res.status(200).send(data)
    } catch (e){
        res.status(400).send(e)
    }
};

controller.getByEmail = async (req,res)=>{
    try{
        const data = await Client
            .findOne({active: true, email: req.params.email})
        res.status(200).send(data)
    } catch (e){
        res.status(400).send(e)
    }
};

controller.getById = async (req,res)=>{
    try{
        const data = await Client.findById(req.params.id)
        res.status(200).send(data)
    } catch (e){
        res.status(400).send(e)
    }
};

controller.updateClient = async (req,res)=>{
    try{
        await Client.findByIdAndUpdate(req.params.id,{
            $set:{
                nome: req.body.nome,
                cpf: req.body.cpf,
                email: req.body.email,
                senha: req.body.senha,
                tel: req.body.tel,
                nasc: req.body.nasc,
                cep: req.body.cep,
                endereco: req.body.endereco,
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

controller.deleteClient = async (req,res)=>{
    try{
        await Client
            //.findOneAndRemove({cpf: req.params.cpf}); // Delete by id
            .findByIdAndRemove(req.params.id);
        res.status(200).send({
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
