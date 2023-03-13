import Lista from "../ItemListContainer";
import CartWidget from "../CartWidget";
import { RxBox } from "react-icons/rx";
function NavBar() {
    return (
        <div>        
           <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                    <RxBox/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <Lista nombre="Bicicletas"/>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Accesorios</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Ofertas</a>
                        </li>
                        
                        <CartWidget cant={"10"}/>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}
export default NavBar