import Button from "@mui/material/Button";

export default function MyButton({ children, ...props }) {
  return (
    <Button variant="contained" {...props}>
      {children}
    </Button>
  );
}
