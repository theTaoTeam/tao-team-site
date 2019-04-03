import Link from 'next/link'
import {colors} from '../styles/constants'

const Header = (props) => (
  <div className="header">
    <Link href="/">
      <a title="Home">
        <img src="/static/icon-dark.png" alt="Tao Team Icon"/>
      </a>
    </Link>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-15 -15 30 30" onClick={props.onMenuOpen}>
      <g id="hamburger" data-name="hamburger">
        <line id="hamburger-top" x1="-15" x2="15" y1="-4" y2="-4" stroke-width="2" />
        <line id="hamburger-bottom" x1="-15" x2="15" y1="4" y2="4" stroke-width="2" />
      </g>
    </svg>
    <style jsx>{`
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
        padding: 2vh 5vw;
      }

      img {
        width: 30px;
      }

      svg {
        width: 24px;
      }

      svg:hover {
        cursor: pointer;
      }
    `}</style>
    <style jsx>{`
      svg {
        stroke: ${props.open ? colors.light : colors.dark};
      }
    `}</style>
  </div>
)

export default Header