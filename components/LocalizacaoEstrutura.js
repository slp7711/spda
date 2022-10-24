const LocalizacaoEstrutura = () => {

        //Fatores de localização de estrutura
        const localizacao_estrutura_opcao_1 = "Estrutura cercada por objetos mais altos";
        const localizacao_estrutura_opcao_2 = "Estrutura cercada por objetos da mesma altura ou mais baixos";
        const localizacao_estrutura_opcao_3 = "Estrutura isolada: nenhum outro objeto nas vizinhanças";
        const localizacao_estrutura_opcao_4 = "Estrutura isolada no topo de uma colina ou monte";

    return (
        <div>
            <h4 className="parametro">Fator de localização da estrutura - C<sub>D</sub> Tabela A.1 Pág. 36-48</h4>
            <div>
                <input 
                type="radio" 
                name="localizacao_estrutura" 
                id="estrutura_cercada_por_objetos_mais_altos"
                value={localizacao_estrutura_opcao_1}/>
                <label 
                for="estrutura_cercada_por_objetos_mais_altos">
                {localizacao_estrutura_opcao_1}</label>
            </div>
            <div>
                <input 
                type="radio" 
                name="localizacao_estrutura" id="estrutura_cercada_por_objetos_mesma_altura-ou_mais_baixos"
                value={localizacao_estrutura_opcao_2}/>
                <label 
                for="estrutura_cercada_por_objetos_mesma_altura-ou_mais_baixos">
                {localizacao_estrutura_opcao_2}</label>
            </div>
            <div>
                <input 
                type="radio" 
                name="localizacao_estrutura" 
                id="estrutura_isolada_nenhum_objeto_vizinhancas"
                value={localizacao_estrutura_opcao_3}/>
                <label 
                for="estrutura_isolada_nenhum_objeto_vizinhancas">
                {localizacao_estrutura_opcao_3}</label>
            </div>
            <div>
                <input 
                type="radio" 
                name="localizacao_estrutura" 
                id="estrutura_isolada_topo_colina_ou_monte"
                value={localizacao_estrutura_opcao_4}/>
                <label 
                for="estrutura_isolada_topo_colina_ou_monte">
                {localizacao_estrutura_opcao_4}</label>
            </div>
            <h4 className="parametro">Fator de localização da estrutura Adjacente- C<sub>DJ</sub> Tabela A.1 Pág. 36-48</h4>
            <div>
                <input 
                type="radio" 
                name="localizacao_estrutura_adjacente" 
                id="estrutura_cercada_por_objetos_mais_altos"
                value={localizacao_estrutura_opcao_1}/>
                <label 
                for="estrutura_cercada_por_objetos_mais_altos">
                {localizacao_estrutura_opcao_1}</label>
            </div>
            <div>
                <input 
                type="radio" 
                name="localizacao_estrutura_adjacente" 
                id="estrutura_cercada_por_objetos_mesma_altura_ou_mais_baixos"
                value={localizacao_estrutura_opcao_2}/>
                <label 
                for="estrutura_cercada_por_objetos_mesma_altura_ou_mais_baixos">
                {localizacao_estrutura_opcao_2}</label>
            </div>
            <div>
                <input 
                type="radio" 
                name="localizacao_estrutura_adjacente" 
                id="estrutura_isolada_nenhum_objeto_vizinhancas"
                value={localizacao_estrutura_opcao_3}/>
                <label 
                for="estrutura_isolada_nenhum_objeto_vizinhancas">
                {localizacao_estrutura_opcao_3}</label>
            </div>
            <div>
                <input 
                type="radio" 
                name="localizacao_estrutura-Adjacente" 
                id="estrutura_isolada_topo_colina_ou_monte"
                value={localizacao_estrutura_opcao_4}/>
                <label 
                for="estrutura_isolada_topo_colina_ou_monte">
                {localizacao_estrutura_opcao_4}</label>
            </div>
        </div>
    );
}
 
export default LocalizacaoEstrutura;