import BlindagemEspacialExterna from '../components/BlindagemEspacialExterna';
import Dimensoes from '../components/Dimensoes';
import LigacaoEquipotencial from '../components/LigacaoEquipotencial';
import LocalizacaoEstrutura from '../components/LocalizacaoEstrutura';
import NumeroDescargasAtmosfericas from '../components/NumeroDescargasAtmosfericas';
import PerdasRelevantesEstrutura from '../components/PerdasRelevantesEstrutura';
import PessoasNaEstrutura from '../components/PessoasNaEstrutura';
import TipoSPDA from '../components/TipoSPDA';


const CaracteristicasEstruturasMeioAmbiente = () => {

    return ( 
        <div>
            <h2>Aqui são descritas as caracteristicas da estrutura e do meio ambiente</h2>
            <form action="" method="post" encType="multupart/form-data">
                <div>
                    <PerdasRelevantesEstrutura />
                    <NumeroDescargasAtmosfericas />
                    <Dimensoes />
                    <LocalizacaoEstrutura />
                    <TipoSPDA />
                    <LigacaoEquipotencial />
                    <BlindagemEspacialExterna />
                    <PessoasNaEstrutura />
                </div>
            </form>
        </div>
    );
}
 
export default CaracteristicasEstruturasMeioAmbiente;