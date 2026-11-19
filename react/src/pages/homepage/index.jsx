import './styles.css'

const movements = [
    { name: 'Almeida & Filhos', description: 'Consultoria empresarial', value: '+ R$ 8.450,00', status: 'Pago', tone: 'green' },
    { name: 'Norte Design', description: 'Fechamento mensal', value: '- R$ 1.280,00', status: 'Pendente', tone: 'yellow' },
    { name: 'Casa Verde Ltda.', description: 'Folha de pagamento', value: '- R$ 12.760,00', status: 'Em análise', tone: 'red' },
]

export default function Homepage() {
    return (
        <main className="dashboard" id="top">
            <section className="dashboard-heading" id="visao-geral">
                <div>
                    <p className="eyebrow">QUARTA-FEIRA, 19 DE NOVEMBRO</p>
                    <h1>Boa tarde, Ana.</h1>
                </div>
                <button className="primary-button" type="button">
                    <span aria-hidden="true">+</span>
                    Novo lançamento
                </button>
            </section>

            <section className="summary-grid" aria-label="Resumo financeiro">
                <article className="summary-card featured">
                    <div className="card-label">
                        <span>Saldo disponível</span>
                        <span className="trend">+12,5%</span>
                    </div>
                    <strong className="balance">R$ 48.920,60</strong>
                    <div className="balance-chart" aria-hidden="true">
                        <span style={{ height: '38%' }} />
                        <span style={{ height: '52%' }} />
                        <span style={{ height: '46%' }} />
                        <span style={{ height: '68%' }} />
                        <span style={{ height: '56%' }} />
                        <span style={{ height: '82%' }} />
                        <span style={{ height: '74%' }} />
                        <span style={{ height: '100%' }} />
                    </div>
                </article>

                <article className="summary-card">
                    <div className="card-label"><span>Receitas</span><span className="dot green-dot" /></div>
                    <strong>R$ 32.480,00</strong>
                    <p>Este mês</p>
                </article>

                <article className="summary-card">
                    <div className="card-label"><span>Despesas</span><span className="dot red-dot" /></div>
                    <strong>R$ 14.210,40</strong>
                    <p>Este mês</p>
                </article>
            </section>

            <section className="workspace-grid">
                <article className="panel movements" id="movimentos">
                    <div className="panel-heading">
                        <div>
                            <p className="eyebrow">MOVIMENTOS</p>
                            <h2>Últimos lançamentos</h2>
                        </div>
                        <button className="text-button" type="button">Ver tudo</button>
                    </div>

                    <div className="movement-list">
                        {movements.map((movement) => (
                            <div className="movement" key={movement.name}>
                                <span className={`movement-icon ${movement.tone}`} aria-hidden="true">
                                    {movement.name.charAt(0)}
                                </span>
                                <div className="movement-info">
                                    <strong>{movement.name}</strong>
                                    <span>{movement.description}</span>
                                </div>
                                <div className="movement-value">
                                    <strong>{movement.value}</strong>
                                    <span className={`status ${movement.tone}`}>{movement.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>

                <aside className="panel agenda" id="documentos">
                    <div className="panel-heading">
                        <div>
                            <p className="eyebrow">AGENDA</p>
                            <h2>Próximos passos</h2>
                        </div>
                    </div>
                    <div className="task">
                        <span className="task-date"><strong>21</strong><small>NOV</small></span>
                        <div><strong>Enviar DCTFWeb</strong><span>Prazo às 18h</span></div>
                    </div>
                    <div className="task">
                        <span className="task-date"><strong>24</strong><small>NOV</small></span>
                        <div><strong>Fechar folha</strong><span>3 documentos pendentes</span></div>
                    </div>
                    <button className="outline-button" type="button">Abrir calendário</button>
                </aside>
            </section>
        </main>
    )
}