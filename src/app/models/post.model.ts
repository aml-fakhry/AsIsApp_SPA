export interface postInput {
  /**
   * Gets or sets the content of the user sign up.
   */
  username: string;

  comments: [];
  content: string;
  createdAt: Date;
  likes: [];
  totalLikes: Number;
  userId: string;

  _id: string;
}
