import { Router } from "express";
import { validateJobInput, validateIdParam } from "../middleware/validationMiddleware.js";
const router = Router();

import { getALLJobs, deleteJob, updateJob, getSingleJob, createJob, showStats } from "../controllers/jobControllers.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";
router.route('/').get(getALLJobs).post(checkForTestUser, validateJobInput, createJob)

router.route('/stats').get(showStats)
router
  .route("/:id")
  .get(validateIdParam, getSingleJob)
  .patch(checkForTestUser, validateJobInput, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default router;