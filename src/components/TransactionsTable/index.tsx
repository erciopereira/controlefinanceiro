import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Entrada</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Entrada</td>
                        <td>04/09/2021</td>
                    </tr>
                    <tr>
                        <td>Despesas</td>
                        <td className="withdraw">- R$ 5.000,00</td>
                        <td>Despesa</td>
                        <td>04/09/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}