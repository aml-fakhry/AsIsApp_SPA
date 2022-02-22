/**
 * The creat signup data-model.
 */
export interface SignUpInput {
  /**
   * Gets or sets the user name of the user sign up.
   */
  username: string;

  /**
   * Gets or sets the email of the user sign up.
   */
  email: String;

  /**
   * Gets or sets the phone of the user sign up.
   */
  phone: String;

  /**
   * Gets or sets the gender of the user sign up.
   */
  gender: String;

  /**
   * Gets or sets the password of the user sign up.
   */
  password: String;
}
