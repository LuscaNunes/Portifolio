// src/pages/Skills.jsx
const skills = ["Desenvolvimento Front-end", "JavaScript", "HTML/CSS", "Git", "Node.js"];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Principais Habilidades</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;