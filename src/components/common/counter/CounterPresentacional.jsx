import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

const CounterPresentacional = ( {sumar, contador, restar, onAdd} ) => {

    return (
      <div>
        <Box sx={{ '& > :not(style)': { m: 1 } }} className="addProducts">
          <Fab onClick={restar} size="small" color="secondary" aria-label="add">
                        <RemoveIcon />
                    </Fab>
                    <span>{contador}</span>
                    <Fab onClick={sumar} size="small" color="secondary" aria-label="add">
                        <AddIcon />
          </Fab>
        </Box>
        <Button variant="contained" color="secondary" onClick={()=>onAdd(contador)}>Agregar al carrito</Button>

      </div>
    );
  };
  
  export default CounterPresentacional;