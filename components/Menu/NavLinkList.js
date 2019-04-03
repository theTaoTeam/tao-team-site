import NavLink from './NavLink'

const NavLinkList = () => (
  <div className="menu-items">
    <NavLink title="Home" route="/" />
    <NavLink title="Work" route="/work" />
    <NavLink title="Team" route="/team" />
    <NavLink title="Services" route="/services" />
    <NavLink title="Contact" route="/contact" />
    <style jsx>{`
      .menu-items {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        line-height: 100%;
        text-transform: uppercase;
      }  
    `}</style>
  </div>
)

export default NavLinkList