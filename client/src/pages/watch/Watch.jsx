import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import { Link } from "react-router-dom";

export default function Watch() {

  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        <Link to='/home' className='link'>Home</Link>
      </div>
      <video
        src="video/video.mp4"
        className="video"
        autoPlay
        progress
        controls
      />
    </div>
  );
}