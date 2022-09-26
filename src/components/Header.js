import { useSelector } from "react-redux"
import {NavLink} from "react-router-dom"

const Header = () => {

    // const site=useSelector(state=>state.site)

    // console.log(site)

    const {dark,language}=useSelector(state=>state.site)

  return (
    <div>
      <nav>
        <NavLink to='/'  exact='true'>home</NavLink>
        <NavLink to='/About' exact='true'>about</NavLink>
        <NavLink to='/Galery' exact='true'>galery</NavLink>
      </nav>
       
          
    
          

        dark mode ={dark ? 'evet': 'hayir'} <br />
        
        language={language}
    </div>
  )
}

export default Header