import React, { Fragment } from 'react';
import Input from './input';
import './form.css'

export default class Form extends React.Component {
    render() {
        return (
             <section>
                 <div className='container'>
                 <h2 className='title'>formulario de contato</h2>
                    <div className='row'>
                        <div className='col'>
                            <Input input="nome"/>
                        </div>
                        <div className='col'>
                            <Input input="Sobrenome"/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <Input input="email"/>
                        </div>
                        <div className='col'>
                                <Input input="telefone"/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <Input input="mensagem"/>
                        </div>
                        <div className="col">
                            <div className="inputBox">
                                <button>enviar</button>
                            </div>   
                        </div>
                    </div>
                 </div>
             </section>
        );
    }
};
