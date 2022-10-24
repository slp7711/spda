const LigacaoEquipotencial = () => {

    //Tipos de DPS na equipotencialização
    const sem_DPS = "Sem DPS";
    const DPS_tipo_III_ou_IV = "DPS tipo III ou IV";
    const DPS_tipo_II = "DPS tipo II";
    const DPS_tipo_I = "DPS tipo I";
    const nota4 = "NOTA 4 Os valores de PEB podem ser reduzidos para DPS que tenham melhores características de proteção (correntes nominais maiores IN , níveis de proteção menores UP etc.) comparados com os requisitos definidos para NP I nos locais relevantes da instalação (ver ABNT NBR 5419-1:2015, Tabela A.3, para informações da probabilidade de correntes de descargas atmosféricas, e ABNT NBR 5419-1:2015, Anexo E, e ABNT NBR 5419-4, Anexo D, para divisão da corrente da descarga atmosférica). Os mesmos anexos podem ser utilizados para DPS que tenha probabilidades maiores que PEB.";


    return (
        <div>
            <h4 className="parametro">Ligação equipotêncial com DPS - P<sub>EB</sub> Tabela B.7 Pág. 46-58</h4>
            <div>
                <input 
                type="radio" 
                name="tipoDPS" 
                id="sem_DPS"
                value={sem_DPS}/>
                <label 
                for="sem_DPS">
                {sem_DPS}</label>
            </div>
            <div>
                <input 
                type="radio" 
                name="tipoDPS" 
                id="DPS_tipo_III_ou_IV"
                value={DPS_tipo_III_ou_IV}/>
                <label 
                for="DPS_tipo_III_ou_IV">
                {DPS_tipo_III_ou_IV}</label>
            </div>
            <div>
                <input 
                type="radio" 
                name="tipoDPS" 
                id="DPS_tipo_II"
                value={DPS_tipo_II}/>
                <label 
                for="DPS_tipo_II">
                {DPS_tipo_II}</label>
            </div>
            <div>
                <input 
                type="radio" 
                name="tipoDPS" 
                id="DPS_tipo_I"
                value={DPS_tipo_I}/>
                <label 
                for="DPS_tipo_I">
                {DPS_tipo_I}</label>
            </div>
            <div>
                <input 
                type="radio" 
                name="tipoDPS" 
                id="nota4"
                value={nota4}/>
                <label 
                for="nota4">
                {nota4}</label>
            </div>
        </div>
    );
}
 
export default LigacaoEquipotencial;