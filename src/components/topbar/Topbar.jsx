import "./topbar.scss"
import {Person,Mail, LinkedIn, GitHub} from "@mui/icons-material"

export default function topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">My Portfolio</a>
          <div className="itemContainer">
              <Person className="icon"/>
              <span>+91 8697380479</span>
          </div>
          <div className="itemContainer">
              <Mail className="icon"/>
              <span>rounak.krshaw.met20@itbhu.ac.in</span>
          </div>
          <div className="itemContainer">
              <LinkedIn className="icon"/>
              <span>linkedin.com/in/rounak-kr-shaw-907ba3227</span>
          </div>
          <div className="itemContainer">
              <GitHub className="icon"/>
              <span>github.com/Rounak-2002</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
