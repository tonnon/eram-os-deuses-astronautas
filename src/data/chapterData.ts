
import { Pyramid, Zap, Star, Eye, Mountain, BookOpen, Scroll, MapPin, Cpu, Rocket } from "lucide-react";

export interface ChapterData {
  icon: any;
  image: string;
  content: string;
  artifacts: string[];
}

export const chapterData: Record<string, ChapterData> = {  monuments: {
    icon: Pyramid,
    image: "/img1.jpg",
    content: `Os monumentos impossíveis do nosso mundo antigo permanecem como testemunhas silenciosas de uma tecnologia que não conseguimos explicar. A Grande Pirâmide de Gizé, construída com precisão que rivaliza com a engenharia moderna, contém blocos de pedra maciços pesando até 15 toneladas, transportados e posicionados com uma precisão que desafia explicações convencionais.

Como civilizações antigas, supostamente limitadas a ferramentas de bronze e trabalho humano, criaram estruturas que teríamos dificuldade em construir hoje? A precisão matemática da pirâmide, seu alinhamento com corpos celestes e o conhecimento sofisticado de pi e da proporção áurea embutidos em seu design sugerem intervenção de seres com conhecimento avançado.

Considere as pedras maciças de Baalbek no Líbano, algumas pesando mais de 800 toneladas, ou as pedras precisamente cortadas e encaixadas de Sacsayhuamán no Peru. Estes monumentos compartilham características que transcendem fronteiras geográficas e temporais, sugerindo uma fonte comum de conhecimento avançado.`,
    artifacts: ["textos_sagrados", "mapas_estelares", "tecnologia_antiga"]
  },  astronauts: {
    icon: Rocket,
    image: "/img2.jpg",
    content: `Ao longo da história, culturas de todo o globo registraram encontros com seres vindos do céu. Textos antigos descrevem "deuses" que desceram dos céus em veículos cuspidores de fogo, trazendo conhecimento e tecnologia para os primeiros humanos.

Os textos sumérios falam dos Anunnaki, seres que vieram do céu. Épicos hindus descrevem vimanas - veículos voadores com especificações técnicas detalhadas. Relatos bíblicos falam da roda de Ezequiel, uma nave com rodas giratórias e luzes brilhantes que desafiava qualquer explicação terrena.

Estes não eram meros mitos ou alegorias. A consistência destes relatos através de civilizações desconectadas sugere encontros reais com visitantes extraterrestres. A teoria dos astronautas antigos propõe que estes seres guiaram o desenvolvimento humano, explicando os saltos súbitos na civilização que a arqueologia não consegue justificar.`,
    artifacts: ["visitantes_celestes", "textos_antigos", "vimanas"]
  },  gods: {
    icon: Star,
    image: "/img3.jpg",
    content: `Os deuses da mitologia antiga não eram seres sobrenaturais, mas extraterrestres de carne e osso com tecnologia avançada. Suas habilidades - voo, imortalidade, criação da vida - podem ser explicadas através de ciência superior em vez de magia divina.

Arte antiga retrata estes "deuses" com capacetes, aparelhos respiratórios e painéis de controle. O deus sumério Enlil carregava o que parece ser um dispositivo de comunicação. Representações egípcias mostram seres com crânios alongados e ferramentas avançadas. Arte maia inclui figuras no que parecem ser trajes espaciais operando máquinas complexas.

Estes seres estabeleceram-se como deuses para humanos primitivos, usando sua tecnologia para criar admiração e estabelecer controle. Eles ensinaram agricultura, matemática, astronomia e engenharia - conhecimento que permitiu à civilização florescer, mas estava muito além do que os primeiros humanos poderiam ter desenvolvido independentemente.`,
    artifacts: ["capacetes_antigos", "comunicacao", "paineis_controle"]
  },  pyramids: {
    icon: Pyramid,
    image: "/img4.jpg",
    content: `As pirâmides são mais que túmulos - são máquinas sofisticadas projetadas por arquitetos extraterrestres. Seus alinhamentos astronômicos precisos, câmaras internas complexas e perfeição matemática servem propósitos que estamos apenas começando a entender.

O alinhamento da Grande Pirâmide com Órion, sua relação com a velocidade da luz codificada em suas medidas e suas propriedades acústicas sugerem que funcionava como um farol ou dispositivo de comunicação. Os textos das pirâmides falam da jornada do faraó às estrelas, não metaforicamente, mas como um processo tecnológico real.

Mapas estelares encontrados em túmulos egípcios mostram conhecimento de corpos celestes invisíveis a olho nu. O zodíaco de Dendera retrata constelações com precisão que requer observação telescópica. Este conhecimento astronômico foi dado à humanidade por visitantes que viajavam entre estrelas.`,
    artifacts: ["mapa_estelar", "camara_acustica", "alinhamento_celestial"]
  },  nazca: {
    icon: MapPin,
    image: "/img5.jpg",
    content: `As Linhas de Nazca do Peru apresentam um dos maiores mistérios da arqueologia. Estes geoglifos maciços, alguns se estendendo por quilômetros, só podem ser totalmente apreciados do ar. Ainda assim, foram criados por uma civilização que supostamente não tinha conhecimento de voo.

A precisão destas linhas, suas proporções geométricas perfeitas e seu alinhamento com fenômenos astronômicos sugerem que serviam como pistas de pouso e auxílios de navegação para veículos aéreos. As figuras de animais - algumas representações cientificamente precisas de criaturas não nativas da região - podem representar mapas estelares ou guias de constelações.

Descobertas recentes revelaram que as linhas foram criadas usando técnicas de levantamento sofisticadas e mantêm sua retidão através de vastas distâncias, apesar da curvatura da Terra. Este nível de precisão requer conhecimento de geometria esférica que supostamente era desconhecido pelos povos antigos.`,
    artifacts: ["geoglifo", "vista_aerea", "precisao_geometrica"]
  },  biblical: {
    icon: BookOpen,
    image: "/img6.jpg",
    content: `Relatos bíblicos, quando examinados sem preconceitos religiosos, descrevem numerosos encontros com seres extraterrestres e sua tecnologia. A descrição detalhada de Ezequiel de uma roda dentro de uma roda, completa com criaturas vivas e cúpulas cristalinas, lê como um relatório moderno de avistamento de OVNI.

Os "anjos" que visitaram Abraão, Ló e outras figuras bíblicas exibiam características físicas e comportamentos consistentes com visitantes alienígenas: eles comiam comida, tinham formas físicas e possuíam tecnologia que parecia milagrosa para observadores antigos. A coluna de fogo que guiou os israelitas pelo deserto corresponde a descrições de avistamentos de OVNIs ao longo da história.

A história de Enoque, que foi levado ao céu numa carruagem de fogo, paralela a relatos de abdução alienígena. Suas descrições detalhadas de tecnologia avançada, incluindo palácios de cristal e seres com grande conhecimento, sugerem experiência de primeira mão com civilização extraterrestre.`,
    artifacts: ["roda_ezequiel", "coluna_fogo", "carruagem_celestial"]
  },  sumerian: {
    icon: Scroll,
    image: "/img7.jpg",
    content: `As tábuas sumérias contêm os registros escritos mais antigos da humanidade e descrevem em detalhes a chegada dos Anunnaki - seres do céu que estabeleceram a civilização na Terra. Estes textos, anteriores à Bíblia por milênios, fornecem uma explicação tecnológica em vez de sobrenatural para as origens humanas.

As tábuas descrevem engenharia genética avançada, viagem espacial e tecnologia sofisticada. Elas falam dos Anunnaki criando humanos como força de trabalho, usando manipulação genética para combinar seu próprio DNA com o de hominídeos primitivos. Esta explicação justifica o elo perdido na evolução humana que a teoria de Darwin não consegue abordar.

A astronomia suméria era impossivelmente avançada para sua época, incluindo conhecimento de todos os planetas em nosso sistema solar e descrições precisas de mecânica celeste. Este conhecimento foi atribuído aos ensinamentos dos Anunnaki, que vieram de um planeta distante em nosso sistema solar.`,
    artifacts: ["tabua_cuneiforme", "engenharia_genetica", "sistema_solar"]
  },  easter: {
    icon: Mountain,
    image: "/img8.jpg",
    content: `As estátuas moai maciças da Ilha de Páscoa representam um dos mistérios mais intrigantes da arqueologia. Estes quase 1.000 gigantes de pedra, alguns pesando até 80 toneladas, foram de alguma forma transportados pela ilha e posicionados com precisão que desafia explicação dadas as ferramentas disponíveis para o antigo povo Rapa Nui.

Análises recentes revelaram que as estátuas têm corpos enterrados no subsolo, e muitas contêm propriedades acústicas sofisticadas. As tradições orais falam das estátuas "caminhando" para suas posições - uma descrição que pode indicar tecnologia antigravitacional em vez de métodos primitivos de transporte.

A localização remota da ilha, a 2.300 milhas da terra povoada mais próxima, levanta questões sobre como ela foi descoberta e colonizada. As técnicas avançadas de trabalho em pedra, os alinhamentos astronômicos das estátuas e a misteriosa escrita rongorongo sugerem influência de visitantes tecnologicamente avançados.`,
    artifacts: ["estatua_moai", "escrita_rongorongo", "propriedades_acusticas"]
  },  technology: {
    icon: Cpu,
    image: "/img9.jpg",
    content: `Descobertas arqueológicas mundiais revelam tecnologia que não deveria existir de acordo com cronologias históricas convencionais. O mecanismo de Antikythera, um dispositivo grego de 2.000 anos, contém trens de engrenagens sofisticados o suficiente para prever eclipses e movimentos planetários com precisão semelhante a computadores.

Textos antigos descrevem aeronaves, submarinos e armas de destruição em massa. O Ramayana detalha vimanas com especificações para sua construção e operação. O Mahabharata descreve armas que soam notavelmente como dispositivos nucleares, completas com relatos de doença da radiação e devastação ambiental.

Evidências de metalurgia avançada, corte de pedra de precisão e conhecimento eletromagnético existem em artefatos de todas as civilizações antigas. A Bateria de Bagdá, furos perfurados com precisão em granito e artefatos mostrando detalhes microscópicos sugerem acesso a tecnologia muito além do que culturas primitivas deveriam possuir.`,
    artifacts: ["antikythera", "bateria_bagda", "corte_precisao"]
  },  return: {
    icon: Eye,
    image: "/img10.jpg",
    content: `Os textos antigos e profecias de todas as principais civilizações falam do retorno dos deuses. Estes relatos descrevem um tempo quando os seres do céu voltariam à Terra, julgariam o progresso da humanidade e inaugurariam uma nova era de iluminação.

Avistamentos modernos de OVNIs, aumentando em frequência e reconhecimento oficial, podem representar reconhecimento preliminar para este retorno profetizado. A tecnologia avançada exibida por estas naves corresponde a descrições de relatos antigos, sugerindo que os mesmos seres estão se preparando para contato renovado.

A aceleração do desenvolvimento tecnológico humano no século passado - de carruagens puxadas por cavalos a viagem espacial em menos de 70 anos - pode ser preparação para reunião com nossos ancestrais extraterrestres. Estamos nos aproximando do nível tecnológico necessário para nos juntarmos novamente à comunidade galáctica.`,
    artifacts: ["ovni_moderno", "profecia_antiga", "aceleracao_tecnologica"]
  }
};

