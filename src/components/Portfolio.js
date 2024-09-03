import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'Description du projet 1. Il s’agit d’une brève description du projet.',
    imageUrl: 'https://via.placeholder.com/300x200', // Remplacez par l'URL de votre image
    link: '#', // Lien vers le projet ou page détaillée
  },
  {
    title: 'Project 2',
    description: 'Description du projet 2. Ce projet illustre une autre compétence.',
    imageUrl: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    title: 'Project 3',
    description: 'Description du projet 3. Voici un autre exemple de votre travail.',
    imageUrl: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    title: 'Project 4',
    description: 'Description du projet 4. Montrez votre diversité avec ce projet.',
    imageUrl: 'https://via.placeholder.com/300x200',
    link: '#',
  },
];

const Portfolio = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-5 text-center">Mon Portfolio</h1>
      <p className="text-xl text-center mb-10">Découvrez mes projets récents.</p>
      
      {/* Ajoutez une galerie ici */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:text-blue-700 font-semibold">Voir plus</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
