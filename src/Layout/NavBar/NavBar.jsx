import { Link } from "react-router-dom"

function NavBar() {
  return (
    <ul>
      <li>
        <Link to='/' aria-label='홈으로 이동'>
          홈
        </Link>
      </li>
      <li>
        <Link to='/change' aria-label='교환 페이지로 이동'>
          교환
        </Link>
      </li>
      <li>
        <Link to='/meetup' aria-label='밋업 페이지로 이동'>
          밋업
        </Link>
      </li>
      <li>
        <Link to='/mypage' aria-label='마이페이지로 이동'>
          마이페이지
        </Link>
      </li>
      <li>
        <Link to='/error' aria-label='에러페이지로 이동'>
          Error 페이지
        </Link>
      </li>
    </ul>
  )
}

export default NavBar