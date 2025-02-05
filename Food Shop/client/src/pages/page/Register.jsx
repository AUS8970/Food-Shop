import { updateProfile } from 'firebase/auth';
import useAuth from '../../hooks/useAuth';
import GoogleSignIn from '../shared/GoogleSignIn';
import { auth } from '../../firebase/firebase.init';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {

  // TODO 1: navigate log in page link
  // TODO 2: google signin link

  const navigate = useNavigate();
  const { createUser, setUser, upadteUser } = useAuth();

  const handleRegister = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    createUser(email, password)
    .then((res) => {
      setUser(res.user)
      updateProfile(auth.currentUser,{displayName: name, photoURL: photo})
      .then(() => {
        navigate('/')
      }).catch(err => console.log(err))
    })
    .catch((err) => console.log(err.message))

    console.log(name, email, password, photo)
  }

  return (
    <div className="card w-full max-w-3xl shrink-0 mx-auto">
      <h2 className="text-3xl text-center font-bold mt-6"> Register Form </h2>
      <GoogleSignIn />
      <form onSubmit={handleRegister} className="card-body pt-0">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Name </span>
            </label>
            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Email </span>
            </label>
            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Photo URL </span>
            </label>
            <input name='photo' type="url" placeholder="photo url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Password </span>
            </label>
            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-yellow-800 text-white"> Register </button>
        </div>
      </form>
      <h2 className='text-center mb-5'> Already have an account? <Link to={'/logIn'} className="text-yellow-800 font-semibold"> Login Here </Link></h2>
    </div>
  );
};

export default Register;