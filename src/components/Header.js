import { useSelector } from "react-redux"

const Header = () => {

    // const site=useSelector(state=>state.site)

    // console.log(site)

    const {dark,language}=useSelector(state=>state.site)

  return (
    <div>
        dark mode ={dark ? 'evet': 'hayir'}
        <hr />
        language={language}
    </div>
  )
}

export default Header