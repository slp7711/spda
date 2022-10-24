const PessoasNaEstrutura = () => {
    return (
        <div>
            <h4 className="parametro">Número de pessoas na estrutura - n<sub>t</sub></h4>
            <div>
                <p><b>Idenficiar e informar este valor.</b></p>
                <label for="numero_pessoas_na_estrutura">Número anual de descargas atmosféricas no local</label>
                <input type="number" name="numero_pessoas_na_estrutura"/>
            </div>
        </div>
    );
}
 
export default PessoasNaEstrutura;