import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import {Link} from 'react-router-dom';

import './style.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    return(
       <div className="logon-container">
           <section className="form">
            <img src={logoImg} alt="Logo"/>
              <form>
                  <h1>Faça o seu Logon</h1>

                  <input placeholder="Sua ID" />
                  <button className="button" type="submit" >Entrar</button>

                  <Link to="/register">
                      <FiLogIn size={16} color="#E02041"/>
                      Não Tenho Cadastro
                  </Link>

              </form>
           </section>

           <img src={heroesImg} alt="Heroes"/>
       </div>
    );
}