import Menu from './Menu'

const withLayout = Page => {
  return () => (
    <div className="container">
      <Menu />
      <Page />
    </div>
  )
}

export default withLayout