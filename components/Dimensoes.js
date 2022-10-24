const Dimensoes = () => {
    return (
        <div>
            <h4 className="parametro">Dimensões da estrutura</h4>
            <div>
                <label for="comprimento_estrutura">Comprimento</label>
                <input type="number" name="comprimento_estrutura" id="comprimento_estrutura"/>
            </div>
            <div>
                <label for="largura_estrutura">Largura</label>
                <input type="number" name="largura_estrutura" id="largura_estrutura"/>
            </div>
            <div>
                <label for="altura_estrutura">Altura</label>
                <input type="number" name="altura_estrutura" id="altura_estrutura"/>
            </div>
            <h4 className="parametro">Dimensões da estrutura adjacente</h4>
            <div>
                <label for="comprimento_estrutura_adjacente">Comprimento</label>
                <input type="number" name="comprimento_estrutura_adjacente" id="comprimento_estrutura_adjacente"/>
            </div>
            <div>
                <label for="largura_estrutura_adjacente">Largura</label>
                <input type="number" name="largura_estrutura_adjacente" id="largura_estrutura_adjacente"/>
            </div>
            <div>
                <label for="altura_estrutura_adjacente">Altura</label>
                <input type="number" name="altura_estrutura_adjacente" id="altura_estrutura_adjacente"/>
            </div>
        </div>
    );
}
 
export default Dimensoes;