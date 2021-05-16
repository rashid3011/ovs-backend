const router = require("express").Router();
const {voterController, candidateController, castVoteController} = require("../controllers");
const auth = require("../middlewares/auth");

router.post('/register', voterController.register);
router.post('/login', voterController.login);
router.post('/refresh-token', voterController.refreshToken);

router.get('/voters/:voterid', voterController.getVoterByVoterId);
router.patch('/voters', voterController.updateVoterByVoterId);
router.delete('/voters', voterController.deleteVoterByVoterId);

router.get('/candidate-exists/:type/:area/:partyName', candidateController.candidateExistsByTypeAreaPartyName);
router.post('/request-nomination', candidateController.requestNomination);
router.get('/candidates/:data', candidateController.getCandidateByIdOrType);
router.get('/candidates/:type/:area', candidateController.getCandidatesByTypeAndArea);
router.patch('/candidates', candidateController.updateCandidateByCandidateId);
router.delete('/candidates', candidateController.deleteCandidateByCandidateId);

router.get('/voted/:voterId/:type', castVoteController.isVoted);
router.post('/cast-vote', castVoteController.castVote);
router.get('/results/:type/:area', castVoteController.resultsByTypeAndArea);
router.get('/cm-results', castVoteController.cmResults);

module.exports = router;