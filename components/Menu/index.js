import NavLinks from './NavLinks'
import SocialLinks from './SocialLinks'
import { colors, fonts, viewport } from '../../styles/constants'

const Menu = (props) => (
  <div className="menu">
    <NavLinks />
    <SocialLinks />
    <style jsx>{`
      .menu {
        background-color: ${colors.primary}FD;
        font-family: ${fonts.headerFont};
        height: 100vh;
        position: fixed;
        z-index: 1;
        top: 0;
        right: 0;
        overflow-x: hidden;
        box-sizing: border-box;
        padding-top: 60px;
        transition: 0.5s;
        font-size: calc(59px + (100 - 59) * ((100vw - ${viewport.minVw}px) / (${viewport.maxVw} - ${viewport.minVw})));
      }
    `}</style>
    <style jsx>{`
      .menu {
        width: ${props.open ? "100vw" : 0};
        padding-right: ${props.open ? "5vw" : 0};
      }

      @media screen and (min-width: 600px) {
        .menu {
          width: ${props.open ? "70vw" : 0}
        }
      }
    `}</style>
  </div>
)

export default Menu