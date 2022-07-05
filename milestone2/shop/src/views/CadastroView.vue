<template>
    <div id="titulo_cadastro">
				<h1>Cadastro</h1>
				<h2>Home > Cadastro</h2>
				<hr/>
			</div>
			
			
			<div id="corpo">
				<p id="descricao" > Realize de forma rápida e fácil o seu cadastro abaixo<br>
					<span id="aviso">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						Campos marcados com * são obrigatórios </span> 
				</p>
			
				<form id="formulario">
					<span class="titulo">*CPF</span>
						<br>
						<input class="secao" type="text" name="cpf" required placeholder = "___.___.___-__" v-model="cpf"> <br> 
						<br>
					<p id="v_cpf" class="form_erro"></p>
				
					<span class="titulo">*Nome Completo</span>
						<br>
						<input class="secao" type="text" name="nome" v-model="nome"><br>
						<br>
					<p id="v_nome" class="form_erro"></p>		

					<span class="titulo">*Celular</span>
						<br>
						<input class="secao" type="tel" name="celular" placeholder="(11) 1234-5678" v-model="celular"><br>
						<br>
					<p id="v_celular" class="form_erro"></p>
						
					<span class="titulo">*Data de Nascimento</span>
						<br>
						<input class="secao" type="date" name="data" v-model="nasc"><br>
						<br>
					<p id="v_nasc" class="form_erro"></p>
					
					<span class="titulo">Sexo</span>
						<br>
						<input class="secao" name="sexo" list="lista-sexo" autocomplete="off">
						<datalist id="lista-sexo">
							<option value="Masculino"> </option>
							<option value="Feminino"> </option>
							<option value="Outros"> </option>
						</datalist>
						<br><br>

					<span class="titulo">*CEP</span>
						<br>
						<input class="secao" type="text" name="cep" placeholder = "_____-___" required v-model="cep"> <br> 
						<br>
					<p id="v_cep" class="form_erro"></p>
					
					<span class="titulo">*Número + Complemento</span>
						<br>
						<input class="secao1" type="number" name="numero" v-model="num" > <input class="secao2" type="number" name="comp"> <br>
						<br>
					<p id="v_num" class="form_erro"></p>

					<span class="titulo">*Email</span>
						<br>
						<input class="secao" type="email" name="email" autocomplete="on" placeholder="cliente@email.com" v-model="email"><br>
						<br>
					<p id="e_email" class="form_erro"></p>

					<span class="titulo">*Confirmar o Email</span>
						<br>
						<input class="secao" type="email" name="confirmaEmail" autocomplete="off" placeholder="cliente@email.com" v-model="conf_email"><br>
						<br>
					<p id="v_email" class="form_erro"></p>

					<span class="titulo">*Criar senha (min:8 caracteres)</span>
						<br>
						<input class="secao" type="password" name="senha" maxlength="26" v-model="password"><br>
						<br>
					<p id="e_senha" class="form_erro"></p>

					<span class="titulo">*Confirmar a Senha</span>
						<br>
						<input class="secao" type="password" name="confirmaSenha" maxlength="26" v-model="conf_password"><br>
						<br>
					<p id="v_senha" class="form_erro"></p>
						
						<p id="termos"> Ao cadastrar-se, você aceita nossos <br> <a id="termos1" href="" target="_blank"> Termos de Uso e Política de Privacidade.</a> </p>
					
					<button class="enviar" type="submit" name="btn-enviar" @click="verificar"> Finalizar Cadastro </button>
					
				</form>
				
			</div>
</template>

<script>
	import clients from "../data/clients.json";
	let ano = new Date().getFullYear();


    export default {
        name: 'CadastroView',
		data(){
			return{
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
			}
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
				if(this.email == "" ){
					document.getElementById("e_email").innerText = "Email inválido"
					this.erro[2] = 1;
				} else {
					document.getElementById("e_email").innerText = "";
					this.erro[2] = 0;
				}

				//verificar se o cpf ta no formato adequado
				if(this.cpf==""){
					document.getElementById("v_cpf").innerText = "CPF inválido"
					this.erro[3] = 1;
				} else{
					document.getElementById("v_cpf").innerText = "";
					this.erro[3] = 0;
				}

				//verificar se o cep ta no formato adequado
				if(this.cep==""){
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
				if(this.celular == ""){
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

				} else if(ano - parseInt(this.nasc.substring(5,0)) < 14){
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
					let erroCPF;
					let erroEmail;

					//verificar se email e cpf estão dispniveis
					for (let i = 0; i < clients.length; i++) {
						erroEmail = (this.email == clients[i]['email']); erroCPF = (this.cpf == clients[i]['cpf']);
						if(erroCPF || erroEmail){break;}

					}

					if(erroEmail){
						document.getElementById("e_email").innerText = "Email já pertence a uma conta";
					} else{
						document.getElementById("e_email").innerText = ""
					}

					if(erroCPF){
						document.getElementById("v_cpf").innerText = "CPF já pertence a uma conta"
					} else{
						document.getElementById("v_cpf").innerText = ""
					}

					if(erroCPF || erroEmail){
						e.preventDefault();
						alert("Informação inválida");
						return;
					}
					
					alert("Cadastro concluído");
					this.$router.push('/')
				}
        }
		}
    }

</script>


<style scoped>
    @import '/src/assets/css/cadastro.css';
</style>
