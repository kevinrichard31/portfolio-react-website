"use client"
// Projects.js
import './style.css';
import { useState, forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  return (
    <div className="bg-base-300 min-h-screen" ref={ref}>
      <h2 className='p-10 md:p-20 font-kadwa text-[50px] font-medium'>Études de cas</h2>
      <div className='projets-container p-15 gap-y-0'>
        <div className="card bg-base-100 w-96 shadow-xl mx-4">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">Découvrir le cas</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl mx-4">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">Découvrir le cas</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl mx-4">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">Découvrir le cas</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl mx-4">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">Découvrir le cas</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;
