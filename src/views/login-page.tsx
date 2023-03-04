import { Box } from "@mui/material";
import { Colors } from "../constants/colors";

export default function LoginPage() {
    return <Box sx={styles.outterBox}></Box>;
}

const styles = {
    outterBox: { backgroundColor: Colors.themeColor, height: "100vh", width: "100vw" },
};
