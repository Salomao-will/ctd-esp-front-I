import './style.sass';

export const Loguin = () => {
  return (
    <div className='loguin-component'>
      <main className='container'>
        <h1>Shop Products</h1>

        <form className='form-loguin'>
          <h2>Loguin</h2>
          <p>Insira seus dados para entrar no sistema</p>
          <input type="text" placeholder='Digite seu email' />
          <input type="passsword" placeholder='Digite sua senha' />
          <button>Entrar</button>
        </form>

        <small>Todos os direitos reservados | 2023</small>
      </main>
    </div>
  )
}
