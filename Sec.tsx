import React from 'react';
import { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Empresa {
    nomePosto: string;
    tipoCarga: string;
    pino: string; 
    potenciaPosto: number;
    localizacaoPosto: string;

}
export function EmpresaTabela() {
    const [empresas, setEmpresas] = useState<Empresa[]>([]);
    const [nomePosto, setNomePosto] = useState('');
    const [tipoCarga, setTipoCarga] = useState('');
    const [pino, setPino] = useState('');
    const [potenciaPosto, setPotenciaPosto] = useState('');
    const [localizacaoPosto, setLocalizacaoPosto] = useState('');


    const adicionarEmpresa = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (nomePosto && tipoCarga && pino && potenciaPosto && localizacaoPosto) {
            setEmpresas([...empresas, { nomePosto, tipoCarga, pino, potenciaPosto: Number(potenciaPosto), localizacaoPosto }]);
            setNomePosto('');
            setTipoCarga('');
            setPino('');
            setPotenciaPosto('');
            setLocalizacaoPosto(''); 
        }
    };

    return (
        <div className="container mt-4">
            <h2>Adicionar Empresa</h2>
            <form onSubmit={adicionarEmpresa} className="mb-4">
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome do Posto</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        value={nomePosto}
                        onChange={(e) => setNomePosto(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="valor" className="form-label">Tipo de Carga</label>
                    <input
                        type="string"
                        className="form-control"
                        id="tipoCarga"
                        value={tipoCarga}
                        onChange={(e) => setTipoCarga(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="valor" className="form-label">Tipo de pino</label>
                    <input
                        type="string"
                        className="form-control"
                        id="pino"
                        value={pino}
                        onChange={(e) => setPino(e.target.value)}
                        required
                    />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="valor" className="form-label">Potencia de Carga</label>
                    <input
                        type="number"
                        className="form-control"
                        id="potencia"
                        value={potenciaPosto}
                        onChange={(e) => setPotenciaPosto(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="valor" className="form-label">Localização</label>
                    <input
                        type="string"
                        className="form-control"
                        id="localizacao"
                        value={localizacaoPosto}
                        onChange={(e) => setLocalizacaoPosto(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Adicionar</button>
            </form>

            <h2>Empresas Adicionadas</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nome da Empresa</th>
                        <th scope="col">Tipo de carga</th>
                        <th scope="col">Tipo de pino</th>
                        <th scope="col">Potencia do posto</th>
                        <th scope="col">Localização</th>
                    </tr>
                </thead>
                <tbody>
                    {empresas.map((empresa, index) => (
                        <tr key={index}>
                            <td>{empresa.nomePosto}</td>
                            <td>{empresa.tipoCarga}</td>
                            <td>{empresa.pino}</td>
                            <td>{empresa.potenciaPosto}</td>
                            <td>{empresa.localizacaoPosto}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            );
        }