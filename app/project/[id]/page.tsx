import fs from 'fs';
import path from 'path';

import ReactMarkdown from 'react-markdown';

// Fonction qui récupère les fichiers Markdown et les rend en HTML
export default async function Page({ params }) {
  const { id } = await await params;

  // Chemin vers le dossier où sont stockés les fichiers Markdown
  const filePath = path.join(process.cwd(), 'app', 'components', 'Projects', `${id}.md`);

  // Lire le fichier Markdown
  let markdownContent = '';
  try {
    markdownContent = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    markdownContent = 'Le fichier Markdown n\'a pas été trouvé pour ce projet.';
  }



  return (
    <div className="p-10">
      <h1>Project: {id}</h1>
      {/* Utilisation de ReactMarkdown pour afficher le contenu Markdown */}
      <div className="markdown-content">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
}
