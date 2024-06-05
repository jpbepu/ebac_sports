import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

import * as S from './styles'

type Props = {
    produtos: ProdutoType[]
}

const ProdutosComponent = ({ produtos }: Props) => {
    const itensFavoritados = useSelector(
        (state: RootState) => state.favoritos.itens
    )

    const produtoEstaNosFavoritos = (produto: ProdutoType) => {
        const produtoId = produto.id
        const IdsDosFavoritos = itensFavoritados.map((f) => f.id)

        return IdsDosFavoritos.includes(produtoId)
    }

    return (
        <>
            <S.Produtos>
                {produtos.map((produto) => (
                    <Produto
                        estaNosFavoritos={produtoEstaNosFavoritos(produto)}
                        key={produto.id}
                        produto={produto}
                    />
                ))}
            </S.Produtos>
        </>
    )
}

export default ProdutosComponent
