module.exports = {
  privated: (req, res, next) => {
    if (!req.user.phone) {
      res.error(500).json({
        error: 'You need token to access this routes'
      });
    } else {
      next();
    }
  }
}