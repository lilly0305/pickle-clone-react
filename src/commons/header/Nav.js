import { Link } from "react-router-dom"

export const Nav = () => {
  return(
    <nav>
      <Link to="/" className="active">홈</Link>
      <Link to="/">파티매칭</Link>
      <Link to="/">My파티</Link>
      <Link to="/">가이드</Link>
    </nav>
  )
}