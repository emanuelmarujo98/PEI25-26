
# Plataforma de Jogos de Geolocalização para Treino em OSINT

Neste projeto proponho o desenvolvimento de uma plataforma web interativa de 
treino de geolocalização

**Estudante:** Emanuel Marujo · 2400970
**Orientador:** Pedro Pestana  
**UC:** Projecto de Engenharia Informática · Universidade Aberta · 2025/26  
**Repositório:** https://github.com/emanuelmarujo98/PEI25-26

---

## Estado actual


🟢 **Verde** — Fase de desenvolvimento concluída.  
---

## O que está implementado



- [x] Proposta para projeto — Aprovada
- [x] MVP, sinopse e arquiteturas do projeto definidas
- [x] Autenticação de utilizadores (Registo e Login)
- [x] Proteção de rotas através de JWT
- [x] Encriptação de passwords com bcrypt
- [x] Dataset local com 35 localizações
- [x] Sistema de pontuação baseado na distância
- [x]Sistema de conquistas (Achievements)
- [x]Visualização da localização correta após cada ronda
- [x]Zoom automático do mapa
- [x] Sistema de dicas com penalização de pontos
- [x] Cronómetro por ronda
- [x] Ranking global de jogadores
- [x] Histórico de partidas
- [x] Estatísticas pessoais

---


## Pré-requisitos

Antes de executar o projeto é necessário ter instalado:

Node.js (versão 18 ou superior)
npm (incluído com o Node.js)
Git (opcional, para clonar o repositório)

## Instalação
**1. Clonar o repositório**
git clone https://github.com/emanuelmarujo98/PEI25-26.git
cd PEI25-26

**2. Instalar as dependências do Frontend**
npm install

**3. Instalar as dependências do Backend**
cd backend
npm install

**4.Execução**
Iniciar o Backend

Na pasta backend:

npm start

O servidor ficará disponível em:

http://localhost:5000
Iniciar o Frontend

Na pasta principal do projeto:

npm start

A aplicação ficará disponível em:

http://localhost:3000
Base de Dados

A aplicação utiliza SQLite para persistência de dados.

A base de dados é criada automaticamente na primeira execução da aplicação.

Acesso

Após iniciar o frontend e o backend:

Frontend: http://localhost:3000
Backend: http://localhost:5000

---

## Decisões de arquitectura principais

| Decisão | Alternativa considerada | Razão da escolha |
|---------|------------------------|-----------------|
| SQLite | JSON | Optei por SQLite para que seja possivel a persistência de dados |
| React | JavaScript | React foi a tecnologia escolhida por tornar este projeto mais escalável |
| JWT   | Sessão tradicional | O JWT simplifica a comunicação entre frontend e backend e protege as rotas da API|
|Leaflet + OpenStreetMap | Google Maps API| A escolha foi tomada principalemente por ser um recurso gratuito e suficiente  para os requisitos do projeto|

---

## Referências e IA utilizada


### Referências técnicas

- Documentação oficial do React: https://react.dev/
- Documentação oficial do SQLite: https://www.sqlite.org/
- Documentação oficial do Node.js: https://nodejs.org/
- Documentação oficial do Express: https://expressjs.com/

### Ferramentas de IA utilizadas


| Ferramenta | Para que foi usada |
|-----------|-------------------|
| ChatGPT | Apoio ao desenvolvimento, debugging, arquitetura, documentação e otimização do código |

---

*Última actualização: 13/06/26 

