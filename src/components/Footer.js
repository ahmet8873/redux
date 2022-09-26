import { useSelector, useDispatch } from "react-redux";
import { setDarkMode, setLanguage } from "../stores/siteSlice";

const Footer = () => {

     const dispatch=useDispatch()
  const { dark, language } = useSelector((state) => state.site);
  const languages = ["tr", "en",'fr'];

  const handleLanguage=(lang)=>{
    dispatch(setLanguage(lang))
  }

  const handleDarkMode=()=>{
    dispatch(setDarkMode())
  }

  return (
    <div>
      footer
      <div>
        {languages.map((lang, index) => (
          <button className={lang===language ? 'active' :'' }onClick={()=>handleLanguage(lang)} key={index}>{lang}</button>
        ))}
      </div>
      <div>
        <button onClick={handleDarkMode}>{dark ?'light moda gec':'dark moda gec'}</button>
      </div>
    </div>
  );
};

export default Footer;
