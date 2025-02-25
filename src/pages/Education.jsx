// src/pages/Education.jsx
const education = [
    { title: "Bacharelado em Ciência da Computação", institution: "Universidade XYZ", year: "2020-2024" },
    { title: "Certificação em Desenvolvimento Web", institution: "Coursera", year: "2023" },
  ];
  
  const Education = () => {
    return (
      <section id="education">
        <h2>Formação Acadêmica e Certificações</h2>
        <ul>
          {education.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> - {item.institution} ({item.year})
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Education;