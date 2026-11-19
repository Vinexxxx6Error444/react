import './styles.css'

export default function Header() {
    return (
        <header className="topbar">
            <a className="brand" href="#top" aria-label="Contabilidade simples">
                <span className="brand-mark">CS</span>
                <span>Contabilidade <strong>Simples</strong></span>
            </a>
            <nav className="main-nav" aria-label="Navegação principal">
                <a className="active" href="#visao-geral">Visão geral</a>
                <a href="#clientes">Clientes</a>
                <a href="#movimentos">Movimentos</a>
                <a href="#documentos">Documentos</a>
            </nav>
            <button className="avatar" type="button" aria-label="Abrir perfil">AM</button>
        </header>
    )
}