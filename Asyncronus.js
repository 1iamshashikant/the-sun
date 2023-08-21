function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        resolve(post);
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.lastActivityTime = new Date();
        resolve(user.lastActivityTime);
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
  
  //  user and posts array
  const user = { Name: "Shashi Kant", lastActivityTime: null };
  const posts = [];
  
  // Capture initial last activity time
  updateLastUserActivityTime(user)
    .then((initialActivityTime) => {
      console.log("Initial last activity time:", initialActivityTime);
  
      const newPost = { id: 1, content: "SharpenerHallOfFame" };
  
      // Create a new post and update user's last activity time
      Promise.all([createPost(newPost), updateLastUserActivityTime(user)])
        .then(([createdPost, updatedActivityTimeAfterCreate]) => {
          console.log("Posts created:", posts);
          console.log("User's last activity time after creating post:", updatedActivityTimeAfterCreate);
  
          // Delete the last post
          deletePost(createdPost)
            .then((deletedPost) => {
              console.log("Post deleted:", deletedPost);
  
              //  user's last activity time after deleting post
              updateLastUserActivityTime(user)
                .then((updatedActivityTimeAfterDelete) => {
                  console.log("Updated posts:", posts);
                  console.log("User's last activity time after deleting post:", updatedActivityTimeAfterDelete);
                  console.log("User's Name:", user.Name);
                })
                .catch((error) => {
                  console.error("Error updating last activity time after delete:", error);
                });
            })
            .catch((error) => {
              console.error("Error deleting post:", error);
            });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    })
    .catch((error) => {
      console.error("Error updating last activity time:", error);
    });
  