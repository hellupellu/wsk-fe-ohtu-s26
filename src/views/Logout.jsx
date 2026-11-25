import {useNavigate} from 'react-router';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Logout;
