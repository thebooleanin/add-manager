"use client";
import React, { useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  CardContent,
  Box,
  Card,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

export default function AddManager() {
  const [filePreview, setFilePreview] = useState<any>(null);
  const [file, setFile] = useState<any>(null);
  const [selectedDimension, setSelectedDimension] = useState<any>("");

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDimensionChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedDimension(event.target.value as string);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "700" }} gutterBottom>
            Create Advertisement
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="title">Title</InputLabel>
                <Input id="title" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="description">Description</InputLabel>
                <Input id="description" multiline rows={4} />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="dimensions-label">Select Dimensions</InputLabel>
                <Select
                  labelId="dimensions-label"
                  id="dimensions"
                  value={selectedDimension}
                  label="Select Dimensions"
                  onChange={(ev: any) => handleDimensionChange(ev)}
                >
                  <MenuItem value="200x200">200x200</MenuItem>
                  <MenuItem value="250x250">250x250</MenuItem>
                  <MenuItem value="300x250">300x250</MenuItem>
                  <MenuItem value="300x600">300x600</MenuItem>
                  <MenuItem value="728x90">728x90</MenuItem>
                  <MenuItem value="468x60">468x60</MenuItem>
                  <MenuItem value="970x90">970x90</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  id="publish-date"
                  label="Publish Date"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  id="end-date"
                  label="End Date"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Input
                  type="file"
                  id="file-upload"
                  onChange={handleFileChange}
                  sx={{ display: "none" }} // Hide the input element
                />
                <label htmlFor="file-upload">
                  <Button variant="contained" component="span" color="primary">
                    Choose File
                  </Button>
                </label>
                <FormHelperText>Please upload your file here.</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            marginBottom: "100px",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Box>
        {filePreview && (
          <Grid item xs={12}>
            <img
              src={filePreview}
              alt="File Preview"
              style={{ maxWidth: "100%" }}
            />
          </Grid>
        )}
      </Card>
    </Box>
  );
}
