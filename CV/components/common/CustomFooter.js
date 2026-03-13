export class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="footer">
                <div class="footer__content">
                    <div class="footer__contacts">
                        <h3 class="footer__title"> Contactos</h3>
                        <div class="footer__contacts-info">
                            <p class="footer__contacts-container">PHONE: 591-690-045-34 </p>
                            <p class="footer__contacts-container">EMAIL: Andresmallea3@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);