export const artifactDescriptions: Record<string, string> = {
  textos_sagrados: "Descrições detalhadas de deuses do céu",
  mapas_estelares: "Conhecimento astronômico avançado",
  tecnologia_antiga: "Artefatos que desafiam explicações",
  visitantes_celestes: "Relatos de seres vindos das estrelas",
  textos_antigos: "Registros históricos de encontros",
  vimanas: "Veículos voadores descritos em textos",
  capacetes_antigos: "Equipamentos de proteção alienígenas",
  comunicacao: "Dispositivos de comunicação avançada",
  paineis_controle: "Tecnologia de controle sofisticada",
  mapa_estelar: "Cartas celestes precisas",
  camara_acustica: "Propriedades sonoras especiais",
  alinhamento_celestial: "Orientação astronômica precisa",
  geoglifo: "Desenhos gigantes visíveis do alto",
  vista_aerea: "Perspectiva que requer voo",
  precisao_geometrica: "Medidas impossíveis para a época",
  roda_ezequiel: "Descrição bíblica de nave espacial",
  coluna_fogo: "Guia luminoso no deserto",
  carruagem_celestial: "Transporte divino aos céus",
  tabua_cuneiforme: "Registros sumérios dos Anunnaki",
  engenharia_genetica: "Criação da humanidade",
  sistema_solar: "Conhecimento astronômico completo",
  estatua_moai: "Gigantes de pedra misteriosos",
  escrita_rongorongo: "Sistema de escrita não decifrado",
  propriedades_acusticas: "Características sonoras especiais",
  antikythera: "Computador astronômico grego",
  bateria_bagda: "Dispositivo elétrico antigo",
  corte_precisao: "Técnicas de corte avançadas",
  ovni_moderno: "Avistamentos contemporâneos",
  profecia_antiga: "Previsões do retorno",
  aceleracao_tecnologica: "Desenvolvimento humano acelerado"
};
