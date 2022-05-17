import {useState,useEffect} from "react";

import Mensagem from "./Mensagem"
import Conteudo from "./Conteudo"

export default function Container(){

    //vamos o estado inicial dos produtos, ou seja,
    //quais dados existem dentro do objeto produtos

    const [produtos, setProdutos] = useState([
        {
          id:"",
          nome:"",
          descricao:"",
          categoria:"",
          preco:"",
          msg:[]
        }
    ]);
        
        useEffect(()=>{
        
          fetch("https://10.26.49.23:4000/api/services/produtos/listar")
          .then((response)=>response.json())
          .then ((dados)=>{
           setProdutos(dados.output);
           })
          .catch((erro)=>console.error(`Erro ao carregar a api ->${erro}`))
        },[])

    return(
        <div className="container">
            <Mensagem />
            <Conteudo dados = {produtos} />
        </div>
    )
}