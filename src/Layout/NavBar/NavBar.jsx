import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) =>
            isActive ? "active" : ""} aria-label='홈으로 이동'>
            홈
          </NavLink>
        </li>
        <li>
          <NavLink to='/change' className={({ isActive }) =>
            isActive ? "active" : ""} aria-label='교환 페이지로 이동'>
            교환
          </NavLink>
        </li>
        <li>
          <NavLink to='/meetup' className={({ isActive }) =>
            isActive ? "active" : ""} aria-label='밋업 페이지로 이동'>
            밋업
          </NavLink>
        </li>
        <li>
          <NavLink to='/mypage' className={({ isActive }) =>
            isActive ? "active" : ""} aria-label='마이페이지로 이동'>
            마이페이지
          </NavLink>
        </li>
        <li>
          <NavLink to='/error' className={({ isActive }) =>
            isActive ? "active" : ""} aria-label='에러페이지로 이동'>
            Error 페이지
          </NavLink>
        </li>
      </ul>
    </nav >
  )
}

export default NavBar