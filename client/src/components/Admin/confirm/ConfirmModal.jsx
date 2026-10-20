import { Box, Button, Modal, Typography } from "@mui/material";

export default function ConfirmModal({open , onclose , onconfirm}){
return(<>

<Modal open = {open}>
    <Box>

        <Typography>Are yuo sure you want to delete this item</Typography>
   

    <Box>

    <Button  onClick={() => onconfirm()}>OK</Button>
    <Button onClick={() => onclose()}>Cancel</Button>

    </Box>
 </Box>
</Modal>



</>)


}