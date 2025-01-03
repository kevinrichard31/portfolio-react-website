import './style.css'


function Heroscene() {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="./images/profile-photo.jpg"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <div className="flex flex-col">
                            <div className="kadwa-500 text-2xl md:text-3xl">Kevin Richard</div>

                            <div className="hidden md:block">Développeur Front-End</div>
                        </div>
                        <a href="https://www.coursera.org/account/accomplishments/professional-cert/A8554CQ8T7IL" target='_blank'>
                            <div className=" bg-white p-2 px-4 mt-8 border border-[#c0c0c0]">
                                <div className='meta-skills'>Certifié par : </div>
                                <img src="./images/logos/meta-platform-logo.svg" alt="Meta Platform Logo" className="meta-logo" />
                                <p className="pt-4 meta-skills">React, React Avancé, Javascript, Tests unitaires, <br></br>
                                    Git, html/css, UX/UI design</p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Heroscene;