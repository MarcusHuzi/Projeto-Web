let forms = document.getElementsByClassName("secao");
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let cpfFormat = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
let cepFormat = /^\d{5}\-\d{3}$/
let celularFormat = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/

const app = new Vue({
    el: ".container",
    data:{
        email:"",
        conf_email:"",
        password:"",
        conf_password:"",
        cpf:"",
        cep:"",
        num: null,
        celular:"",
        nome:"",
        nasc:"",
        erro: [0,0,0,0,0,0,0,0,0,0] //vetor para marcar erros
    },

    methods:{
        verificar(e){

            //verificar se senhas são iguais
            if(this.password != this.conf_password){
                document.getElementById("v_senha").innerText = "Senha não corresponde"
                this.erro[0]=1;
            } else {
                document.getElementById("v_senha").innerText = "";
                this.erro[0]=0;
            }

            //verificar se emails são iguais
            if(this.email != this.conf_email){
                document.getElementById("v_email").innerText = "Email não corresponde"
                this.erro[1]=1;
            } else {
                document.getElementById("v_email").innerText = "";
                this.erro[1]=0;
            }
            
            //verificar se o email esta no formato adequado
            if(this.email == "" || !this.email.match(mailFormat)){
                document.getElementById("e_email").innerText = "Email inválido"
                this.erro[2] = 1;
            } else {
                document.getElementById("e_email").innerText = "";
                this.erro[2] = 0;
            }

            //verificar se o cpf ta no formato adequado
            if(this.cpf=="" || !this.cpf.match(cpfFormat)){
                document.getElementById("v_cpf").innerText = "CPF inválido"
                this.erro[3] = 1;
            } else{
                document.getElementById("v_cpf").innerText = "";
                this.erro[3] = 0;
            }

             //verificar se o cep ta no formato adequado
             if(this.cep=="" || !this.cep.match(cepFormat)){
                document.getElementById("v_cep").innerText = "CEP inválido"
                this.erro[4] = 1;
            } else{
                document.getElementById("v_cep").innerText = "";
                this.erro[4] = 0;
            }
            
            //verificar se senha foi inserida corretamente
            if(this.password.length < 8){
                document.getElementById("e_senha").innerText = "Senha inválida"
                this.erro[5] = 1;
            } else{
                document.getElementById("e_senha").innerText = "";
                this.erro[5] = 0;
            }

            //verificar se nome foi inserido corretamente
            if(this.nome == ""){
                document.getElementById("v_nome").innerText = "Nome inválida"
                this.erro[6] = 1;
            } else{
                document.getElementById("v_nome").innerText = "";
                this.erro[6] = 0;
            }
            
            //verificar se celular foi inserido corretamente
            if(this.celular == "" || !this.celular.match(celularFormat)){
                document.getElementById("v_celular").innerText = "Celular inválido"
                this.erro[7] = 1;
            } else{
                document.getElementById("v_celular").innerText = "";
                this.erro[7] = 0;
            }

            //verificar se numero do end foi inserido corretamente
            if(this.num == null){
                document.getElementById("v_num").innerText = "Número inválido"
                this.erro[8] = 1;
            } else{
                document.getElementById("v_num").innerText = "";
                this.erro[8] = 0;
            }

            //verificar se a data de nascimento foi inserida corretamente
            if(this.nasc == ""){
                document.getElementById("v_nasc").innerText = "Data inválida"
                this.erro[9] = 1;

            } else if(parseInt(this.nasc.substring(5,0)) > 2008){
                document.getElementById("v_nasc").innerText = "Data inválida"
                this.erro[9] = 1;
    
            }else{
                document.getElementById("v_nasc").innerText = "";
                this.erro[9] = 0;
            }

            //verificar se houve algum erro nos campos
            if(this.erro[0]==1 || this.erro[1]==1 || this.erro[2]==1 || this.erro[3]==1 || this.erro[4]==1 || this.erro[5]==1
                || this.erro[6]==1 || this.erro[7]==1 || this.erro[8]==1 || this.erro[9]==1){

                e.preventDefault();
                alert("Informação inválida");
            } else {
                alert("Cadastro concluído");
            }
        }
    }
})



