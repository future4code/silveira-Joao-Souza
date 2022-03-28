import React from 'react'


export function Etapa1() {
    return (
        <div>
            <h3>
                ETAPA 1 - DADOS GERAIS
            </h3>
            <p>
                1. Qual o seu nome?
            </p>
            <input value />
            <p>
                2. Qual a sua idade?
            </p>
            <input value />
            <p>
                3. Qual seu email?
            </p>
            <input value />
            <p>
                4. Qual a sua escolaridade?
            </p>
            <select>
                <option value="Ensino médio incompleto" />
                <option value="Ensino médio completo" />
                <option value="Ensino superior incompleto" />
                <option value="Ensino superior completo" />
            </select>
        </div>

    );
}

export default Etapa1;