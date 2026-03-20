
export class HomeView extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="login-screen">
                <div class="login-card">
                    <div class="login-card__avatar-frame">
                        <img src="/assets/PF.jpeg" class="login-card__avatar">
                    </div>
                    <h1 class="login-card__name">Andres Matias Mallea Acebey</h1>
                    <p class="login-card__status">Desarrollador de Software</p>
                    <div class="login-card__action">
                        <button class="login-card__button" id="btn-contact">
                            Contact me
                        </button>
                    </div>
                </div>
            </div>
        `;
        this.querySelector('#btn-contact').onclick = () => {
            window.location.href = "mailto:Andresmallea3@gmail.com";
        };
    }
}
customElements.define('home-view', HomeView);