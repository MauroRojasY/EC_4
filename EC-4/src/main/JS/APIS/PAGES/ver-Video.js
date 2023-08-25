const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect} = require('react');
const client = require('../client');

const VerMusicoPage = () => {

    let { id } = useParams();
    const [video setvideo] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/video/' + id
        }).done(response=>setMusico(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Video</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{video.nombre}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VervideoPage;