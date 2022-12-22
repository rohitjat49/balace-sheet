import React, { useState } from "react";
import {
  TextField,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Button,
} from "@mui/material/";
import { Toaster, toast } from "react-hot-toast";

function Balancesheet() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const [remark, setRemark] = useState("");

  const handleChangeAmount = (e) => setAmount(e.target.value);
  const handleChangeType = (e) => setType(e.target.value);
  const handleChangeRemark = (e) => setRemark(e.target.value);

  const saveData = () => {
    if (amount > 500) {
      let newArr = { amount: amount, type: type, remark: remark };
      setData((previousArray) => [...previousArray, newArr]);
    } else {
      toast("Hello Darkness!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };


  return (
    <div className="container">
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="row mt-4 border border-dark p-4">
        <div className="col-lg-3">
          <TextField
            onChange={(e) => handleChangeAmount(e)}
            id="outlined-basic"
            label="Enter Amount"
            variant="outlined"
          />
        </div>

        <div className="col-lg-3">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              onChange={(e) => handleChangeType(e)}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value="debit">Debit</MenuItem>
              <MenuItem value="credit">Credit</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-lg-3">
          <TextField
            onChange={(e) => handleChangeRemark(e)}
            id="outlined-basic"
            label="Remark"
            variant="outlined"
          />
        </div>
        <div className="col-lg-3">
          <Button
            onClick={() => saveData()}
            sx={{ height: "50px" }}
            fullWidth={true}
            color="success"
            size="large"
            variant="contained"
          >
            SAVE
          </Button>
        </div>
      </div>

      <div className="row mt-5 border border-dark p-4">
        <div className="d-flex justify-content-center">
          <div className="col-lg-10">
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Amount</th>
                    <th scope="col">Type</th>
                    <th scope="col">Remark</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((ele, ind) => {
                    return (
                      <tr className={show ? "d-none" : "bg-success"} key={ind}>
                        <td>{ele.amount}</td>
                        <td>{ele.type}</td>
                        <td>{ele.remark}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              ind === ind
                                ? setShow(true)
                                : console.log("not dele");
                            }}
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balancesheet;
