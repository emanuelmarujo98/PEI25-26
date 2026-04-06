# Proposta de Projecto

**Título:** Plataforma de Jogos de Geolocalização para Treino em OSINT   
**Estudante:** Emanuel Marujo · 2400970  
**Orientador:** Pedro Pestana  
**Data:** 25/03/2026  
**Versão:** 1.0

---

## Sinopse

<!-- Três parágrafos máximo. -->
<!-- §1: O problema que o projecto endereça e quem o tem. -->
<!-- §2: A solução proposta e o que a distingue do que já existe. -->
<!-- §3: O resultado esperado e como se verifica que foi atingido. -->
<!-- A sinopse deve ser legível por alguém sem formação técnica. -->

A capacidade de identificar locais a partir de imagens, padrões urbanos ou 
características geográficas é uma competência relevante em contextos de OSINT 
e análise digital. Jogos de geolocalização demonstram o potencial pedagógico 
deste tipo de desafio, mas raramente exploram variações estruturadas orientadas 
para treino específico. 
Neste projeto proponho o desenvolvimento de uma plataforma web interativa de 
treino de geolocalização. Ao utilizador será apresentada uma imagem na qual 
deverá ser identificada a localização no mapa, em caso de erro a plataforma irá 
apresentar pistas de forma a ajudar e melhorar o treino. 
Este sistema difere de sistemas já existentes no que toca à aprendizagem que será 
o seu maior foco, ao contrário da grande maioria em que o ponto principal é 
funcionar como um jogo e não um sistema de aprendizagem. O sucesso será 
verificado através da implementação de um MVP funcional, onde o utilizador 
completa os vários desafios e recebe um feedback educativo. 

---

## MVP — Definição e critérios de aceitação

<!-- Listar as funcionalidades do núcleo mínimo obrigatório na entrega final. -->
<!-- Para cada funcionalidade, definir um critério de aceitação observável. -->
<!-- Exemplo de critério fraco: "o utilizador consegue autenticar-se" -->
<!-- Exemplo de critério forte: "dado email e password válidos, o sistema autentica e redirige para o dashboard -->
<!--   em menos de 2 segundos; dado email inválido, apresenta mensagem de erro sem expor informação de sistema." -->

### Funcionalidade 1 — Inicio do desafio

**Critério de aceitação:**  
Dada a ordem para iniciar uma nova ronda o Sistema apresenta uma imagem em menos de 2 segundos

### Funcionalidade 2 — Interação com o mapa

**Critério de aceitação:**  
Dado o clique no mapa o sistema apresenta um marcador e regista as coordenadas

### Funcionalidade 3 — Cálculo da distância

**Critério de aceitação:**  
[Descrição observável e verificável]

### Funcionalidade 4 — Feedback

**Critério de aceitação:**  
 Se a distância for superior a 100 km, o Sistema apresenta pelo menos 1 pista

### Funcionalidade 5 — Visualização da resposta

**Critério de aceitação:**  
Após a segunda tentativa de resposta, o Sistema apresenta distância e o ponto correto no mapa

### Funcionalidade 6 — Registo do desempenho do utilizador

**Critério de aceitação:**  
 Após a ronda, o sistema armazena o resultado na base de dados e permite a consulta do histórico numa nova sessão

 ### Funcionalidade 7 — Voltar a jogar

**Critério de aceitação:**  
  Ao clicar no botão “Jogar de novo”, o Sistema apresenta uma imagem em menos de 2 segundos.
  
<!-- Adicionar funcionalidades conforme necessário -->

---

## Stack tecnológica

<!-- Para cada tecnologia principal, uma linha de justificação. -->
<!-- Não é necessário ser exaustivo — as decisões menores entram nos ADRs durante o desenvolvimento. -->

| Componente | Tecnologia escolhida | Justificação |
|-----------|---------------------|-------------|
| Frontend | React |  por tornar este projeto mais escalável  |
| Backend | Node.js + Express | [porquê esta e não outra] |
| Base de dados | SQLite | permite uma persistência de dados e evita uma grande complexidade |
| Autenticação | Node.js + SQLite | Esta abordagem foi escolhida por garantir simplicidade e controlo total sobre os dados|

---

## Esboço de arquitectura — C4 Nível 1

<!-- Opcional mas recomendado se já houver clareza sobre a fronteira do sistema. -->
<!-- Pode ser uma imagem, um diagrama em texto, ou uma descrição estruturada. -->
<!-- Vai ser refinado em docs/architecture/c4-context.png durante o desenvolvimento. -->

**Sistema:** [Nome do sistema]

**Utilizadores:**
- [Tipo de utilizador 1] — [o que fazem com o sistema]
- [Tipo de utilizador 2] — [o que fazem com o sistema]

**Sistemas externos:**
- [Sistema externo 1] — [como o sistema interage com ele]
- [Sistema externo 2] — [como o sistema interage com ele]

---

## Calendário individual detalhado

<!-- Adaptar o template do Guia de Projecto ao projecto específico. -->
<!-- As datas das três entregas formais são fixas. O restante é do estudante gerir. -->
<!-- Ser realista: prever tempo para testes, revisão do relatório e preparação da defesa. -->

| Semanas | Datas | Conteúdo planeado | Marco |
|---------|-------|------------------|-------|
| Sem. 1–2 | 17–28 mar | Proposta. Configuração do repositório. | **Proposta (25 mar)** |
| Sem. 3–4 | 31 mar–11 abr | Levantamento de requisitos (MoSCoW): 
• Must: imagem + mapa + distância + dicas  
• Should: sistema de rondas  
• Could: melhorias visuais 
Definição da arquitetura (C4 nível 1 e 2) 
Criação do repositório GitHub com estrutura inicial | |
| Sem. 5–6 | 14–25 abr |  Wireframes da interface (página principal + mapa + resultado)  
 Definição das decisões técnicas principais (ADRs)  
 Início da implementação:  
• Estrutura base da aplicação  
• Apresentação de imagem  
• Layout inicial  | |
| Sem. 7 | 28 abr–2 mai | Estado funcional inicial do sistema  
 Implementação parcial da lógica (ex: carregamento de imagem)  | **Demo interna** |
| Sem. 8 | 5–6 mai |  Relatório intercalar: Capítulos 1 (Introdução) e 2 (Desenho) completos.  
Estado de implementação documentado no Cap. 3.   | **Intercalar (6 mai)** |
| Sem. 9–10 | 7–16 mai | Implementação do núcleo do sistema:  
• Interação com mapa (clique)  
• Registo de coordenadas  
• Cálculo de distância  
Início dos testes ao núcleo  
Identificação de limitações | |
| Sem. 11–12 | 19–30 mai |Implementação completa do MVP.  
Testes de funcionalidade e desempenho.  
Capturas de ecrã e exemplos de execução para Cap. 4.  | |
| Sem. 13 | 2–6 jun | Revisão geral do sistema  
 Melhorias de interface (UI)  
Validação dos critérios de aceitação definidos no MVP | |
| Sem. 14 | 9–13 jun | Redação do Cap. 4 (Testes) e Cap. 5 (Conclusões).  
Revisão bibliográfica e formatação APA.  
Preparação dos anexos.   | |
| Sem. 15 | 16–20 jun | Reunião de preparação para defesa com orientador (síncrono).  
Ensaio de perguntas de júri.  
Revisão final do relatório e verificação de coerência com o repositório.  | **Prep. defesa** |
| Sem. 16 | 24 jun | Submissão do relatório final. | **Final (24 jun)** |
