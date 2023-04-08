import React from "react";


function footer(){
    return (
        <div>
        <footer class=" text-center text-lg-start  text-muted mt-3">
        <div class="text-center">
            <a aria-label="Volver arriba" href="#"style="text-decoration:none;">
                <i class="text-danger fa-sharp fa-solid fa-circle-arrow-up fa-beat" style="--fa-animation-duration: 5s;"></i>
                <h6 class="text-danger">Volver arriba</h6>
            </a>
        </div>
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div class="me-5 d-none d-lg-block">
            <span>Conéctate con nosotros en las redes sociales:</span>
            </div>
            <div>
                <a href="" class="me-3 text-danger"><i class="fa-brands fa-facebook fa-xl"></i></a>
                <a href="" class="me-3 text-danger"><i class="fa-brands fa-twitter fa-xl"></i></a>
                <a href="" class="me-3 text-danger"><i class="fa-brands fa-google fa-xl"></i></a>
                <a href="" class="me-3 text-danger"><i class="fa-brands fa-instagram fa-xl"></i></a>
                <a href="" class="me-3 text-danger"><i class="fa-brands fa-linkedin fa-xl"></i></a>
                <a href="" class="me-3 text-danger"><i class="fa-brands fa-github fa-xl"></i></a>
            </div>
        </section>
        <section class="">
            <div class="container text-center text-md-start mt-5">
                <div class="row mt-3">
                    <div class="col-md-3 col-xs col-md col-lg col-xl-3 mx-auto mb-4">
                        <h6 class="text-center fw-bold mb-4">BIKESHOP</h6>
                        <img src="" class="text-center w-75" alt="">
                    </div>
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">COMPAÑIA</h6><p>
                        <a href="#!"class="text-reset">Nuestros Servicios</a></p>
                        <p><a href="#!" class="text-reset">Sobre Nosotros</a></p>
                        <p><a href="#!" class="text-reset">Politica y privacidad</a></p>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">Compra Online</h6><p>
                        <a href="#!" class="text-reset">Smart-Watch</a></p>
                        <p><a href="#!" class="text-reset">Vestimenta</a></p>
                        <p><a href="#!" class="text-reset">Accesorios</a></p>
                    </div>
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">Contactos</h6>
                        <p><i class="fa-sharp fa-solid fa-house"></i> Argentina,Mendoza </p>
                        <p><i class="fa-sharp fa-solid fa-check"></i> bikeshop@bikeshop.com</p>
                        <p><i class="fab fa-whatsapp"></i> +54 911 658 421</p>
                    </div>
                </div>
            </div>
        </section>
        <div class=" footer__end text-center p-4">© 2022 Copyright:
        <a class="text-reset fw-bold" href="#"> www.bikeshop.com.ar</a>
        </div>
    </footer>
        </div>
    )
}
export default footer;