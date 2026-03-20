
export class EducationView extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="education-page-container">
                
                <section class="Sobre-mi education-window">
                    <div class="Sobre-mi__encabezado">
                        <h2 class="Sobre-mi__title">C:\\Users\\Andres\\Desktop\\Academic_History.edu</h2>
                        <div class="Sobre-mi__buttons">
                            <span class="Sobre-mi__button Sobre-mi__button--minimize">
                                <img src="assets/minimizar2.png" alt="Foto de Andres Mallea"  class="button-icon">
                            </span>
                            <span class="Sobre-mi__button Sobre-mi__button--maximize">
                                <img src="assets/ventana.webp" alt="Foto de Andres Mallea"  class="button-icon">
                            </span>
                            <span class="Sobre-mi__button Sobre-mi__button--close">X</span>
                        </div>
                    </div>

                    <div class="Sobre-mi__container education-container">
                        
                        <div class="edu-section">
                            <h3 class="edu-section__header">Education</h3>
                            <div class="education-grid">
                                <div class="xp-card">
                                    <div class="xp-card__icon-container">
                                        <img src="https://tja.ucb.edu.bo/wp-content/uploads/2020/09/logo-UCB.png" class="xp-card__icon">
                                    </div>
                                    <div class="xp-card__content">
                                        <h4 class="xp-card__title">Catholic Bolivian University</h4>
                                        <p class="xp-card__subtitle">Software Engineer</p>
                                        <p class="xp-card__info">2023 - 2028 | <span class="xp-card__status">En Curso</span></p>
                                    </div>
                                </div>

                                <div class="xp-card">
                                    <div class="xp-card__icon-container">
                                        <img src="https://cdn-icons-png.flaticon.com/512/167/167707.png" class="xp-card__icon">
                                    </div>
                                    <div class="xp-card__content">
                                        <h4 class="xp-card__title">Colegio Mayor San Lorenzo</h4>
                                        <p class="xp-card__subtitle">Bachiller en Humanidades</p>
                                        <p class="xp-card__info">Graduado</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="edu-divider"></div>

                        <div class="edu-section">
                            <h3 class="edu-section__header">Professional Certifications & Awards</h3>
                            <div class="education-grid">
                                <div class="xp-card xp-card--highlight">
                                    <div class="xp-card__icon-container">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" class="xp-card__icon">
                                    </div>
                                    <div class="xp-card__content">
                                        <h4 class="xp-card__title">NASA Space Apps Challenge</h4>
                                        <p class="xp-card__subtitle">National Winner (Moondust Crusaders)</p>
                                        <p class="xp-card__info">Galardonado 2 veces - Nivel Nacional</p>
                                    </div>
                                </div>

                                <div class="xp-card">
                                    <div class="xp-card__icon-container">
                                        <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" class="xp-card__icon">
                                    </div>
                                    <div class="xp-card__content">
                                        <h4 class="xp-card__title">Google AI Summit for Education</h4>
                                        <p class="xp-card__subtitle">Specialized Training</p>
                                        <p class="xp-card__info">Inteligencia Artificial aplicada</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        `;
    }
}
customElements.define('education-view', EducationView);