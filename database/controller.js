import Users from "../model/user";

//GET : "htpp://localhost:3000/api/users"
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});

    if (!users) return res.status(404).json({ error: "User not found" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Erro while fetching user" });
  }
}

export async function getUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await Users.findById(userId);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "User not Select" });
  } catch (error) {
    res.status(404).json({ error: "Can't find User" });
  }
}

//POST : "htpp://localhost:3000/api/users"
export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form data not provided...!" });
    Users.create(formData, (err, data) => {
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(404).json({ error });
  }
}

//PUT : "htpp://localhost:3000/api/users"
export async function putUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      await Users.findByIdAndUpdate(userId, formData , {
        new: true
      });
      res.status(200).json(formData);
    }
    res.status(404).json({ error: "User Not Selected..!" });
  } catch (error) {
    res.status(404).json({ error: "Error while  Updation the Data..!" });
  }
}

//DELETE : "htpp://localhost:3000/api/users"
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      await Users.findByIdAndDelete(userId);
      res.status(200).json({ error: "User Delete successfully" });
    }
    res.status(404).json({ error: "User Not Delete plese try again..!" });
  } catch (error) {
    res.status(404).json({ error: "Error while  Delete the Data..!" });
  }
}
