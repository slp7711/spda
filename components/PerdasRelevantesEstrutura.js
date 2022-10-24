const PerdasRelevantesEstrutura = () => {
    return (
        <div>
            <h4 className="parametro">Perdas relevantes para a estrutura - Pág. 14-26</h4>
            <div>
                <p>Perda de Vida Humana - incluindo ferimentos permanentes - L1</p>
                <div>
                    <input 
                    type="radio" 
                    name="perda_vida_humana" 
                    id="relevante" 
                    value="Relevante"/>
                    <label for="relevante">Relevante</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    name="perda_vida_humana" 
                    id="nao_relevante" 
                    value="Não relevante"/>
                    <label for="nao_relevante">Não relevante</label>
                </div>
            </div>
            <div>
                <p>Perda de Serviço ao Público - L2</p>
                <div>
                    <input 
                    type="radio" 
                    name="perda_servico_publico" 
                    id="relevante" 
                    value="Relevante"/>
                    <label for="relevante">Relevante</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    name="perda_servico_publico" 
                    id="nao_relevante" 
                    value="Não relevante"/>
                    <label for="nao_relevante">Não relevante</label>
                </div>
            </div>
            <div>
                <p>Perda de Patrimônio Cultural - L3</p>
                <div>
                    <input type="radio" 
                    name="perda_patrimonio_cultural" 
                    id="relevante" 
                    value="Relevante"/>
                    <label for="relevante">Relevante</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    name="perda_patrimonio_cultural" 
                    id="nao_relevante" 
                    value="Não relevante"/>
                    <label for="nao_relevante">Não relevante</label>
                </div>
            </div>
            <div>
                <p>Perda de Valores Econômicos - estrutura, conteúdo e perdas de atividades - L4</p>
                <div>
                    <input 
                    type="radio" 
                    name="perda_valores_economicos" 
                    id="relevante" 
                    value="Relevante"/>
                    <label for="relevante">Relevante</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    name="perda_valores_economicos" 
                    id="nao_relevante" 
                    value="Não relevante"/>
                    <label for="nao_relevante">Não relevante</label>
                </div>
            </div>
        </div>
    );
}
 
export default PerdasRelevantesEstrutura;