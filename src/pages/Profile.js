import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Avatar,
  Text,
  VStack,
  Flex,
  Textarea,
  Input,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { addPost } from "../redux/slices/userSlice";

function Profile() {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const description = useSelector((state) => state.description);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [postTitle, setPostTitle] = useState("");
  const [postDetail, setPostDetail] = useState("");

  const handleAddPost = (e) => {
    e.preventDefault();
    dispatch(addPost({ title: postTitle, detail: postDetail }));
    setPostTitle("");
    setPostDetail("");
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
      <Box w="70%" bg="white" p={6} borderRadius="lg" shadow="md">
        <Flex>
          <Avatar size="xl" src={"https://placekitten.com/100/100"} mb={4} />
          <Box mx="auto" alignSelf="center">
            <Text fontSize="2xl" fontWeight="semibold" textAlign="center">
              {name}
            </Text>
            <Text color="gray.600" textAlign="center">
              {email}
            </Text>
          </Box>
          <Box
            as="button"
            alignSelf="center"
            onClick={() => navigate("/edit-profile")}
          >
            <Text>Edit Profile</Text>
          </Box>
        </Flex>
        <Text mt={4} color="gray.700">
          {description}
        </Text>
        <VStack mt={6} align="start" spacing={2}>
          <Box mb={4}>
            <Text fontSize="md" fontWeight="bold">
              Add Post
            </Text>
            <form onSubmit={handleAddPost}>
              <Input
                type="text"
                placeholder="Title"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                required
              />
              <Textarea
                placeholder="Detail"
                value={postDetail}
                onChange={(e) => setPostDetail(e.target.value)}
                required
              />
              <Button type="submit" colorScheme="blue" mt={2}>
                Save
              </Button>
            </form>
          </Box>
          <Text fontSize="lg" fontWeight="bold">
            Recent Posts
          </Text>
          <Box w="100%">
            {posts.map((post, index) => (
              <Box
                key={index}
                p={4}
                mb={2}
                borderWidth="1px"
                borderColor="gray.300"
                borderRadius="md"
              >
                <Text fontSize="lg" fontWeight="semibold" color="gray.800">
                  {post.title}
                </Text>
                <Text fontSize="md" color="gray.600" mt={1}>
                  {post.detail}
                </Text>
              </Box>
            ))}
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default Profile;
