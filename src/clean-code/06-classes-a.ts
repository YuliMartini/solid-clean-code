(() => {
  // No aplicando principio de responsabilidad única

  type Gender = "M" | "F" | "NB";

  class Person {
    // public name: string;
    // public gender: Gender;
    // public birthday: Date;

    // constructor(name: string, gender: Gender, birthday: Date) {
    //   this.name = name;
    //   this.gender = gender;
    //   this.birthday = birthday;
    // }

    constructor(
      public name: string,
      public gender: Gender,
      public birthday: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthday: Date
    ) {
      super(name, gender, birthday);
      this.lastAccess = new Date();
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthday: Date
    ) {
      super(email, role, name, gender, birthday);
    }
  }

  const userSettings = new UserSettings(
    "/user/home",
    "/home",
    "yulimartini@gmail.com",
    "Admin",
    "Giuliana",
    "M",
    new Date("1994-05-08")
  );

  const newPerson = new Person("Giuliana", "F", new Date("1994-05-08"));
  console.log({ userSettings });
})();
