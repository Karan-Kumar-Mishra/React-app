export default function Navbar(props) {
  
  return (
    <div classNameName={`"${props.mode}"`}>
  <nav className={` "navbar navbar-expand-lg bg-body-tertiary   ${props.mode}"`}>
   <div className={`"container-fluid ${props.mode}"`}>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4" href="/">About</a>
        </li>
        <li className="nav-item dropdown">
       
        
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">More</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 m-3 " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success m-3" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
