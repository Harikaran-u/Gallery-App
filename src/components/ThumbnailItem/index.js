// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {
    thumbnailUrl,
    thumbnailAlt,
    selectedImage,
    natureImgId,
    isSelected,
  } = props

  const selectedClassStyles = 'selected-thumb'
  const ordinaryStyles = 'thumbnail-img'

  const thumbStyle = isSelected ? selectedClassStyles : ordinaryStyles

  const sendId = () => {
    selectedImage(natureImgId)
  }

  const thumbnail = (
    <li className="thumbnail-img-list">
      <button className="thumb-btn" type="button" onClick={sendId}>
        <img src={thumbnailUrl} className={thumbStyle} alt={thumbnailAlt} />
      </button>
    </li>
  )
  return thumbnail
}

export default ThumbnailItem
