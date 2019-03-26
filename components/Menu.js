import Link from 'next/link'

const Menu = () => (
  <div className="menu">
    <Link href="/">
      <a title="Home">Home</a>
    </Link>
    <Link href="/work">
      <a title="Work">Work</a>
    </Link>
    <Link href="/team">
      <a title="Team">Team</a>
    </Link>
    <Link href="/services">
      <a title="Services">Services</a>
    </Link>
    <Link href="/contact">
      <a title="Contact">Contact</a>
    </Link>
  </div>
)

export default Menu