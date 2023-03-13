function CartWidget({cant}) {
    return(
        <li class="nav-item">                      
            <button type="button" class="btn btn-body position-relative">
            <i class="fa-solid fa-cart-shopping"></i>                 
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cant}
            </span>
            </button>
        </li>
    
    )
}
export default CartWidget