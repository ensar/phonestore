import React from 'react'
import { FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <div style={{textAlign:"center",background:"#ddd",padding:"20px"}}>
           <a href="https://github.com/ensar"><FaGithub  style={{fontSize:"35px",color:"#000"}}/></a> 
        </div>
    )
}

export default Footer
