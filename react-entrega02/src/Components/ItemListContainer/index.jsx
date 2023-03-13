function Lista({nombre}) {
    return(
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {nombre}
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Trek</a></li>
                <li><a class="dropdown-item" href="#">KTM</a></li>
                <li><a class="dropdown-item" href="#">Vairo</a></li>
                <li><a class="dropdown-item" href="#">SPL</a></li>                
            </ul>
            </li>
    )
}

export default Lista