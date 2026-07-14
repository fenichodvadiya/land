import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  Dialog,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Advertisement() {

  const [data, setData] = useState({ name: "", image: null });
  const [gallery, setGallery] = useState([]);
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  // OPEN MODAL
  const handleOpen = () => {
    setData({ name: "", image: null });
    setEditId(null);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // FETCH
  const fetchGallery = async () => {
  try {
    const res = await axios.get("http://localhost:8000/Advertisement/GetAdver");

    console.log(res.data);

    setGallery(Array.isArray(res.data.msg) ? res.data.msg : []);
  } catch (err) {
    console.log(err);
    setGallery([]);
  }
};
useEffect(() => {
  fetchGallery();
}, []);
 
  // CREATE + UPDATE
  const saveAdver = async () => {
      console.log("Button Clicked");
    const formData = new FormData();
    formData.append("name", data.name);
    if (data.image) formData.append("image", data.image);

    try {
      if (editId) {
        // UPDATE
        await axios.put(
          `http://localhost:8000/Advertisement/UpdateAdver/${editId}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } else {
        // CREATE
        console.log(data);
console.log(formData.get("name"));
console.log(formData.get("image"));
        await axios.post(
          "http://localhost:8000/Advertisement/CreateAdver",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      }

      setOpen(false);
      setData({ name: "", image: null });
      setEditId(null);
      fetchGallery();

    } catch (err) {
      console.log(err);
    }
  };

  // EDIT
  const handleEdit = (item) => {
    setData({ name: item.name, image: null });
    setEditId(item._id);
    setOpen(true);
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8000/Advertisement/DeleteAdver/${id}`
      );
      fetchGallery();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box sx={{ p: 2 }}>

      {/* ADD BUTTON */}
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ mb: 2, bgcolor: "#2E7D32" }}
      >
        ADD Advertisement
      </Button>

      {/* DIALOG */}
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{ p: 3, width: 400 }}>

          <Typography textAlign="center" fontWeight="bold" color="#2E7D32">
            {editId ? "EDIT ADVERTISEMENT" : "ADD ADVERTISEMENT"}
          </Typography>

          <Grid container spacing={2} mt={1}>

            <Grid size={ 12 }>
              <TextField
                fullWidth
                label="Name"
                value={data.name}
                onChange={(e) =>
                  setData({ ...data, name: e.target.value })
                }
              />
            </Grid>

            <Grid size={ 12 }>
              <TextField
                fullWidth
                type="file"
                onChange={(e) =>
                  setData({ ...data, image: e.target.files[0] })
                }
              />
            </Grid>

            <Grid size={ 12 } textAlign="center">
              <Button
                variant="contained"
                onClick={saveAdver}
                sx={{ bgcolor: "#2E7D32" }}
              >
                {editId ? "Update" : "Send"}
              </Button>
            </Grid>

          </Grid>
        </Box>
      </Dialog>

      {/* TABLE */}
      <TableContainer component={Paper}>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {gallery.map((item) => (
              <TableRow key={item._id}>

                <TableCell sx={{ color: "#2E7D32" }}>
                  {item.name}
                </TableCell>

                <TableCell>
                  <img
                    src={`http://localhost:8000/uploads/${item.image}`}
                    width="60"
                    height="60"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </TableCell>

                <TableCell>
                  <EditIcon
                    sx={{ cursor: "pointer", color: "#2E7D32" }}
                    onClick={() => handleEdit(item)}
                  />
                </TableCell>

                <TableCell>
                  <DeleteIcon
                    sx={{ cursor: "pointer", color: "red" }}
                    onClick={() => handleDelete(item._id)}
                  />
                </TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

    </Box>
  );
}