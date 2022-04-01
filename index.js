const url = 'https://sheetdb.io/api/v1/isumaaox3cavy/'; //Você pode testar sua API aqui

// =================================================================================================

// Dados
const data = {
  nome: 'R2D2',
  preco: 500,
  categoria: 'Starwars',
  imagem_url:
    'https://http2.mlstatic.com/D_NQ_NP_870576-MLB31201160562_062019-O.jpg',
};

// =================================================================================================

// Método GET
async function pegaProduto(url) {
  const resp = await fetch(url);
  const jsonBody = await resp.json();
  return montaHTML(jsonBody);
}
pegaProduto(url);

// =================================================================================================

// Método POST
async function adicionaProduto(url, data) {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
// adicionaProduto(url, data);

// =================================================================================================

// Método DELETE
async function deletaProduto(url, coluna, valor) {
  await fetch(`${url}/${coluna}/${valor}`, {
    method: 'DELETE',
  });
}

// deletaProduto(url, 'preco', 546);

// =================================================================================================

//Função que monta o HTML da página
function montaHTML(dadosDB) {
  dadosDB.map((produto) => {
    // captura a tag ul do html
    const listaDeProdutos = document.querySelector('#lista');

    // Cria os elementos
    const item = document.createElement('li');
    const titulo = document.createElement('p');
    const preco = document.createElement('span');
    const categoria = document.createElement('h2');
    const img = document.createElement('img');

    //Adicona classes css aos elementos criados
    item.classList.add('produtos__card');
    img.classList.add('produtos__img');
    titulo.classList.add('produtos__description');
    preco.classList.add('produtos__valor');
    categoria.classList.add('produtos__valor');

    // Preenche os elementos html com os dados da API
    titulo.innerHTML = `${produto.nome}`;
    preco.innerHTML = `${produto.preco}`;
    categoria.innerHTML = `${produto.categoria}`;
    img.src = `${produto.imagem_url}`;

    // Monta o HTML para cada Item
    listaDeProdutos.appendChild(item);
    item.appendChild(img);
    item.appendChild(categoria);
    item.appendChild(titulo);
    item.appendChild(preco);
  });
}
