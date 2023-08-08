import { useContext } from 'react'
import { ToastContainer } from 'react-toastify'

export const RegisterForm = ({
  username,
  setUsername,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
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
      <div className="form">
        <form onSubmit={onSubmit}>
          <div className="title">Welcome</div>
          <div className="subtitle">Let's create your account!</div>

          <div className="input-container ic1">
            <input
              placeholder="Username"
              type="text"
              className="input"
              id="username"
              value={username}
              required
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
            <div className="cut"></div>
            <label className="iLabel" htmlFor="username"></label>
          </div>

          <div className="input-container ic2">
            <input
              placeholder="Password"
              type="password"
              className="input"
              id="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <div className="cut"></div>
            <label className="iLabel" htmlFor="password"></label>
          </div>
          <div className="input-container ic2">
            <input
              placeholder="Confirm Password"
              type="password"
              className="input"
              required
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
              }}
            />
            <div className="cut cut-short"></div>
            <label className="iLabel" htmlFor="confirmPassword"></label>
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
          <span
            className="signUp"
            onClick={() => {
              setInUsage(false)
            }}
          >
            Already Registered? Sign In!
          </span>
        </form>
      </div>
    </>
  )
}
