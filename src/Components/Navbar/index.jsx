import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigation = useNavigate()

  const logout = () =>{
    const token = sessionStorage.getItem('token')
    console.log(token)
    if (token) {
      sessionStorage.removeItem(token);
      sessionStorage.clear()
      navigation('/login')
    }
  }

  return (
    <nav className="navbar bg-primary topbar mb-4 static-top shadow justify-content-end">
      <button className="btn btn-default text-white" onClick={() => logout()}>Logout</button>
    </nav>
  );
}
