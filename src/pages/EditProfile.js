import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import { editProfile } from "../redux/slices/userSlice";

const EditProfile = () => {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const description = useSelector((state) => state.description);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editedUser, setEditedUser] = useState({ name, email, description });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    dispatch(editProfile(editedUser));
    navigate(-1);
  };

  return (
    <Box
      p={8}
      bg="gray.100"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="50%" bg="white" p={6} borderRadius="lg" shadow="md">
        <Heading mb={4} size="lg">
          Edit Profile
        </Heading>
        <form onSubmit={handleSaveChanges}>
          <FormControl mb={4}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={editedUser.description}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Save Changes
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default EditProfile;
