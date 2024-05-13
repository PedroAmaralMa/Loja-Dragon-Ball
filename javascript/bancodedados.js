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
        {"id": 1, "nome": "goku", "preco": 69.99, "descricao": "actionfigure"},
        {"id": 2, "nome": "majinboo", "preco": 19.99,"descricao": "actionfigure"},
        {"id": 3, "nome": "freeza", "preco": 39.99,"descricao": "actionfigure"},
        {"id": 4, "nome": "gohan", "preco": 49.99,"descricao": "actionfigure"},
        {"id": 5, "nome": "vegeta", "preco": 69.99,"descricao": "actionfigure"},
        {"id": 6, "nome": "piccolo", "preco": 29.99,"descricao": "actionfigure"}
    ]

    let x = JSON.stringify(dadosprod)
    localStorage.setItem("prod", x)
    return dadosprod
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

let carrinho = []

function esta_no_carrinho(id){
    for(let i = 0; i < carrinho.length; i++){
        let idcar = carrinho[i].id
        if (idcar == id ){
            alert("Produto já no carrinho")
            return false
        }
    }
    return true


}

function adicionarcarrinho(valor){
    let produtos = JSON.parse(localStorage.getItem("prod"))
    
        for(let i = 0; produtos.length > i; i++){
            let idcar = produtos[i].id
            let nomecar = produtos[i].nome
            let precocar = produtos[i].preco
            if (idcar == valor && esta_no_carrinho(valor)){
                carrinho.push({"id": idcar, "nome": nomecar, "preco": precocar, "totaluni": precocar })
                alert("Produto adicionado ao carrinho")
                
                

            }
        }
    document.querySelector("#itens").innerHTML = carrinho.length;
    localStorage.setItem("car", JSON.stringify(carrinho));
    

    
    
    
    
}

function calcularunicarrinho(id){
    let car = JSON.parse(localStorage.getItem("car"))
    
    for(let i = 0; car.length > i; i++){
        if (car[i].id == id){
            let preco = document.querySelector(`#precodinamico${car[i].nome}`)
            let quan = document.querySelector(`#quan${car[i].nome}`).value;
            car[i]["totaluni"] = quan * car[i].preco;
            preco.innerHTML = car[i]["totaluni"] = quan * car[i].preco;
            break;


        }
    }
    localStorage.setItem("car", JSON.stringify(car));
    
    
    
        
        
        
    localStorage.setItem("car", JSON.stringify(car))
}

function exibircarrinho(){
    let car = JSON.parse(localStorage.getItem("car"));
    let ul = document.querySelector("#cart");
    let totalexibi = document.querySelector("#total");
    let total = 0

    ul.innerHTML = "";
    
    for(let i = 0; car.length > i; i++){
        let li = document.createElement('li');
        li.id = `li${car[i].nome}`
        li.innerHTML = 
        `
        <b>Produto:</b> ${car[i].nome} <b>Preço unidade:</b> ${car[i].preco.toFixed(2)} 
        <b id="precodinamico${car[i].nome}">Preço: ${car[i].totaluni.toFixed(2)} 
        Quantidade: <input type="number"  id="quan${car[i].nome}" class="quantidadeitens" onchange="calcularunicarrinho(${car[i].id}); exibircarrinho()"> 
        <button type="button" class="btn btn-outline-danger my-2 my-sm-0" id="remover" onclick="removercarinho(${car[i].id}); exibircarrinho()">Remover carrinho</button>
        `;
        ul.appendChild(li);
        

    }
    for(let i= 0; car.length > i; i++){
        total += car[i].totaluni
    }
    totalexibi.innerHTML = `<b>Total:</b> R$ ${total.toFixed(2)}`
    
    

}


function removercarinho(id){
    let car = JSON.parse(localStorage.getItem("car"));
    let ul = document.querySelector("#cart")
    for(let i = 0; car.length > i; i++){
        if(car[i].id === id){
            let li = document.getElementById(`li${car[i].nome}`);
            ul.removeChild(li);
            car.splice(i, 1);
            localStorage.setItem("car", JSON.stringify(car))
            break;


        }
    

    }
}

function pix(){
    let total = document.querySelector("#total").textContent
    alert(`${total}`)
    window.prompt('Insira a Chave Pix')
    alert("CAIU NO URUBU DO PIX")
}

function cartao(){
    let total = document.querySelector("#total").textContent
    alert(`${total}`)
    window.prompt('Insira a senha de seu cartão')
    alert("Cartão Clonado")
}