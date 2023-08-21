function createPost(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        posts.push(post);
        resolve(post);
      }, 1000);
    });
  }
  
  async function updateLastUserActivityTime(user) {
    await new Promise((resolve) => {
      setTimeout(() => {
        user.lastActivityTime = new Date();
        resolve();
      }, 1000);
    });
  }
  
  function deletePost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = posts.indexOf(post);
        if (index !== -1) {
          posts.splice(index, 1);
          resolve(post);
        } else {
          reject("Post not found");
        }
      }, 1000);
    });
  }
  
  // user and posts array
  const user = { Name: "Shashi Kant", lastActivityTime: null };
  const posts = [];
  
  (async () => {
    try {
      // Capture initial last activity time
      await updateLastUserActivityTime(user);
      console.log("Initial last activity time:", user.lastActivityTime);
  
      const newPost = { id: 1, content: "SharpenerHallOfFame" };
  
      // Create a new post and update user's last activity time
      const createdPost = await createPost(newPost);
      await updateLastUserActivityTime(user);
      console.log("Posts created:", posts);
      console.log("User's last activity time after creating post:", user.lastActivityTime);
  
      // Delete the last post
      const deletedPost = await deletePost(createdPost);
      await updateLastUserActivityTime(user);
      console.log("Post deleted:", deletedPost);
      console.log("Updated posts:", posts);
      console.log("User's last activity time after deleting post:", user.lastActivityTime);
      console.log("User's Name:", user.Name);
    } catch (error) {
      console.error("Error:", error);
    }
  })();
  