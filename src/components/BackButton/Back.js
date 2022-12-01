import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

export default function Back() {
	const navigate = useNavigate();

	return (
		<button onClick={() => navigate(-1)}>
			<ArrowBackIosIcon />
		</button>
	);
}
