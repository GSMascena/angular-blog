export type data = {
  id : number,
  photo : string,
  title : string,
  description : string
}

export const dataFake : data[] = [
  {
    id: 1,
    photo: "https://i.imgur.com/hLUaM0m.jpg",
    title: "Seja Bem Vindo ao meu Blog",
    description: "Olá, eu sou Gabriel Mascena, um Dev apaixonado por desenvolvimento e aprendizado, você está agora em um blog que eu criei em Angular, utilizando meus conhecimentos de HTML, CSS e Javascript (Typescript) durante o bootcamp da Dio, e a foto da notícia? bem eu gosto muito de gatos e ratos."
  },
  {
    id: 2,
    photo: "https://i.imgur.com/Imk3Dr5.jpg",
    title: "Formação",
    description: `Eu sou formado em ciências da computação e mecatrônica industrial, uma particularidade que muita gente levanta quando ouve isso e descobre minha idade é "Você fez duas faculdades ao mesmo tempo" sim eu fiz, e tinha muito tempo livre e uma grande vontade de aprender hahaha. Eu acredito que esse seja meu forte, me adaptar a diversos cenários e sempre ter esse impeto para aprender.`
  },
  {
    id: 3,
    photo: "https://i.imgur.com/rvDcfna.jpg",
    title: "Minha Stack",
    description: `Com relação as minhas tecnologias, eu possuo uma noção ampla, já trabalhei bem com C#, Java e Python. Tenho confiança na minha habilidade com Javascript, HTML e CSS, apesar de ter mais afinidade com o back-end que o front-end. Trabalhei já com Jenkins, Git, XAML, Padrões de Design e com Solid e Clean Code. Possuo uma boa noção também de CRUD, tendo habilidade com a linguagem SQL, familiaridade com os bancos de dados Microsoft SQL Server e PostGreSQL e tendo já desenvolvido com Asp.Net e Spring e brincando com os ORMs Entity Framework e Hibernate`
  },
  {
    id: 4,
    photo: "https://i.imgur.com/lmORbAL.jpg",
    title: "Futuros Projetos",
    description: `Este é apenas um dos projetos que pretendo desenvolver para o meu portifólio, tenho grandes objetivos e talvez possa futuramente os noticiar nesse blog, obrigado pela atenção!`
  },
]
