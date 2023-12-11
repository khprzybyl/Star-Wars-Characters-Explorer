import YodaImage from '../assets/images/yoda.png'
import './ErrorFetch.css'

export const ErrorFetch = () => {
  return (
    <div className="error-fetch">
      <p>Even Yoda couldn’t foresee this error. Please try again later.</p>
      <img
        src={YodaImage}
        alt="Yoda sad, Yoda failed"
        width="400px"
        height="400px"
      />
    </div>
  )
}
