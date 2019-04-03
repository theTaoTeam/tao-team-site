import Link from 'next/link'
import {colors} from '../styles/constants'

const Header = (props) => (
  <div className="header">
    <Link href="/">
      <a title="Home">
        <img src="/static/icon-dark.png" alt="Tao Team Icon"/>
      </a>
    </Link>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.271 11.074" onClick={props.onMenuOpen}>
      <g id="hamburger" data-name="hamburger" transform="translate(-313.729 -46)">
        <line id="Line_1" data-name="Line 1" x2="33.271" transform="translate(313.729 47)" fill="none" strokeWidth="2" />
        <line id="Line_2" data-name="Line 2" x2="33.271" transform="translate(313.729 56.074)" fill="none" strokeWidth="2" />
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