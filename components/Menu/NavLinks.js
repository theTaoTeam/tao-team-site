import MenuItem from './MenuItem'

const NavLinks = () => (
  <div className="menu-items">
    <MenuItem title="Home" route="/" />
    <MenuItem title="Work" route="/work" />
    <MenuItem title="Team" route="/team" />
    <MenuItem title="Services" route="/services" />
    <MenuItem title="Contact" route="/contact" />
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

export default NavLinks