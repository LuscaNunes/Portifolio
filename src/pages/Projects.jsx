// src/pages/Projects.jsx
import Card from "../components/Card";
import Engrenagem from "../assets/Engrenagem.png"; // Importa a imagem

const projects = [
  {
    title: "Projeto Consulta CEP",
    description: "Este projeto é uma aplicação web que permite aos usuários consultar informações de localidade a partir de um CEP (Código de Endereçamento Postal). Desenvolvido com React, o sistema consome uma API externa (como a ViaCEP ou API de CEP do Brasil) para buscar dados como logradouro, bairro, cidade e estado. A interface é simples, intuitiva e responsiva, proporcionando uma experiência de usuário fluida e eficiente.",
    image: Engrenagem,
    link: "https://github.com/LuscaNunes/ConsultaCEP",
  },
  {
    title: "Projeto Formulário com validação de idade",
    description: "Este projeto é um formulário de cadastro interativo que utiliza JavaScript para validação dinâmica dos campos com base na idade do usuário. Se o usuário tiver menos de 18 anos, os campos de Nome do Pai e Nome da Mãe tornam-se obrigatórios. O formulário foi desenvolvido com foco em usabilidade e experiência do usuário, garantindo que todas as validações sejam claras e intuitivas",
    image: Engrenagem,
    link: "https://github.com/LuscaNunes/Formul-rio-de-Cadastro-com-Valida-es-web-1",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projetos</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;