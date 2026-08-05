const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Placeholder para a foto de perfil gerada */}
        <img 
          src="/profile_generated.png" // Salve a imagem gerada como profile_generated.png em /public
          alt="Luiz Henrique Carvalho Fontes"
          className="w-40 h-40 rounded-full border-4 border-teal-400 mb-6 object-cover"
        />
        <h1 className="text-5xl font-extrabold mb-2">Luiz Henrique Carvalho Fontes</h1>
        <p className="text-xl text-gray-400 mb-8">Desenvolvedo Full Stack | Java | Spring boot | MySQL | React | TypeScript</p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-teal-500 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-teal-400 transition">Ver Projetos</a>
          <a href="https://www.linkedin.com/in/luiz-henrique-carvalho-fontes-27a041281" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-6 py-3 rounded-full font-bold hover:bg-gray-700 transition">LinkedIn</a>
        </div>
      </div>
    </header>
  );
};

export default Header;