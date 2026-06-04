import type { Ability } from "../entities/Warrior.js";

export interface FightResult {
  survive: boolean;
  message: string;
}

export const CiclopInteractions: Record<
  string,
  Partial<Record<Ability, FightResult>>
> = {
  DESCANSO: {
    ATACAR: {
      survive: true,
      message:
        "Aproveitando a guarda totalmente aberta, você corre e acerta um golpe em cheio! O Ciclop urra de dor.",
    },
    ESQUIVAR: {
      survive: false,
      message:
        "Você dá uma cambalhota super estilosa para o lado. O Ciclop termina de descansar, olha pra você com cara de tédio e pisa na sua cabeça. Belo malabarismo, pena que custou sua vida.",
    },
    PULAR: {
      survive: false,
      message:
        "Você começa a pular no lugar, como se estivesse comemorando a vitória cedo demais. O Ciclop recupera o fôlego e te rebate como uma bola de beisebol.",
    },
    USAR_ESCUDO: {
      survive: false,
      message:
        "Você levanta o escudo defensivamente contra... o vento? O Ciclop agradece a pausa dramática que você deu, recupera as energias e te esmaga com força renovada.",
    },
  },
  GOLPE_SIMPLES: {
    ATACAR: {
      survive: false,
      message:
        "Você tenta partir pra cima, mas o Ciclop apenas esmaga você com a clava. Virou picadinho de guerreiro...",
    },
    ESQUIVAR: {
      survive: true,
      message:
        "Você se concentra e habilmente esquiva para o lado no momento certo. Uau! Isso realmente foi inteligente.",
    },
    PULAR: {
      survive: false,
      message:
        "Você pula, mas o Ciclop movimenta sua clava de cima para baixo, lhe esmagando. Não foi uma boa ideia...",
    },
    USAR_ESCUDO: {
      survive: false,
      message:
        "Você tenta usar o escudo, mas a clava do Ciclop era grande demais, você não tem força para segurar o golpe e é esmagado.",
    },
  },

  GOLPE_AREA: {
    ATACAR: {
      survive: false,
      message:
        "Você tenta partir pra cima, mas o tremor lhe derruba. Um infeliz fim lhe aguarda...",
    },
    ESQUIVAR: {
      survive: false,
      message:
        "Você tenta esquivar, mas o tremor no chão lhe derruba. Um infeliz fim lhe aguarda...",
    },
    PULAR: {
      survive: true,
      message:
        "Você pula e consegue escapar do impacto mais forte. Os tremores em seguida não são o suficiente para lhe derrubar. Essa foi por pouco!",
    },
    USAR_ESCUDO: {
      survive: false,
      message:
        "Você tentar usar o escudo para... escapar de um terremoto? Você morre... de vergonha.",
    },
  },

  LASER: {
    ATACAR: {
      survive: false,
      message:
        "Você tenta partir pra cima, mas é instantaneamente torrado. Atacar nem sempre é a resposta.",
    },
    ESQUIVAR: {
      survive: false,
      message:
        "Você tenta esquivar, mas o Ciclop apenas vira o olhar na sua direção, lhe perseguindo com o feixe e lhe partindo ao meio. Pobre guerreiro tão frágil...",
    },
    PULAR: {
      survive: false,
      message:
        "Você tenta pular, mas o Ciclop apenas levanta o olho, fazendo o feixe lhe partir ao meio. Pobre guerreiro tão frágil...",
    },
    USAR_ESCUDO: {
      survive: true,
      message:
        "Você usa o escudo. O laser encosta no escudo e... Nenhum arranhão! O laser era extremamente fraco, só que seu corpo era ainda mais. Já esse escudo enferrujado aguentou de boas!",
    },
  },
};

export const BatInteractions: Record<
  string,
  Partial<Record<Ability, FightResult>>
