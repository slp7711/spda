const TipoSPDA = () => {

    //Tipo de SPDA existente na estrutura ou se não existe
    const nao_tem_spda = "Estrutura não protegida por SPDA";
    const spda_tipo_IV = "Estrutura protegida por SPDA classe IV";
    const spda_tipo_III = "Estrutura protegida por SPDA classe III";
    const spda_tipo_II = "Estrutura protegida por SPDA classe II";
    const spda_tipo_I = "Estrutura protegida por SPDA classe I";
    const spda_tipo_VI = "Estrutura com subsistema de captação conforme SPDA classe I e uma estrutura metálica contínua ou de concreto armado atuando como um subsistema de descida natural";
    const spda_tipo_VII = "Estrutura com cobertura metálica e um subsistema de captação, possivelmente incluindo componentes naturais, com proteção completa de qualquer instalação na cobertura contra descargas atmosféricas diretas e uma estrutura metálica contínua ou de concreto armado atuando como um subsistema de descidas natural";
    


    return (
        
        <div>
            <h4 className="parametro">Existência e tipo de SPDA na estrutura - P<sub>B</sub> Tabela B.2 Pág. 41-53</h4>
            <div>
                <input 
                type="radio" 
                name="tipoSPDA" 
                id="nao_tem_spda"
                value={nao_tem_spda}/>
                <label 
                for="nao_tem_spda">
                {nao_tem_spda}</label>
            </div>
            <div>
                <input 
                type="radio" 
                name="tipoSPDA" 
                id="spda_tipo_IV"
                value={spda_tipo_IV}/>
                <label 
                for="spda_tipo_IV">
                {spda_tipo_IV}</label>
            </div>
            <div>
                <input 
                type="radio" 
                name="tipoSPDA" 
                id="spda_tipo_III"
                value={spda_tipo_III}/>
                <label 
                for="spda_tipo_III">
                {spda_tipo_III}</label>
            </div>
            <div>
                <input 
                type="radio" 
                name="tipoSPDA" 
                id="spda_tipo_II"
                value={spda_tipo_II}/>
                <label 
                for="spda_tipo_II">
                {spda_tipo_II}</label>
            </div>
            <div>
                <input 
                type="radio" 
                name="tipoSPDA" 
                id="spda_tipo_I"
                value={spda_tipo_I}/>
                <label 
                for="spda_tipo_I">
                {spda_tipo_I}</label>
            </div>
            <div>
                <input 
                type="radio" 
                name="tipoSPDA" 
                id="spda_tipo_VI"
                value={spda_tipo_VI}/>
                <label 
                for="spda_tipo_VI">
                {spda_tipo_VI}</label>
            </div>
            <div>
                <input 
                type="radio" 
                name="tipoSPDA" 
                id="spda_tipo_VII"
                value={spda_tipo_VII}/>
                <label 
                for="spda_tipo_VII">
                {spda_tipo_VII}</label>
            </div>
        </div>
    );
}
 
export default TipoSPDA;