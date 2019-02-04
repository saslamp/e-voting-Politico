
import express from 'express';
import Auth from '../controllers/authController';
import Office from '../controllers/officeController';
import Party from '../controllers/partyController';
import authValidation from '../middlewares/authValidator';
import verifyToken from '../middlewares/verifyToken';
import verifyAdmin from '../middlewares/verifyAdmin';


const router = express.Router();

router.get('/', (req, res) => res.json('Successful!, Welcome to Politico API v1!'));


router.post('/auth/signup', authValidation.signup, Auth.signUp);
router.get('/parties', verifyToken, verifyAdmin, Party.getParties);
router.get('/parties/:id', verifyToken, verifyAdmin, Party.getOneParty);
router.post('/parties', verifyToken, verifyAdmin, Party.createParty);
router.patch('/parties/:id', verifyToken, verifyAdmin, Party.editParty);
router.delete('/parties/:id', verifyToken, verifyAdmin, Party.deleteParty);
router.get('/offices', verifyToken, verifyAdmin, Office.getOffices);
router.get('/offices/:id', verifyToken, verifyAdmin, Office.getOneOffice);
router.post('/offices', verifyToken, verifyAdmin, Office.createOffice);
router.use('*', (req, res) => res.json('Route does not exist'));


export default router;
