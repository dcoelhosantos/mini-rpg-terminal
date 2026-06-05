# ⚔️ Guerreiro de Papelão: Mini RPG Terminal

> Um RPG tático de loop temporal construído puramente no terminal com **TypeScript**, **Node.js** e **@clack/prompts**. Onde a morte não é o fim, mas sim a única estratégia para a vitória.

---

## 📖 A História (Lore)

O mundo como conhecíamos acabou. As criaturas horrendas do Rei Demônio tomaram conta de tudo. A humanidade estava à beira da extinção, até que uma aliança improvável surgiu... 

Um demônio rebelde, traindo seu próprio Rei, ofereceu um feitiço obscuro como nossa última esperança. Em troca de sua própria vida, ele lançaria uma magia capaz de anular a maior fraqueza de três bravos guerreiros. Mas o feitiço demorou demais. A humanidade já não tinha um exército. Conseguiram encontrar apenas dois grandes heróis... e **você**.

* **O Primeiro Guerreiro:** Uma força da natureza, mas com zero intelecto estratégico. O feitiço curou sua mente, transformando-o em um gênio militar impecável.
* **O Segundo Guerreiro:** Um veterano letal, mas envelhecido e caolho. O feitiço lhe devolveu a juventude e a visão perfeita.
* **Você (O Guerreiro de Papelão):** Franzino, meio idiota e absurdamente lento. Sem exageros, o guerreiro mais fraco da Terra. Qual era a sua maior fraqueza? Difícil dizer. Talvez a sua própria capacidade de continuar vivo. 

E foi exatamente isso que o feitiço entendeu. A magia cobriu sua maior fraqueza lhe concedendo a **Imortalidade**.

Você continuou sendo um guerreiro inútil, mas que simplesmente não para de reviver. Os dois generais do Lorde Demônio (o Ciclop e o Morcego Gigante) fizeram picadinho dos seus dois amigos superpoderosos. Agora, a Terra inteira conta com a sua teimosia infinita para vencer essa guerra pelo cansaço!

<div align="center">
   <img width="842" height="614" alt="image" src="https://github.com/user-attachments/assets/a3ca36d2-0fa7-4a7e-8095-10c62bed04f9" />
</div>

---

## 🎮 Mecânicas Únicas de Gameplay

* **Loop Temporal de Aprendizado:** Cada chefe possui um padrão de ataques letais. Inicialmente, você possui apenas a habilidade `ATACAR`. Ao morrer para um golpe específico, a sua mente expande!
* **Caderninho de Anotações:** O jogo registra as suas tentativas contra *cada golpe específico*. Para desbloquear uma nova habilidade defensiva ou estratégica, você precisa esgotar todas as suas opções atuais contra aquele ataque letal. A persistência gera a evolução!

## 📂 Arquitetura do Projeto

O motor do jogo foi modularizado para manter o código limpo, tipado e escalável:

```bash
src/
├── engine/
│   ├── BattleManager.ts   # O "Juiz" da batalha (valida as regras de sobrevivência)
│   ├── interactions.ts    # O "Livro de Regras" de acertos e erros contra os bosses
│   └── lore.ts            # Gerenciador narrativo em telas isoladas
├── entities/
│   ├── Entity.ts          # Classe abstrata base para vida e dano
│   ├── Warrior.ts         # Classe do Herói (guarda o Caderninho de Tentativas)
│   ├── Enemy.ts           # Classe base para os inimigos com IA de padrão fixo
│   └── bosses/
│       ├── ciclop.ts      # Sprite e padrão de movimentos do Ciclop
│       ├── bat.ts         # Sprite e padrão de movimentos do Morcego
│       └── demon.ts       # Sprite e padrão de movimentos do Demônio
└── index.ts               # Loop principal do jogo e renderização de menus
```
## 🚀 Como Instalar e Rodar

### 🧰 Passo 1: Instalando o NVM (Node Version Manager)

O jogo precisa do Node.js (versão 20) para rodar e desenhar as cores no terminal. A forma mais segura de instalar o Node é usando o NVM. Se você ainda não tem, siga o passo a passo do seu sistema:

#### 🪟 Para Windows
1. Acesse a página oficial do **nvm-windows**: https://github.com/coreybutler/nvm-windows/releases
2. Role a página até a seção "Assets" e clique para baixar o arquivo **nvm-setup.exe**.
3. Dê um duplo clique no arquivo baixado e instale normalmente (só ir clicando em "Next" até o final).
4. Após terminar a instalação, abra o **PowerShell** ou o **Prompt de Comando (CMD)**.
5. Digite `nvm version` e aperte ENTER para confirmar que foi instalado.

#### 🐧 Para Linux (Ubuntu, Mint, Pop!_OS, etc)
1. Abra o seu terminal.
2. Copie e cole o comando abaixo e aperte ENTER para baixar o instalador oficial:
   `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
4. **Feche o seu terminal e abra um novo** (isso é obrigatório para o sistema reconhecer o novo comando).
5. Digite `nvm --version` e aperte ENTER para confirmar que foi instalado.

---

### 📦 Passo 2: Instalando o Node.js e Rodando o Jogo

Com o NVM configurado, abra o seu terminal e siga estes passos finais:

1. **Instale a versão 20 do Node.js:**
   nvm install 20

2. **Defina a versão 20 como a padrão do seu computador:**
   nvm alias default 20
   *(Nota: Se estiver no Windows e esse comando der erro, use apenas `nvm use 20`)*

3. **Clone o repositório do jogo para a sua máquina:**
   - Usando HTTPS (Padrão e recomendado):
   `git clone https://github.com/dcoelhosantos/mini-rpg-terminal.git`

   - Ou usando SSH (Se você já tiver a chave configurada):
   `git clone git@github.com:dcoelhosantos/mini-rpg-terminal.git`

4. **Navegue até a pasta do jogo:**
   `cd mini-rpg-terminal`

5. **Instale as dependências (TypeScript, Clack, etc):**
   `npm install`

6. **Inicie o jogo:**
   `npm start`

## 📜 Licença

Este projeto foi desenvolvido com propósitos de aprendizado hardcore de TypeScript, arquitetura orientada a objetos (POO) e game design de terminal. Sinta-se livre para clonar, adicionar novos chefes, novas mensagens de morte hilárias e expandir a jornada do nosso querido Guerreiro de Papelão!

---
Developed by Daniel Coelho
