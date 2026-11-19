const currentYear = new Date().getFullYear()

export default function Servicos() {
    return(
        <footer>
            <p>&copy; {currentYear} -Contabilidade simples</p>
            <p>Todos os direitos reservados.</p>
        </footer>
    )
}