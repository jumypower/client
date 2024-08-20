import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

const TotalItems = () => {

  const { cart } = useContext(DataContext);
  const totalQuanty = cart.reduce((acc, el) => acc + el.quanty, 0)

  return cart.length > 0 ? (
    <>
      <Button type="button" class="btn btn-danger btn-sm btn-rounded fw-bold">
        {totalQuanty}
      </Button>
    </>
  ) : (
    null
  )
}

export default TotalItems