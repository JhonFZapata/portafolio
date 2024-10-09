import JsLogo from '../assets/images/svgs/javascript.svg'
import TsLogo from '../assets/images/svgs/typescript.svg'
import NodeLogo from '../assets/images/svgs/node-js.svg'
import PhpLogo from '../assets/images/svgs/php.svg'
import CsharpLogo from '../assets/images/svgs/csharp.svg'
import GithubLogo from '../assets/images/svgs/github.svg'
import LinkedinLogo from '../assets/images/svgs/linkedin.svg'

function Home() {


    return (
        <div id="inicio" className="h-screen flex flex-col md:flex-row items-center justify-center bg-black">
            {/* Foto */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-end p-4">
                <img src="https://avatars.githubusercontent.com/u/28166894?v=4" alt="Foto" className="w-2/3 md:w-full rounded-full" />
            </div>
            {/* Contenido a la derecha */}
            <div className="w-full md:w-2/4 text-center md:text-left p-4">
                {/* Titulo */}
                <h1 className="text-4xl font-bold text-[#2F2FBA]">Jhon Zapata</h1>
                {/* Sub-titulo */}
                <h2 className="text-2xl text-gray-200 mt-2">Desarrollador FullStack</h2>
                <p className="mt-4 text-gray-500">
                    Ingeniero desarrollador de sofware con experiencia en desarrollo backend, frontend y administración de servidores.
                </p>
                 {/* Boton  */}
                <a 
                    href="ruta-a-tu-cv.pdf" 
                    download="Mi_CV.pdf" 
                    className="mt-6 inline-block bg-[#2F2FBA] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#3D3D7A] transition">
                    Descargar CV
                </a>

             {/* Redes logos */}
            <div className="mt-6 flex space-x-4">
            
                <a href="https://github.com/JhonFZapata" target="_blank" rel="noopener noreferrer">
                    <img src={GithubLogo} alt="GitHub" className="w-8 h-8" />
                </a>

                <a href="https://www.linkedin.com/in/jhon-fernando-zapata-30a543126/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedinLogo} alt="Linkedin" className="w-10 h-10" />
                </a>
            </div>
             {/* Tecnologias */}
            <div className="mt-6 flex space-x-4">
                <img src={JsLogo} alt="JS" className="w-10 h-10" />
                <img src={TsLogo} alt="JS" className="w-9 h-10" />
                <img src={NodeLogo} alt="Node" className="w-10 h-10" />
                <img src={PhpLogo} alt="Node" className="w-10 h-10" />
                <img src={CsharpLogo} alt="Node" className="w-10 h-10" />
            </div>
            </div>

        </div>
    )
}

export default Home