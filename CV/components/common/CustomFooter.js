
export class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="footer__left">
                    <span class="footer__copyright">© 2026 Andres Mallea Acebey</span>
                </div>
                <div class="footer__right">
                    <a href="https://github.com/Andress-Mallea" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" class="footer__icon"></a>
                    
                    <a href="mailto:andresmallea3@gmail.com"><img src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_48dp.png" class="footer__icon" alt="Gmail"></a>
                    
                    <a href="https://www.linkedin.com/in/andres-mallea-acebey-2aa96a303?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank"><img src="assets/icono-linkedin-blanco.png" class="footer__icon"</a>
                    
                    <a href="https://www.instagram.com/dragonpaixd?igsh=MWNtdmpmd3B5aDB3aw==" target="_blank"><img src="assets/Instagram-White-PNG-Image.png" class="footer__icon" alt="Instagram"></a>
                </div>
            </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);