> = {
  DESCANSO: {
    ATACAR: {
      survive: true,
      message:
        "Você não pensa duas vezes! Finca a espada na asa do morcego enquanto ele tentava puxar ar para os pulmões.",
    },
    ABAIXAR: {
      survive: false,
      message:
        "O monstro está literalmente parado no chão e você decide se agachar também. O morcego recupera as energias, acha fofa a sua postura de submissão e arranca sua cabeça.",
    },
    ESQUIVAR: {
      survive: false,
      message:
        "Você desvia do ar. O vento passa por você em câmera lenta. O morcego, agora 100% descansado, não entende nada do que você fez, mas aproveita e te corta ao meio.",
    },
    PULAR: {
      survive: false,
      message:
        "Você dá um pulinho na frente de um predador ofegante. Ele fica surpreso com sua audácia, e reúne suas forças para lhe presentear com uma dolorosa morte.",
    },
    USAR_ESCUDO: {
      survive: false,
      message:
        "Você se esconde atrás do escudo, tremendo de medo de um bicho que mal consegue respirar. Ele recarrega as baterias, dá a volta no seu escudo e te transforma em jantar.",
    },
    JOGAR_PEDRA: {
      survive: false,
      message:
        "Em vez de enfiar a espada no bicho vulnerável, você arremessa uma pedrinha. Ela quica na testa dele. Ele para de ofegar, te fuzila com o olhar e te oblitera da face da terra. Parabéns pela escolha.",
    },
  },
  GOLPE_AEREO: {
    ABAIXAR: {
      survive: true,
      message:
        "Você fica desesperado vendo aquele monstro indo pra cima de você, e então se joga no chão e reza! Por um milagre da sua divindade, o morcego passa raspando, mas não leva nada a mais do que alguns fios de cabelo! Ufa!",
    },
    ATACAR: {
      survive: false,
      message:
        "Você balança a espada no ar, mas o morcego-foguete atinge seu peito em cheio. Pelo menos você morreu em uma pose heroica...",
    },
    ESQUIVAR: {
      survive: false,
      message:
        "Você tenta ir para o lado, mas as asas do morcego são largas demais. Ele te atropela como um caminhão desgovernado.",
    },
    PULAR: {
      survive: false,
      message:
        "Pular contra um ataque vindo de cima? Você literalmente facilitou o trabalho dele. Game Over.",
    },
    USAR_ESCUDO: {
      survive: false,
      message:
        "Você levanta o escudo, mas a força do impacto te arremessa contra a parede da caverna. O escudo sobreviveu. Você não.",
    },
    JOGAR_PEDRA: {
      survive: false,
      message:
        "Você arremessa uma pedrinha. Ela quica na testa do morcego e volta direto no seu olho, um milissegundo antes dele te obliterar.",
    },
  },

  GOLPE_SIMPLES: {
    USAR_ESCUDO: {
      survive: true,
      message:
        "Você coloca o escudo na sua frente e o morcego odeia o barulho das suas garras arranhando aquele metal! Ainda bem, você não aguentaria segurar o escudo por muito mais tempo...",
    },
    ATACAR: {
      survive: false,
      message:
        "Você tenta um ataque frontal, mas as garras afiadas transformam sua armadura (e você) em espaguete.",
    },
    ESQUIVAR: {
      survive: false,
      message:
        "Você tenta desviar, mas o morcego tem um ótimo reflexo. Ele te arranha inteiro enquanto você tropeça nos próprios pés.",
    },
    PULAR: {
      survive: false,
      message:
        "Você pula, oferecendo sua barriga desprotegida para as garras do monstro. Decisão terrível.",
    },
    ABAIXAR: {
      survive: false,
      message:
        "Você agacha. O morcego simplesmente pousa nas suas costas e começa a te usar como arranhador de gato. Fim da linha.",
    },
    JOGAR_PEDRA: {
      survive: false,
      message:
        "Você joga a pedra. O morcego corta a pedra ao meio no ar como um ninja e depois corta você também.",
    },
  },

  GOLPE_RASANTE: {
    PULAR: {
      survive: true,
      message:
        "Você se concentra e consegue pular no último segundo. Você sente suas calças molhadas, mas pelo menos está vivo.",
    },
    ATACAR: {
      survive: false,
      message:
        "Você tenta bater nele por baixo, mas ele arranca suas canelas antes da sua espada sequer descer.",
    },
    ESQUIVAR: {
      survive: false,
      message:
        "Você tenta ir pro lado, mas ele faz uma curva fechada e corta seus tornozelos fora.",
    },
    ABAIXAR: {
      survive: false,
      message:
        "Você agacha. Lembra que ele estava mirando nas suas pernas? Pois é, agora ele acertou sua cabeça. Genial.",
    },
    USAR_ESCUDO: {
      survive: false,
      message:
        "Você aponta o escudo para frente, esquecendo completamente que suas pernas fininhas ficaram totalmente expostas. Plaft.",
    },
    JOGAR_PEDRA: {
      survive: false,
      message:
        "Você tenta arremessar a pedra, mas sem as duas pernas (que acabaram de ser fatiadas) fica meio difícil manter o equilíbrio, né?",
    },
  },

  ONDA_VENTO: {
    JOGAR_PEDRA: {
      survive: true,
      message:
        "Você não vai ter como desviar daquilo... mas espera!! Você não está em um anime, não precisa esperar o boss carregar seu golpe. Você pega uma pedra no chão e arremessa com toda sua força! A pedra não chega nem perto do morcego, mas é o suficiente para ele se distrair e perder a preparação.",
    },
    ATACAR: {
      survive: false,
      message:
        "Você corre na direção do tornado com a espada levantada e... decola! Pena que você não sabe voar e a queda foi fatal.",
    },
    ESQUIVAR: {
      survive: false,
      message: "Desviar de um furacão? Nem precisa descrever o que aconteceu.",
    },
    PULAR: {
      survive: false,
      message:
        "Pular para tentar escapar do vento? Parabéns, você virou uma pipa humana!",
    },
    ABAIXAR: {
      survive: false,
      message:
        "Você gruda no chão, mas o tornado te suga pelos colarinhos da armadura. Adeus, mundo cruel.",
    },
    USAR_ESCUDO: {
      survive: false,
      message:
        "Você se esconde atrás do escudo. O tornado leva o escudo. E você vai junto de brinde.",
    },
  },
};

