const NumeroDescargasAtmosfericas = () => {
    return (
        <div>
            <h4 className="parametro">Número de descargas atmosféricas por km<sup>2</sup> por ano - N<sub>G</sub> - Pág. 31-43</h4>
            <div>
                <p>Figura F.6 - Densidade de descargas atmosféricas - Mapa da região sul descargas atmosféricas/km2 /ano - pág.102-114 - <b>Idenficiar e informar este valor.</b></p>
                <label for="numero_descargas_atmosfericas">Número anual de descargas atmosféricas no local</label>
                <input type="number" name="numero_descargas_atmosfericas"/>
            </div>
        </div>
    );
}
 
export default NumeroDescargasAtmosfericas;