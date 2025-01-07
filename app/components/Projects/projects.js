"use client";
import './style.css';
import { useState, forwardRef } from "react";
import Link from 'next/link'; // Importer Link de Next.js

const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      id: "portfolio",
      title: "Portfolio",
      description: "La conception du portfolio en détail, vous découvrirez la stack utilisée et ses composants.",
      imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    }
  ];

  return (
    <div className="bg-base-300 min-h-screen" ref={ref}>
      <h2 className='p-10 md:p-20 font-kadwa text-[50px] font-medium' id="all-projects">Études de cas</h2>
      <div className='projets-container p-15 gap-y-0'>
        {projects.map((project) => (
          <div key={project.id} className="card bg-base-100 w-96 shadow-xl mx-4">
            <figure>
              <img src={project.imageUrl} alt={project.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <div className="card-actions justify-end">
                <Link href={`/project/${project.id}`}>
                  <button className="btn btn-neutral">Découvrir le cas</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projects;
