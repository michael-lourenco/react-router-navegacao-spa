import React, { useEffect, useState } from 'react';
import '../assets/css/blog.css';
import ListaCategorias from '../components/ListaCategorias';
import ListaPost from '../components/ListaPost';
import { Route, useParams, useRouteMatch } from 'react-router-dom';
import { busca } from '../api/api';

const Categoria = () => {
    const { id } = useParams();
    const { path} = useRouteMatch();
    const [subcategorias, setSubcategorias] = useState([]);
    
    useEffect(() => {
        busca(`/categorias/${id}/subcategorias`, (categoria) => {
            setSubcategorias(categoria.setSubcategorias);
        })
    },[id])

    return(
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <ListaCategorias />
            <Route exact path={`${path}/`}>
                <ListaPost url = {`/posts?categoria=${id}`}/>
            </Route>
        </>
    )
}

export default Categoria;
