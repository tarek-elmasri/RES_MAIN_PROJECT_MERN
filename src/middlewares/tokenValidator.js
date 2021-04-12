const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const { User, Profile } = require('../../db/models')

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
  //TODO : Implement redis
  const user = await User.findOne({ where: { uuid: jwt_payload.uuid }, include: Profile })

  if (user) {
    return done(null, user)
  }
  else { return done(null, false) }

}));

const authenticateUser = passport.authenticate('jwt', { session: false })

module.exports = {
  authenticateUser
}