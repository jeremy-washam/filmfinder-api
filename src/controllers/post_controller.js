import Post from '../models/post_model';

export const createPost = (req, res) => {
  const post = new Post();
  post.title = req.body.title;
  post.tags = req.body.tags;
  post.content = req.body.content;
  post.coverUrl = req.body.coverUrl;
  post.rating = req.body.rating;
  post.username = req.user.username;
  post.author = req.user._id;
  post.save()
    .then((result) => {
      res.json({ message: 'Post created!' });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const getPosts = (req, res) => {
  Post.find({})
    .then((result) => {
      result.sort((post1, post2) => {
        return post2.createdAt - post1.createdAt;
      });
      res.json(result);
    }).catch((error) => {
      res.status(500).json({ error });
    });
};

export const getPostsByRating = (req, res) => {
  Post.find({})
    .then((result) => {
      result.sort((post1, post2) => {
        return post2.rating - post1.rating;
      });
      res.json(result);
    }).catch((error) => {
      res.status(500).json({ error });
    });
};

export const getPost = (req, res) => {
  Post.findById(req.params.id).populate('author')
    .then((result) => {
      res.json(result);
    }).catch((error) => {
      res.status(500).json({ error });
    });
};

export const deletePost = (req, res) => {
  Post.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.json({ message: 'Post deleted!' });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const updatePost = (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
