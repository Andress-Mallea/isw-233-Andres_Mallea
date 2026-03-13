// pages/Home.js
export class HomeView extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="home-page">
                <section class="name-card">
                    <div class="name-card__image-container">
                        <img src="/assets/Image__Optimus-Prime.jpeg" alt="Foto de Andres Mallea" class="name-card__photo">
                    </div>
                    <div class="name-card__content">
                        <h1 class="name-card__name">Andres Matias Mallea Acebey</h1>
                        <h2 class="name-card__title">Desarrollador De Software</h2>
                        <h3 class="name-card__contacts">Contactos</h3>
                        <div class="name_card__contacts-info">
                            <p class="name-card__contacts-container">PHONE: 591-690-045-34</p>
                            <p class="name-card__contacts-container">EMAIL: Andresmallea3@gmail.com</p>
                        </div>
                    </div>
                </section>

                <section class="Sobre-mi">
                    <div class="Sobre-mi__encabezado"> <h2 class="Sobre-mi__title">Sobre Mi</h2>
                        <div class="Sobre-mi__buttons">
                            <span class="Sobre-mi__button Sobre-mi__button--minimize"><img src="/assets/minimizar2.png" class="button-icon"></span>
                            <span class="Sobre-mi__button Sobre-mi__button--maximize"><img src="/assets/ventana.webp" class="button-icon"></span>
                            <span class="Sobre-mi__button Sobre-mi__button--close">X</span>
                        </div>
                    </div>
                    <div class="Sobre-mi__container">
                        <div class="Sobre-mi__container-left">
                            <h3 class="Sobre-mi__content-title"> >> Perfil Profesional</h3>
                            <p class="Sobre-mi__content">Estudiante de Ingeniería de Software con sólida base en algoritmia y
                                                        desarrollo multiplataforma. Galardonado dos veces a nivel nacional
                                                        en el NASA Space Apps Challenge, demostrando capacidad de innovación
                                                        y resolución de problemas en tiempo récord. Participante activo en
                                                        programación competitiva (ICPC). Poseo un nivel de inglés C1 y
                                                        dominio técnico en C++, Python y Java. Busco una oportunidad para
                                                        aportar mi capacidad analítica y liderazgo en un entorno de
                                                        desarrollo desafiante
                            </p>
                            <h3 class="Sobre-mi__content-title">>> Experiencia</h3>
                            <p class="Sobre-mi__content">Experiencias en Hackatones tales como el Nasa Space Apps. Donde se
                                participo  en los años 2024 y 2025
                            </p>
                            <p class="Sobre-mi__content">Experiencia de haber participado en la competencia de programacion 
                                llamada ICPC
                            </p>
                            <p class="Sobre-mi__content">Experiencia desarrollando paginas web en Java Script y  usando el 
                                framework llamado Angular
                            </p>
                            <p class="Sobre-mi__content">Experiencia ligera usando los sigueintes lenguajes de programcion: c++,
                                c#, java y python
                            </p>
                        </div>
                        <div class="Sobre-mi__container-line"></div>
                        <div class="Sobre-mi__container-right">
                            <h3 class="Sobre-mi__content-title">>> Educacion</h3>
                                <p class="Sobre-mi__content">Licenciatura en Ingeniería de Software | Universidad</p>
                                <p class="Sobre-mi__content-not-first-line"> Catolica Boliviana </p>                              
                                <p class="Sobre-mi__content-not-first-line"> Eestado: En Curso  </p>                             
                                <p class="Sobre-mi__content-not-first-line"> Enfoque en Ciencias de la Computación y Desarrollo de Software. </p>                             
                                <p class="Sobre-mi__content-not-first-line"> Bachiller en humanidades Colegio Mayor San Lorenzo</p>
                            <h3 class="Sobre-mi__content-title Sobre-mi__content-title-skills-and-hobbies">>> Habilidades</h3>
                                <p class="Sobre-mi__content-skills-and-hobbies"> Idiomas:</p>
                                <p class="Sobre-mi__content-not-first-line"> - Español: Nativo.  </p>                              
                                <p class="Sobre-mi__content-not-first-line"> - Inglés: Avanzado (Nivel C1) - Fluido profesionalmente.</p>                             
                                <p class="Sobre-mi__content-not-first-line"> - Esperanto: Básico. </p>                             
                                <p class="Sobre-mi__content-not-first-line"> Trabajo bajo Presión </p>
                                <p class="Sobre-mi__content-not-first-line"> Liderazgo  </p>
                                <p class="Sobre-mi__content-not-first-line"> Resolución de Problemas </p>
                                <p class="Sobre-mi__content-not-first-line"> Oratoria </p>
                            <h3 class="Sobre-mi__content-title Sobre-mi__content-title-skills-and-hobbies">>> Hobbies</h3>
                                <p class="Sobre-mi__content-skills-and-hobbies"> Video Juegos:</p>
                                <p class="Sobre-mi__content-not-first-line"> Dibujar   </p>                              
                                <p class="Sobre-mi__content-not-first-line"> Filosofia </p>                             
                                <p class="Sobre-mi__content-not-first-line"> Literatura </p>   
                        </div>
                    </div>
                </section>
            </div>
        `;
    }
}
customElements.define('home-view', HomeView);