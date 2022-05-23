class NavigatorElement extends HTMLElement{
    constructor(){
        super();
       this.thing = `<div class="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="logo-apple"></ion-icon></span>
                        <span class="title">Nutrice</span>
                    </a>
                </li>
                <li>
                    <a href="./index.html">
                        <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                        <span class="title">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="./customers.html">
                        <span class="icon"><ion-icon name="people-outline"></ion-icon></span>
                        <span class="title">Clientes</span>
                    </a>
                </li>
                <li>
                    <a href="./progress.html">
                        <span class="icon"><ion-icon name="restaurant-outline"></ion-icon></span>
                        <span class="title">Progreso de Preparación</span>
                    </a>
                </li>
                <li>
                    <a href="./settings.html">
                        <span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
                        <span class="title">Configuración</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="help-outline"></ion-icon></span>
                        <span class="title">Ayuda</span>
                    </a>
                </li>
                <li>
                    <a href="./logout.html">
                        <span class="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                        <span class="title">Cerrar Sesión</span>
                    </a>
                </li>
            </ul>
        </div>`;
    }
    connectedCallback(){
this.innerHTML = this.thing;
    }
}
window.customElements.define("navigation-bar", NavigatorElement)