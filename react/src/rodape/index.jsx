import './style.css'

export default function rodape() {
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} -Contabilidade simples</p>
            <p>Todos os direitos reservados.</p>
        </footer>
    )
}