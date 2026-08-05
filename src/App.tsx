import Header from "./components/Header/Header";
import ProjectCard from "./components/ProjectCard/ProjectCard";


const projects = [
  {
    title: 'biblioteca-gp5',
    description: 'Um sistema de gerenciamento de biblioteca desenvolvido para facilitar o controle de acervo e empréstimos.',
    tech: ['React', 'TypeScript', 'Spring boot', 'Java', 'MySQL'],
    github: 'https://github.com/LuizHenriqueCFontes/biblioteca-gp5',
  },
  {
    title: 'abrigo animais',
    description: 'Plataforma web para conectar animais de rua com possíveis adotantes, com foco em usabilidade e compaixão.',
    tech: ['React', 'TypeScript'],
    github: 'https://github.com/LuizHenriqueCFontes/abrigo-animais',
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <Header />
      
      <main className="max-w-7xl mx-auto py-16 px-6">
        <section id="projects" className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Meus Projetos Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        <section id="contact" className="bg-gray-900 p-10 rounded-2xl text-center border border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-white">Vamos Conversar?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Estou em busca de oportunidades como desenvolvedor júnior. Se você gostou do meu perfil ou dos meus projetos, entre em contato pelo LinkedIn!
          </p>
          <a 
            href="https://www.linkedin.com/in/luiz-henrique-carvalho-fontes-27a041281" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-teal-500 text-gray-900 px-8 py-4 rounded-full font-extrabold text-lg hover:bg-teal-400 transition-transform hover:scale-105"
          >
            Conectar no LinkedIn
          </a>
        </section>
      </main>

      <footer className="border-t border-gray-800 bg-gray-950 py-8 text-center mt-16">
        <p className="text-gray-600 text-sm">
          &copy; 2026 Luiz Henrique Carvalho Fontes. Desenvolvido com React, TS e Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default App;
