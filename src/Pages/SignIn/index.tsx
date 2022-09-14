import './styles.css'
import { GoogleLogo } from 'phosphor-react'
import {
  GoogleAuthProvider,
  signInWithPopup,
  User,
  GithubAuthProvider,
} from 'firebase/auth'
import { auth } from '../../services/firebase'
import { useState } from 'react'

export function SignIn() {
  const [user, setUser] = useState<User>({} as User)
  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="container">
      <div className="user">
        {user.photoURL && <img src={user.photoURL} alt="FOTO" />}
      </div>
      <h1>Acesse sua conta</h1>
      <span>
        Utilizaçao autenticaçao social, por exemplo, autenticaçao com a Google
        você <br />
        facilita a vida do usuário permitindo utilizar sua aplicação sem fazer
        cadastro
      </span>
      <button onClick={handleGoogleSignIn} className="button">
        {' '}
        <GoogleLogo /> Entrar com Google
      </button>
    </div>
  )
}
