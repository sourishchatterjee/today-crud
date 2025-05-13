const userModel= require('../model/user')

class Crud {
  home = async (req, res) => {
    res.render("index");
  };

  create = async (req, res) => {
    try {
      let { name, email, gender } = req.body;
      await userModel.create({ name, email, gender });
      res.redirect("/read");
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

  read = async (req, res) => {
    try {
      let allusers = await userModel.find();
      res.render("read", { users: allusers });
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  edit = async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id);
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.render("edit", { user });
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

  updated = async (req, res) => {
    try {
      let { name, email, gender } = req.body;
      await userModel.findOneAndUpdate(
        { _id: req.params.id },
        { name, email, gender },
        { new: true }
      );
      res.redirect("/read");
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

  delete = async (req, res) => {
    try {
      await userModel.findOneAndDelete({ _id: req.params.id });
      res.redirect("/read");
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
}

module.exports= new Crud()