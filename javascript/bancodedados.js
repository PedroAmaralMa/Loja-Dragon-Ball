function local(){
    let dados = [
        {"id": 1, "nome": "Squirtle Boladão", "email": "pedroamaral.2005.ga@gmail.com", "senha": 6969},
        {"id": 2, "nome": "Pedroso", "email": "pedrosodograu@gmail.com", "senha": 4185},
        {"id": 3, "nome": "Einstein", "email": "einsteinfatec@gmail.com", "senha": 6547}

    ]

    
    
    let n = JSON.stringify(dados);
    localStorage.setItem("tds",n);
    tabela();
    return dados
    
}
function localprod(){
    let dadosprod = [
        {"id": 1, "nome": "gokuboneco", "preco": 69.99, "descricao": "actionfigure"},
        {"id": 2, "nome": "majibooboneco", "preco": 19.99,"descricao": "actionfigure"},
        {"id": 3, "nome": "frezzaboneco", "preco": 39.99,"descricao": "actionfigure"},
        {"id": 4, "nome": "gohanboneco", "preco": 49.99,"descricao": "actionfigure"},
        {"id": 5, "nome": "vegetaboneco", "preco": 69.99,"descricao": "actionfigure"},
        {"id": 6, "nome": "piccoloboneco", "preco": 29.99,"descricao": "actionfigure"}
    ]

    let x = JSON.stringify(dadosprod)
    localStorage.setItem("prod", x)
    tabelaprod();
    return dadosprod
}
function tabelaprod(){
    let dados = JSON.parse(localStorage.getItem("prod"))
    if (dados){
        for (let i = 0; dados.length > i; i++){
            document.querySelector("#produtonome").innerHTML = dados[i].nome
            document.querySelector("#descricaoproduto").innerHTML = dados[i].descricao
            document.querySelector("#preco").innerHTML = dados[i].preco
        }
    }   else {
    localprod();
    }
}
function logon(){
    const dados = JSON.parse(localStorage.getItem("tds"))
    let nome = document.querySelector("#nome").value
    let senha = document.querySelector("#palavrachave").value
    let email = document.querySelector("#gmail").value

    for (let i = 0; dados.length > i; i++) {
        if (dados[i] == null){
            // alert("Verificando")
            // alert("encontrou: " + dados[i].nome + ":" + i)
        }
        else {
            if (nome == dados[i].nome && senha == dados[i].senha && email == dados[i].email){
                console.log("conectando")
                let n = JSON.stringify(dados[i]);
                sessionStorage.setItem("user", n)
                alert("Bem vindo " + logado())
                let url = "index.html"
                window.close()
                window.open(url)

                break
            }
        }
    }

}

function logado(){
    let dados = JSON.parse(sessionStorage.getItem("user"))
    let nome = dados.nome
    document.querySelector("#nome").innerHTML = "Bem vindo " + nome
    return nome

}


function logaout(){
    sessionStorage.removeItem("user")
    alert("Deslogado!")
    let url = "index.html"
    window.close()
    window.open(url) 
    
    
}

function adicionar(){
    var ClienteArray = JSON.parse(localStorage.getItem("tds"))
    let nome = document.querySelector("#nome").value
    let senha = document.querySelector("#palavrachave").value
    let email = document.querySelector("#gmail").value
    let user = {id: Date.now(), nome: nome, email: email, senha: senha}
    ClienteArray.push(user)
    localStorage.setItem("tds", JSON.stringify(ClienteArray))
    alert("Cadastrado com sucesso. agora faça o login")
    let url = "login.html"
    window.close()
    window.open(url)
    
    
    
}

function buscar() {
    var dados = JSON.parse(localStorage.getItem("tds"));
    let nome = document.querySelector("#nome").value

    for (let i = 0; dados.length > i; i++) {
        if (dados[i] == null && dados[i] != nome) {
            // alert("Verificando")
        } else{
            if (nome == dados[i].nome) {
                // alert("encontrou: " + dados[i].nome + ":" + i)
                document.querySelector("#nome").value = dados[i].nome
                document.querySelector("#gmail").value = dados[i].email
                document.querySelector("#palavrachave").value = dados[i].senha
                break
            }
        }
    }
}

function tabela(){
    var dados = JSON.parse(localStorage.getItem("tds"));
    if (dados){
        for (let i = 0; dados.length > i; i++){
            document.querySelector("#nome").innerHTML = dados[i].nome
            document.querySelector("#gmail").innerHTML = dados[i].email
            document.querySelector("#palavrachave").innerHTML = dados[i].senha
        }
    } else {
        local();
    }

}

function atualizar(){
    var dados = JSON.parse(localStorage.getItem("tds"))
    localStorage.removeItem("tds")
    let nome = document.querySelector("#nome").value
    let email = document.querySelector("#gmail").value
    let senha = document.querySelector("#palavrachave").value

    for (let i = 0; dados.length > i; i++){
        if (id == dados[i].id){
            let user = {id: id, nome: nome, email: email, senha: senha}
            dados[i] = user
            localStorage.setItem("tds", JSON.stringify(dados))
            alert("Atualizado!")
            break
        }
    }
}

function apagarItemVetor(){
    let senha = document.querySelector("#palavrachave").value
    let email = document.querySelector("#gmail").value
    let nome = document.querySelector("#nome").value
    var dados = JSON.parse(localStorage.getItem("tds"))
    localStorage.removeItem("tds")

    for (let i = 0; dados.length > i; i++){
        if (dados[i] == null){
            // alert("Verificando")
        } else{
            if (senha == dados[i].senha && nome == dados[i].nome && email == dados[i].email){
                delete dados[i]
                alert("Conta Deletada com sucesso!")
                let url = "loja.html"
                window.close()
                window.open(url)
                break;
            }
        }
    }
    localStorage.setItem("tds", JSON.stringify(dados))
}

function apagaTudo(){
    localStorage.removeItem("tds")
}

function limpar(){
    document.querySelector("#id").value = ""
    document.querySelector("#nome").value = ""
    document.querySelector("#palavrachave").value = ""
    document.querySelector("#gmail").value = ""
}

function voltar(){
    window.location.href = "loja.html"
}
