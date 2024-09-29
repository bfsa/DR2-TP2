const Ex04 = () => {
    return (
      <div className="containerFormulario">
        <form className="formularioProduto">

          <div className="caixaFormulario">
            <label for="produto">Nome do Produto:</label>
            <input type="text" id="produto" name="produto" />
          </div>
  
          <div className="caixaFormulario">
            <label for="precoVenda">Preço de Venda:</label>
            <input type="number" id="precoVenda" name="precoVenda" />
          </div>
  
          <div className="caixaFormulario">
            <label for="precoCusto">Preço de Custo:</label>
            <input type="number" id="precoCusto" name="precoCusto" />
          </div>
  
          <div className="caixaFormulario">
            <label for="categoria">Categoria:</label>
            <select id="categoria" name="categoria">
              <option value="categoria1">Categoria 1</option>
              <option value="categoria2">Categoria 2</option>
              <option value="categoria3">Categoria 3</option>
            </select>
          </div>
  
          <div className="caixaFormulario">
            <label for="fabricante">Fabricante:</label>
            <select id="fabricante" name="fabricante">
              <option value="fabricante1">Fabricante 1</option>
              <option value="fabricante2">Fabricante 2</option>
              <option value="fabricante3">Fabricante 3</option>
            </select>
          </div>
  
          <div className="caixaFormulario">
            <label for="descricao">Descrição:</label>
            <textarea id="descricao" name="descricao" rows="4"></textarea>
          </div>
  
          <div className="caixaFormulario">
            <button type="submit" className="submit-button">Enviar</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default Ex04;