import {Router} from 'express';
import passport from 'passport';
const router = Router();

router.get('/special', passport.authenticate('jwt', { session: false}), (req, res) => {
    res.send('Has accesido satisfactoriamente a las rutas privadas');
})

export default router