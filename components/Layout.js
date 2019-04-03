import { Component, Fragment } from 'react'
import Head from 'next/head'
import Header from './Header'
import Menu from './Menu/index'

const withLayout = Page => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        menuOpen: false,
      }
    }

    handleMenuOpen = () => {
      this.setState(state => ({
        menuOpen: !state.menuOpen
      }))
    }

    render() {
      return(
        <Fragment>
          <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://fonts.googleapis.com/css?family=Montserrat:800" rel="stylesheet"></link>
          </Head>
          <Header
            open={this.state.menuOpen}
            onMenuOpen={this.handleMenuOpen}
          />
          <Menu open={this.state.menuOpen} />
          <Page />
        </Fragment>
      )
    }
  }
}

export default withLayout