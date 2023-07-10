import React from 'react'

export default function Product() {
  return (
    <div>
      <div className={classes.container}>
      <div className={classes.dropdown}>
        <button className={classes.dropbtn}>Dropdown</button>
        <div className={classes.dropdownContent}>
          <Link className={classes.link} href="#">Link 1</Link>
          <Link className={classes.link} href="#">Link 2</Link>
          <Link className={classes.link} href="#">Link 3</Link>
          <Link className={classes.link} href="#">Link 4</Link>
          <Link className={classes.link} href="#">Link 5</Link>
          <Link className={classes.link} href="#">Link 6</Link>
          <Link className={classes.link} href="#">Link 7</Link>
          <Link className={classes.link} href="#">Link 8</Link>
          <Link className={classes.link} href="#">Link 9</Link>
          <Link className={classes.link} href="#">Link 10</Link>
          <Link className={classes.link} href="#">Link 11</Link>
          <Link className={classes.link} href="#">Link 12</Link>
        </div>
      </div>
    </div>
      </div>
  )
}