export const DemonInteractions: Record<string, Record<Ability, FightResult>> = {
  GOLPE_AREA_CHAO: {
    PULAR: {
      survive: true,
      message:
        "Você dá um belo salto! O anel de fogo passa por baixo dos seus pés, tostando apenas as solas da sua bota.",
    },
    ATACAR: {
      survive: false,
      message:
        "Você corre pelas chamas para atacar. Você virou um palito de fósforo humano antes de chegar na metade do caminho.",
    },
    ESQUIVAR: {
      survive: false,
      message:
        "Você tenta rolar para o lado... e rola direto por cima das chamas. Você foi grelhado de maneira uniforme.",
    },
    USAR_ESCUDO: {
      survive: false,
      message:
        "Você finca o escudo no chão, mas o calor infernal derrete o metal e transforma você em fondue de guerreiro.",
    },
    ABAIXAR: {
      survive: false,
      message:
        "O fogo está rasteiro no chão. Você se abaixar foi como se jogar voluntariamente na churrasqueira. Fim de jogo.",
    },
    JOGAR_PEDRA: {
      survive: false,
      message:
        "Você arremessa uma pedra nas chamas. A pedra sobrevive. Você é engolido pelo anel de fogo.",
    },
    DANCAR: {
      survive: false,
      message:
        "Fazer sapateado em cima de uma grelha acesa? Você queimou os pés, caiu e virou churrasco.",
    },
    PENSAR: {
      survive: false,
      message:
        "Você filosofa sobre a natureza destrutiva do fogo enquanto as chamas consomem suas pernas. Pensamento profundo, morte dolorosa.",
    },
  },

  GOLPE_COM_MIRA: {
    USAR_ESCUDO: {
      survive: true,
      message:
        "Você levanta o escudo num reflexo perfeito. O raio bate no metal e reflete pro teto, abrindo um buraco na caverna!",
    },
    ATACAR: {
      survive: false,
      message:
        "Você tenta atacar, mas a mira já estava travada na sua testa. Um tiro limpo, cirúrgico e fatal.",
    },
    ESQUIVAR: {
      survive: false,
      message:
        "A mira automática persegue o seu movimento. Você desvia para a esquerda, o raio vai para a esquerda. Game Over.",
    },
    PULAR: {
      survive: false,
      message:
        "Você pula... e toma um tiro laser no peito em pleno ar, radical.",
    },
    ABAIXAR: {
      survive: false,
      message:
        "Você se abaixa, e o Demônio simplesmente ajusta a mira trinta centímetros para baixo. Fim da linha.",
    },
    JOGAR_PEDRA: {
      survive: false,
      message:
        "Você joga a pedra. O laser vaporiza a pedra no ar e continua o trajeto direto para o seu rosto.",
    },
    DANCAR: {
      survive: false,
      message:
        "Você começa a fazer o passinho do Michael Jackson. O Demônio acha estiloso, mas ainda assim te acerta um headshot perfeito.",
    },
    PENSAR: {
      survive: false,
      message:
        "Você tenta mover o laser com o poder da mente. Descobre da pior forma que você não tem telecinese.",
    },
  },

  GOLPE_CONCENTRADO: {
    DANCAR: {
      survive: true,
      message:
        "Você começa a mandar um breakdance frenético no meio da arena. O Demônio fica tão confuso com a sua audácia que perde a concentração e a esfera negra se desfaz no ar!",
    },
    JOGAR_PEDRA: {
      survive: false,
      message:
        "Você abaixa para pegar uma pedra, mas o chão estava fervendo! Você queima a mão, larga a pedra e solta um gritinho agudo. O Demônio começa a rir, mas não foi o suficiente para distraílo. Ele joga a esfera de energia e agora não foi só sua mão que queimou.",
    },
    ATACAR: {
      survive: false,
      message:
        "Você tenta bater nele enquanto ele carrega o golpe. A aura de energia ao redor do Demônio te desintegra ao menor toque.",
    },
    ESQUIVAR: {
      survive: false,
      message:
        "A explosão ocupa a caverna inteira. Você esquivou para um canto que, pra variar, também explodiu...",
    },
    PULAR: {
      survive: false,
      message:
        "Você tenta pular a explosão de uma Supernova. Você foi vaporizado, só que um pouco mais alto do chão.",
    },
    USAR_ESCUDO: {
      survive: false,
      message:
        "Você tenta bloquear uma Supernova com um pedaço de metal enferrujado. As cinzas que restaram de você devem estar orgulhosas da tentativa.",
    },
    ABAIXAR: {
      survive: false,
      message:
        "Você adota a posição fetal, aguardando o fim inevitável. Pelo menos foi uma morte resignada.",
    },
    PENSAR: {
      survive: false,
      message:
        "Você calcula o raio da explosão na sua cabeça. A matemática confirma: você está 100% morto.",
    },
  },

  GOLPE_SIMPLES: {
    USAR_ESCUDO: {
      survive: true,
      message:
        "O tapa flamejante bate no seu escudo! O impacto te arrasta para trás, mas você se mantém firme.",
    },
    ESQUIVAR: {
      survive: true,
      message:
        "Você desliza por baixo do braço colossal do Demônio, escapando do tapa por milímetros!",
    },
    ATACAR: {
      survive: false,
      message:
        "Tentar trocar soco contra soco com o lorde dos demônios não funciona bem. Ele esmaga sua espada e sua cara de uma vez só.",
    },
    PULAR: {
      survive: false,
      message:
        "Você pula para tentar desviar, entregando seu corpo de bandeja para o tapa dele. Um 'High-Five' letal.",
    },
    ABAIXAR: {
      survive: false,
      message:
        "Você agacha e o Demônio muda o ângulo, batendo na sua cabeça como se estivesse pregando um prego no chão.",
    },
    JOGAR_PEDRA: {
      survive: false,
      message:
        "A pedrinha bate no dedão dele e não faz cócegas. Já o tapa dele em vocẽ acaba te matando. Perfeitamente equilibrado.",
    },
    DANCAR: {
      survive: false,
      message:
        "Você tenta desviar fazendo uma pirueta. Elegante? Sim. Evitou a mão gigante? Não.",
    },
    PENSAR: {
      survive: false,
      message:
        "Você fica pensando em qual seria a melhor defesa. Enquanto decidia, a mão gigante resolveu o problema por você.",
    },
  },

  GOLPE_AREA_AEREO: {
    ABAIXAR: {
      survive: true,
      message:
        "Você se joga no chão na velocidade da luz! As lâminas de vento passam zumbindo na altura do seu peito, cortando as pilastras atrás de você.",
    },
    ATACAR: {
      survive: false,
      message:
        "Você levanta a espada e corre, mas é fatiado em pedacinhos pelo vento cortante. Virou sashimi.",
    },
    ESQUIVAR: {
      survive: false,
      message:
        "A área de efeito do vento era larga demais. Você desvia direto para dentro de outra lâmina afiada.",
    },
    PULAR: {
      survive: false,
      message:
        "As lâminas vinham na altura do peito. Ao pular, você garantiu que elas cortassem seus tornozelos fora.",
    },
    USAR_ESCUDO: {
      survive: false,
      message:
        "O vento corta seu escudo ao meio e não para por aí. RIP guerreiro cortado pela metade.",
    },
    JOGAR_PEDRA: {
      survive: false,
      message:
        "Você arremessa uma pedra. A ventania joga a pedra de volta na sua cara a 300km/h.",
    },
    DANCAR: {
      survive: false,
      message:
        "A coreografia exigia que você ficasse de pé. As lâminas de vento discordaram.",
    },
    PENSAR: {
      survive: false,
      message:
        "Você fecha os olhos para pensar em uma saída. Quando abre, percebe que seu torso não está mais conectado às pernas.",
    },
  },

  INVADIR_MENTE: {
    PENSAR: {
      survive: true,
      message:
        "Você entra em pânico e começa a pensar na coisa mais repugnante possível... aquele episódio escabroso com um goblin e um balde de geléia. O Demônio acessa sua mente, vê isso, grita de nojo e quebra a conexão mental imediatamente!",
    },
    ATACAR: {
      survive: false,
      message:
        "Ele toma controle do seu cérebro. Você corre com a espada e, contra sua vontade, enfia ela no próprio estômago.",
    },
    ESQUIVAR: {
      survive: false,
      message:
        "Você tenta rolar fisicamente para fugir de um ataque psíquico. O Demônio ri, toma sua mente e o que acontece a seguir não pode ser descrito em um simples jogo.",
    },
    PULAR: {
      survive: false,
      message:
        "Você dá um pulo no lugar, mas a mente continua vulnerável. Seu cérebro derrete enquanto você volta pro chão.",
    },
    USAR_ESCUDO: {
      survive: false,
      message:
        "Você se protege com o escudo de madeira achando que ele bloqueia telepatia. Plot twist: não bloqueia.",
    },
    ABAIXAR: {
      survive: false,
      message:
        "Você coloca as mãos na cabeça e se abaixa. Ele invade sua mente e faz você arrancar os próprios cabelos até a morte.",
    },
    JOGAR_PEDRA: {
      survive: false,
      message:
        "Ele toma o controle da sua mão e faz você marretar a própria cabeça com a pedra. Brutal.",
    },
    DANCAR: {
      survive: false,
      message:
        "O Demônio acha divertido e faz seu corpo dançar sem parar até seu coração explodir de exaustão.",
    },
  },

  VER_FUTURO: {
    ATACAR: {
      survive: true,
      message:
        "O Demônio analisou as defesas perfeitas... O que ele não previu foi você, o guerreiro mais fraco da história, vindo para cima de peito aberto! A imprevisibilidade absoluta da sua burrice o pega desprevenido e você acerta o golpe!",
    },
    ESQUIVAR: {
      survive: false,
      message:
        "Ele previu exatamente para qual lado você ia desviar. Quando você chegou lá, o golpe dele já estava te esperando.",
    },
    PULAR: {
      survive: false,
      message:
        "Ele viu você pulando no futuro e preparou um ataque aéreo. Você foi abatido como um pombo indefeso.",
    },
    USAR_ESCUDO: {
      survive: false,
      message:
        "Ele previu sua defesa e utilizou uma magia que perfura escudos. Ser previsível foi sua ruína.",
    },
    ABAIXAR: {
      survive: false,
      message:
        "Ele previu que você ia se agachar e preparou um terremoto focado exatamente embaixo dos seus pés.",
    },
    JOGAR_PEDRA: {
      survive: false,
      message:
        "Ele viu você pegando a pedra. Ele mandou um feitiço de fogo no chão antes de você abaixar. Mãozinha torrada.",
    },
    DANCAR: {
      survive: false,
      message:
        "Ele previu todos os seus passos de dança e te contra-atacou no tempo perfeito da batida musical.",
    },
    PENSAR: {
      survive: false,
      message:
        "Ele leu o seu futuro e os seus pensamentos ao mesmo tempo. Você morreu duas vezes na mente dele antes de morrer de verdade.",
    },
  },

  DESCANSO: {
    ATACAR: {
      survive: true,
      message:
        "Você não hesita! Com o Demônio tossindo fumaça e exausto, você avança e acerta seu ponto cego!",
    },
    ESQUIVAR: {
      survive: false,
      message:
        "Você desvia de... nada. O chefe recarrega toda a energia, se levanta e destrói o que restou do seu ego (e do seu corpo).",
    },
    PULAR: {
      survive: false,
      message:
        "Você dá pulinhos no mesmo lugar enquanto o Boss mais difícil do jogo descansa de graça. Ele volta ao normal e te esmaga.",
    },
    USAR_ESCUDO: {
      survive: false,
      message:
        "Você se defende do próprio medo. O Demônio respira fundo, te olha decepcionado e incinera você e o escudo.",
    },
    ABAIXAR: {
      survive: false,
      message:
        "Você se encolhe no chão em vez de aproveitar a janela de ataque. O Lorde Demônio recobra o fôlego e pisa em você.",
    },
    JOGAR_PEDRA: {
      survive: false,
      message:
        "Em vez de usar a espada, você joga uma pedrinha que nem arranha a pele do monstro. Ele para de tossir, te fuzila com o olhar e finaliza a luta.",
    },
    DANCAR: {
      survive: false,
      message:
        "O Demônio abaixa a guarda e você lança um passinho? Ele termina de descansar e transforma sua pista de dança numa cova rasa.",
    },
    PENSAR: {
      survive: false,
      message:
        "Você perde a única janela de vulnerabilidade do chefe para ficar refletindo sobre a vida. Bom, a sua acabou de terminar.",
    },
  },
};
