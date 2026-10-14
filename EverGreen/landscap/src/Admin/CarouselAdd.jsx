import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box, TextField, Button, Grid, Typography, Dialog,
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper
} from "@mui/material";
import API from "../Api/Axious";
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
    // console.log("Carousel Images:", res.data.msg.map(item => item.image));
  };

  // FETCH
  const fetchGallery = async () => {
  try {
    const res = await API.get("/Carousel/GetCarousel");

    
    console.log("API RESPONSE:", res);
    console.log("Carousel Data:", res.data);

    setGallery(Array.isArray(res.data.msg) ? res.data.msg : []);
  } catch (err) {
    console.log(err);
    setGallery([]);
    console.log(gallery,"cr")
  }
};

  useEffect(() => {
    fetchGallery();
  }, []);

const saveCarousel = async () => {
  try {
    console.log("🔥 1. SAVE CLICKED");
    console.log("NAME:", data.name);
    console.log("IMAGE:", data.image);

    if (!data.name) {
      console.log("❌ NAME REQUIRED");
      return;
    }

    if (!data.image) {
      console.log("❌ IMAGE NOT SELECTED");
      return;
    }

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("image", data.image);

    console.log("🔥 2. FORM DATA CREATED");

    for (let pair of formData.entries()) {
      console.log("FORM DATA:", pair[0], pair[1]);
    }

    console.log("🔥 3. POST START");

    let res;

    if (editId) {
      res = await API.put(
        `/Carousel/UpdateCarousel/${editId}`,
        formData
      );
    } else {
      res = await API.post(
        "/Carousel/CreateCarousel",
        formData
      );
    }

    console.log("🔥 4. POST SUCCESS:", res.data);

    await fetchGallery();

    setData({
      name: "",
      image: null,
    });

    setEditId(null);
    setOpen(false);

  } catch (err) {
    console.log("❌ POST ERROR:", err);
    console.log("❌ RESPONSE:", err.response?.data);
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
     await API.delete(`/Carousel/DeleteCarousel/${id}`);
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
           
                           <TableCell sx={{ color: "#2E7D32" }}>
                             {item.name}
                           </TableCell>
           
                           <TableCell>
                           

 <img
 src={`https://land-8m43.onrender.com/uploads/${image.image}`}
  width="80"
  height="60"
  style={{
    objectFit: "cover",
    borderRadius: "6px",
  }}
  alt={item.name}
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