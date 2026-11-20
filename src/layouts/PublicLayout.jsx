
import { Outlet } from 'react-router'

export const PublicLayout = () => {
  return (
    <div>
        <h1>HEADER</h1>
        <Outlet/>
        <footer>FOOTER</footer>
    </div>
  )
}

export default PublicLayout