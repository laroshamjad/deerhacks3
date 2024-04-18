class User {
    constructor(name, hourlyRate, description, rating = 1, fname = "./Martin.png") {
      this.name = name;
      this.hourlyRate = hourlyRate;
      this.description = description;
      this.rating = rating;
      this.fname = fname;
    }
  }
  export default User;
  