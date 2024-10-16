import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';



export function Google() {
  const handleLoginSuccess = (credentialResponse) => {
    console.log("Login successful:", credentialResponse);
    // Você pode enviar o token JWT para seu servidor para validar
  };

  const handleLoginError = () => {
    console.log("Login falhou");
  };

  return (
    <>
      <GoogleOAuthProvider clientId="S530003827078-63dltmqvl9ton7lombt09dug5btvjvj0.apps.googleusercontent.com">
        <div className="App">
          <h3>Seu Cadastro</h3>
          <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
        </div>
      </GoogleOAuthProvider>
      </>
    );
}
