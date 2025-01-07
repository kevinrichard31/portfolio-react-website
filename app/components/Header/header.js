"use client";
import './style.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Switchtheme from "../Switchtheme/switchtheme";

function Header({ projectsRef }) {
    const [rotatingIcon, setRotatingIcon] = useState(null);
    const [showHeader, setShowHeader] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setShowHeader(false); // Cacher le header
            } else {
                setShowHeader(true); // Afficher le header
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleRedirect = (url, icon) => {
        setRotatingIcon(icon); // Définir l'icône qui va tourner
        setTimeout(() => {
            window.open(url, "_blank");
            setRotatingIcon(null); // Remettre l'icône à son état normal après la redirection
        }, 1000); // 1 seconde pour l'animation
    };

    const goToProjects = (e) => {
        e.preventDefault();
        // Si on est sur la page d'accueil
        console.log('hello')
        console.log(window.location.pathname)
        if (window.location.pathname === "/") {
            // Scroll vers la section via ref
            console.log(projectsRef.current)
            if (projectsRef.current) {
                projectsRef.current.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Si on est sur une autre page, on redirige vers l'ancrage
            window.location.href = "/#all-projects";
        }
    };

    return (
        <div className={`navbar bg-base-200 header-wrapper ${showHeader ? "visible-navbar" : "hidden-navbar"}`}>
            <div className="flex-1">
                <div>
                    {/* Le bouton "Études de cas" qui gère le comportement en fonction de la page */}
                    <a href="#all-projects" onClick={goToProjects} className="menu-top">
                        Études de cas
                    </a>
                </div>
            </div>
            <div className="flex-none">
                <Switchtheme />

                <button
                    onClick={() => handleRedirect("https://github.com/kevinrichard31?tab=repositories", "github")}
                    className="btn btn-square btn-ghost"
                >
                    <FaGithub className={`min-h-10 min-w-10 ${rotatingIcon === "github" ? "rotate" : ""}`} />
                </button>
                <button
                    onClick={() => handleRedirect("https://www.linkedin.com/in/kevinrichard-tech/", "linkedin")}
                    className="btn btn-square btn-ghost"
                >
                    <FaLinkedin className={`min-h-10 min-w-10 ${rotatingIcon === "linkedin" ? "rotate" : ""}`} />
                </button>
            </div>
        </div>
    );
}

export default Header;
