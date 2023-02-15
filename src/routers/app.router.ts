import { Router } from 'express';
import { clients } from '~/clients/clients';

const router = Router({ mergeParams: true });

router.get('', (req, res) => res.sendFile('/index.html', { root : __dirname + '/public' }));
router.get('/status', (req, res) => res.json({ clients: clients.length }));

export default router;