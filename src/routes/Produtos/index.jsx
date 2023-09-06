import { Link } from "react-router-dom"
import { listaProdutos } from "../../components/ListaProdutos"




export default function Produtos(){

    return(

        <main>
            <h1>PRODUTOS</h1>
            {listaProdutos.map(prod => (
                <div key ={prod.id}>
                    <Link to={'/produtos/editar/${prod.id'}>
                        Editar o produto: {prod.name}
                    </Link>

                </div>
            ))}
        </main>
        
    )
}