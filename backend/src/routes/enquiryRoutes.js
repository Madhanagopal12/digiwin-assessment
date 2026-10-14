import express from "express";
import {
  getAllEnquiries,
  getEnquiryById,
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
} from "../controllers/enquiryController.js";
import {
  enquiryValidationRules,
  validateRequest,
} from "../middlewares/validateEnquiry.js";

const router = express.Router();

router.get("/", getAllEnquiries);
router.get("/:id", getEnquiryById);
router.post("/", enquiryValidationRules, validateRequest, createEnquiry);
router.put("/:id", enquiryValidationRules, validateRequest, updateEnquiry);
router.delete("/:id", deleteEnquiry);

export default router;
