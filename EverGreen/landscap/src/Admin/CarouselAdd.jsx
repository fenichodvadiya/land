import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box, TextField, Button, Grid, Typography, Dialog,
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function CarouselAdd() {
  const [data, setData] = useState({ name: "", image: null });
  const [gallery, setGallery] = useState([]);
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  // OPEN ADD
  const handleClickOpen = () => {
    setData({ name: "", image: null });
    setEditId(null);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handledata = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // FETCH
  const fetchGallery = async () => {
  try {
    const res = await axios.get("http://localhost:8000/Carousel/GetCarousel");

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

  // CREATE / UPDATE
  const saveCarousel = async () => {
    const formData = new FormData();
    formData.append("name", data.name);
    if (data.image) formData.append("image", data.image);

    try {
      if (editId) {
        // UPDATE
        await axios.put(
          `http://localhost:8000/Carousel/UpdateCarousel/${editId}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } else {
        // CREATE
        await axios.post(
          "http://localhost:8000/Carousel/CreateCarousel",
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

  // EDIT OPEN
  const handleEdit = (item) => {
    setData({ name: item.name, image: null });
    setEditId(item._id);
    setOpen(true);
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/Carousel/DeleteCarousel/${id}`);
      fetchGallery();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>

      {/* ADD BUTTON */}
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ mb: 2, bgcolor: "#2E7D32" }}
      >
        ADD Carousel
      </Button>

      {/* DIALOG */}
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{ p: 3, width: 400 }}>

          <Typography variant="h6" textAlign="center" color="#2E7D32">
            {editId ? "EDIT CAROUSEL" : "ADD CAROUSEL"}
          </Typography>

          <Grid container spacing={2} mt={1}>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={data.name}
                onChange={handledata}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                type="file"
                onChange={(e) =>
                  setData({ ...data, image: e.target.files[0] })
                }
              />
            </Grid>

            <Grid item xs={12} textAlign="center">
              <Button
                variant="contained"
                onClick={saveCarousel}
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

                <TableCell>{item.name}</TableCell>

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

export default CarouselAdd;