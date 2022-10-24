const BlindagemEspacialExterna = () => {

    const blindagemExterna = "Nenhuma blindagem - Nota 4 - Os valores máximos de KS1 e KS2 são limitados a 1";

    return (
        <div>
            <h4 className="parametro">Blindagem Espacial Externa - K<sub>S1</sub>Pág. 44-56</h4>
            <div>
                <input 
                type="radio" 
                name="blindagemExterna" 
                id="blindagemExterna"
                value={blindagemExterna}/>
                <label 
                for="blindagemExterna">
                {blindagemExterna}</label>
            </div>
        </div>
    );
}
 
export default BlindagemEspacialExterna;