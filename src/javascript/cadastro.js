let forms = document.getElementsByClassName("secao");

const app = new Vue({
    el: ".container",
    data:{
        email:"",
        conf_email:"",
        password:"",
        conf_password:"",
        erro: [0,0,0],
    },

    methods:{
        verificar(e){
            if(this.password != this.conf_password){
                document.getElementById("v_senha").innerText = "Senha não corresponde"
                this.erro[0]=1;
            } else {
                document.getElementById("v_senha").innerText = "";
                this.erro[0]=0;
            }

            if(this.email != this.conf_email){
                document.getElementById("v_email").innerText = "Email não corresponde"
                this.erro[1]=1;
            } else {
                document.getElementById("v_email").innerText = "";
                this.erro[1]=0;
            }

            if(this.erro[0]==1 || this.erro[1]==1){
                e.preventDefault();
                alert("Informação inválida");
            } else {
                alert("Cadastro concluído");
            }
        }
    }
})



