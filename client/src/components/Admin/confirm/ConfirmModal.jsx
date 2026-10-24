import { Box, Button, Modal, Typography } from "@mui/material";

export default function ConfirmModal({ open, onclose, onconfirm }) {
  return (
    <>
      <Modal open={open}>
        <Box
          sx={{
            bgcolor: "white",
            position: "absolute",
            color: "black",
            width: "500px",
            p: 3,
            m: 3,
            borderRadius: 2,
            textAlign: "center",
            top: "35%",
            left: "35%",
          }}
        >
          <Typography variant="h3">Are yuo sure you want to delete this item</Typography>

          <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",gap:2,p:2}}>
            <Button onClick={() => onconfirm()} variant="contained" color="error">OK</Button>
            <Button onClick={() => onclose()} variant="contained" color="warning">Cancel</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
