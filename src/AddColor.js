import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function AddColor() {
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["teal", "orange", "skyblue"]);
  const styles = { backgroundColor: color };
  return (
    <div>
      <div className="color-box">
        <TextField onChange={(x) => setColor(x.target.value)} style={styles} value={color} label="Enter the color" variant="standard" />
        <Button onClick={() => setColors([...colors, color])} variant="contained">Add Color</Button>
      </div>
      {colors.map((clr) => <ColorBox color={clr} />)}
    </div>
  );
}
export function ColorBox({ color }) {
  const styles = { backgroundColor: color, height: "40px", width: "320px", marginTop: "10px" };
  return (
    <div className="colorbox" style={styles}>

    </div>
  );
}
