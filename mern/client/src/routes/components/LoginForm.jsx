import { ToastContainer } from 'react-toastify'
import { useContext } from 'react'

export const LoginForm = ({
  username,
  setUsername,
  password,
  setPassword,
  onSubmit,
  UserContext,
}) => {
  const { setInUsage } = useContext(UserContext)
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={true}
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="form2">
        <form onSubmit={onSubmit}>
          <div className="title">Welcome</div>
          <div className="subtitle">Login with your credentials!</div>

          <div className="input-container ic1">
            <input
              placeholder="Username"
              type="text"
              required
              value={username}
              className="input"
              onChange={(e) => {
                setUsername(e.target.value)
              }}
              id="username"
            />
            <div className="cut"></div>
            <label className="iLabel" htmlFor="username"></label>
          </div>

          <div className="input-container ic2">
            <input
              placeholder="Password"
              type="password"
              value={password}
              className="input"
              id="password"
              required
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <div className="cut"></div>
            <label className="iLabel" htmlFor="password"></label>
          </div>

          <div className="input-container ic2">
            <button className="submit2" type="submit">
              Submit
            </button>
            <span onClick={() => setInUsage(true)} className="signIn">
              New User? Signup
            </span>
          </div>
        </form>
      </div>
    </>
  )
}
