import './styles.css'

const currentYear = new Date().getFullYear()

export default function Footer() {
    return (
        <footer className="footer">
            <p>Contabilidade Simples</p>
            <p>&copy; {currentYear} · SENAI Bahia</p>
        </footer>
    )
}