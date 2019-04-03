import {Fragment} from 'react'
import Link from 'next/link'
import {colors} from '../../styles/constants'

const NavLink = (props) => (
  <Fragment>
    <Link href={props.route}>
      <a>{props.title}</a>
    </Link>
    <style jsx>{`
      a {
        text-decoration: none;
        padding: calc(.5vh + .5vw) 0;
          color: ${colors.light};
        transition: 0.3s;
        text-align: right;
        box-sizing: border-box;
        background-image: linear-gradient(to right, #F2F2F2 50%, #FF4040 50%);
        background-size: 200% 100%;
        background-repeat: no-repeat;
        background-position: -100% 50%;
      }
  
      a:hover {
        padding: calc(.5vh + .5vw) 1vw calc(.5vh + .5vw) 4vw;
        color: ${colors.primary};
        font-size: 85%;
        background-position: 0% 50%;
        transition: font-size .1s ease-in, background-position .25s ease-out, color .1s ease-in .1s;
      }
    `}</style>
  </Fragment>
)

export default NavLink