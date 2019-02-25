import React, { PureComponent } from 'react'
import Link from 'next/link'

export default class Layout extends PureComponent {
  goToHome = () => {
    //return home
  }
  render () {
    return (
      <div className='container'>
        <header>
          <Link href='/'>
            <a>
              <img src='/static/next-logo.png' /><h3>Britain</h3>
            </a>
          </Link>
          
          <menu>
            <Link href='/explore'>
              <a>Explore</a>
            </Link>
            <Link href='/source'>
              <a>All News Source</a>
            </Link>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </menu>
          <style jsx>{`
            header {
              display: flex;
              align-items: center;
              font-family: Roboto;
              margin: 10px 20px;
            }
            h3 {
              margin-left: 10px
            }
            img {
              width: 30px;
            }
            menu > a {
              margin-right: 16px;
            }
          `}</style>
        </header>
        { this.props.children }
      </div>
    )
  }
}
