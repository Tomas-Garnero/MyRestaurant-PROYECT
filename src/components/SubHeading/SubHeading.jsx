import { images } from "../../constants";
import "animate.css";

const SubHeading = ({ title }) => (
    <div style={{ marginBottom: "1rem" }}>
        <p className="p__cormorant">
            {title}
        </p>
        <img src={images.spoon} alt="spoon" className="spoon__img animate__animated animate__pulse animate__infinite"/>
    </div>
);

export default SubHeading;
