import YodaImage from '../assets/images/yoda.png'
import './Error.css'

export const Error = ({text}) => {
  return (
    <div className="error-fetch">
      <p>{text}</p>
      <img
        src={YodaImage}
        alt="Yoda sad, Yoda failed"
        width="400px"
        height="400px"
      />
    </div>
  )
}
